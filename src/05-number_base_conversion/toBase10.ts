export const getConvertedToBase10 = (n: string, base: number): number => {
    const digits = n.split("").map(c => characterToDigit(c))
    const result = digits.map((digit, idx, t) => digit * (base ** (t.length - 1 - idx)))
    const sum = result.reduce((a, b) => a + b)
    return sum
}

const characterToDigit = (char: string): number => {
    if (char.length !== 1) throw 'Character length must equal to 1'
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split("")
    const matchIndex = chars.reduce((acc, curr, idx) => (!acc && curr === char) ? idx : acc, NaN)
    if (matchIndex || matchIndex === 0) return matchIndex
    throw `No character found for char: ${char}`
}

