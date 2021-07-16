/**
 * 1. The string contains a list of SA codes. Note: It can be empty or contain only one SA code.
 * 2. The SA codes contain only letters, digits, and one colon (e.g. P:441, P:L)
 * 3. The SA codes are separated with a semicolon
 * 4. The last SA code from the list is not followed by a semicolon
 */

const validSaCodes = ["P:20;P:21;P:22;P:23", "P:20"];
const invalidSaCodes = [
    "P:20;;P21;P:22;P:23;",
    "P::20;P21;P:22;P:23",
    "P:20;P21,P:22;P:23",
];

const isValidSaCode = (saCode) => {
    const [prefix, value] = saCode.split(":");

    if (
        saCode.split(":").length !== 2 ||
        !prefix.match("^[A-Za-z0-9]+$") ||
        !value.match("^[A-Za-z0-9]+$")
    ) {
        return false;
    }

    return true;
};

const isValidSaCodesListString = (saCodesListString) => {
    let result = true;
    const saCodesListArray = saCodesListString.split(";");

    saCodesListArray.forEach((saCode) => {
        if (!isValidSaCode(saCode)) {
            result = false;
        }
    });

    return result;
};

validSaCodes.forEach((saCodesListString) => {
    console.log(isValidSaCodesListString(saCodesListString) === true);
});

invalidSaCodes.forEach((saCodesListString) => {
    console.log(isValidSaCodesListString(saCodesListString) === false);
});
