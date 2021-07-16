/**
 * 1. The string contains a list of SA codes. Note: It can be empty or contain only one SA code.
 * 2. The SA codes contain only letters, digits, and one colon (e.g. P:441, P:L)
 * 3. The SA codes are separated with a semicolon
 * 4. The last SA code from the list is not followed by a semicolon
 */

const isValidSaCode = (saCode) => {
    const saCodeArray = saCode.split(":");
    const [prefix, value] = saCodeArray;

    if (
        saCodeArray.length !== 2 ||
        !prefix.match("^[A-Za-z0-9]+$") ||
        !value.match("^[A-Za-z0-9]+$")
    ) {
        return false;
    }

    return true;
};

export const isValidSaCodesListString = (saCodesListString) => {
    let result = true;
    const saCodesListArray = saCodesListString.split(";");

    saCodesListArray.forEach((saCode) => {
        if (!isValidSaCode(saCode)) {
            result = false;
        }
    });

    return result;
};
