import { isValidSaCodesListString } from "./SaCodeValidator.js";

const validSaCodes = ["P:20;P:21;P:22;P:23", "P:20"];
const invalidSaCodes = [
    "P:20;;P21;P:22;P:23;",
    "P::20;P21;P:22;P:23",
    "P:20;P21,P:22;P:23",
];

validSaCodes.forEach((saCodesListString) => {
    console.log(isValidSaCodesListString(saCodesListString) === true);
});

invalidSaCodes.forEach((saCodesListString) => {
    console.log(isValidSaCodesListString(saCodesListString) === false);
});
