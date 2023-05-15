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