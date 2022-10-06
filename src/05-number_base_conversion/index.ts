const getDivision = (a: number, b: number) => {
    return {
        quotient: Math.floor(a / b),
        remainder: a % b,
    }
}

const getSuccessiveRemainders = (a: number, b: number): number[] => {
 
    const {quotient, remainder} = getDivision(a, b)

    if (a === 0) return []

    return [remainder, ...getSuccessiveRemainders(quotient, b)]

}

export const getNumberBaseConversion = (n: number, base: number): number => {
    const remainders = getSuccessiveRemainders(n, base)
    const numberConversion = remainders.reverse().join("")
    return parseInt(numberConversion)
}

//console.log(getNumberBaseConversion(1830, 2))