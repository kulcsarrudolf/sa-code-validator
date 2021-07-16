/**
 * 1. The string contains a list of SA codes. Note: It can be empty or contain only one SA code.
 * 2. The SA codes contains only letters, digits and one colon (e.g. P:441, P:L)
 * 3. The SA codes are separated with semicolon
 * 4. The last SA code from the list is not folowed by a semicolon
 */

const validSaCodes = ["P:20;P:21;P:22;P:23", "P:20"];
const invalidSaCodes = [
    "P:20;;P21;P:22;P:23;",
    "P::20;P21;P:22;P:23",
    "P:20;P21,P:22;P:23",
];

const isValidSaCode = (saCode) => {
    saCode = saCode.replace(/[a-zA-Z0-9]/g, "");

    if (saCode.match(/^[:;]*$/) === null) {
        return false;
    }

    const firstCharacter = saCode[0];
    const lastCharacter = saCode[saCode.length - 1];

    if (firstCharacter !== ":") return false;
    if (lastCharacter === ";") return false;
    if (lastCharacter === ":") return false;

    let prevCharacter = firstCharacter;
    for (var i = 1; i < saCode.length; i++) {
        if (saCode.charAt(i) === prevCharacter) {
            return false;
        } else {
            prevCharacter = saCode.charAt(i);
        }
    }

    return true;
};

validSaCodes.forEach((saCode) => {
    console.log(isValidSaCode(saCode) === true);
});

invalidSaCodes.forEach((saCode) => {
    console.log(isValidSaCode(saCode) === false);
});
