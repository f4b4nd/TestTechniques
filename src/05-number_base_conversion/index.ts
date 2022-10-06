const getDivision = (a: number, b: number) => {
    return {
        truncatedQuotient: Math.floor(a / b),
        remainder: a % b,
    }
}

const digitToCharacter = (digit: number): string => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (digit < chars.length) return chars[digit]
    throw 'Cannot represent digit in base > 62'
}

const characterToDigit = (char: string): number => {
    if (char.length !== 1) throw 'Character length must equal to 1'
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split("")
    const matchIndex = chars.reduce((acc, curr, idx) => (!acc && curr === char) ? idx : acc, NaN)
    if (matchIndex || matchIndex === 0) return matchIndex
    throw `No character found for char: ${char}`
}

const getSuccessiveRemainders = (a: number, b: number): string[] => {
 
    if (a === 0) return []

    const {truncatedQuotient, remainder} = getDivision(a, b)

    const remainderAsChar = digitToCharacter(remainder)

    return [remainderAsChar, ...getSuccessiveRemainders(truncatedQuotient, b)]

}

export const getConvertedFromBase10 = (n: number, base: number): string => {
    const remainders = getSuccessiveRemainders(n, base)
    const numberConversion = remainders.reverse().join("")
    return numberConversion
}

export const getConvertedToBase10 = (n: string, base: number): number => {
    const digits = n.split("").map(c => characterToDigit(c))
    const result = digits.map((digit, idx, t) => digit * (base ** (t.length - 1 - idx)))
    const sum = result.reduce((a, b) => a + b)
    return sum
}

console.log(getConvertedFromBase10(209963, 62))
console.log(getConvertedToBase10('1FA6', 16))
console.log(getConvertedToBase10('10011', 2))
