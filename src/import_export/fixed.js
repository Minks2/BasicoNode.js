import {sum} from "./functions/math.js"

export function fixedSum(a , b) {
    const result = sum (a,b);
    return result.toFixed(2);
}