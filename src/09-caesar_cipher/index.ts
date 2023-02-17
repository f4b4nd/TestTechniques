const getDecryptedCharacter = (char: string, step: number): string => {
    
    if (char.length !== 1) throw `${char} is not a single character`

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('')
    const alphabetLength = alphabetArray.length

    if (Math.abs(step) > 1 +alphabetLength) return step > 0 ? getDecryptedCharacter(char, alphabetLength - step -2) : getDecryptedCharacter(char, (alphabetLength + step)*(-1))

    const charIndex = alphabetArray.findIndex(v => v === char.toLocaleLowerCase())
    if (charIndex === -1) return char

    const resultIndex = charIndex + step
    const result = resultIndex >= 0 ? alphabetArray[resultIndex] : alphabetArray.reverse()[Math.abs(resultIndex) - 1]
    return isUppercase(char) ? result.toLocaleUpperCase() : result 

}

const isUppercase = (char: string) => char === char.toLocaleUpperCase()


export const getDecryptedSentence = (sentence: string, step: number) => {
    return sentence.split('').reduce((acc, curr) => acc += getDecryptedCharacter(curr, step), '')
}
