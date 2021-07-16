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
    const saCodeArray = saCode.split(":");

    if (saCodeArray.length !== 2) {
        return false;
    }

    const prefix = saCodeArray[0].replace(/[a-zA-Z0-9]/g, "");
    const value = saCodeArray[1].replace(/[a-zA-Z0-9]/g, "");

    if (prefix.length !== 0 || value.length !== 0) {
        return false;
    }

    return true;
};

const isValidSaCodeListString = (saCodeListString) => {
    let result = true;
    const saCodeListArray = saCodeListString.split(";");

    saCodeListArray.forEach((saCode) => {
        if (!isValidSaCode(saCode)) {
            result = false;
        }
    });

    return result;
};

validSaCodes.forEach((saCodeListString) => {
    console.log(isValidSaCodeListString(saCodeListString) === true);
});

invalidSaCodes.forEach((saCodeListString) => {
    console.log(!isValidSaCodeListString(saCodeListString) === true);
});
