const getDecryptedCharacter = (char: string, cipherKey: number): string => {
    
    if (char.length !== 1) throw `${char} is not a single character`

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('')

    const charIndex = alphabetArray.findIndex(c => c === char.toLocaleLowerCase())

    if (charIndex === -1) return char

    const cipherCharIndex = getCipherIndex(alphabetArray.length, charIndex, cipherKey)
    const cipherChar = alphabetArray[cipherCharIndex]

    return isUppercase(char) ? cipherChar.toLocaleUpperCase() : cipherChar     

}

const isUppercase = (char: string) => char === char.toLocaleUpperCase()

const getCipherIndex = (alphabetLength: number, currentIndex: number, cipherKey: number): number => {

    const sumIndex = currentIndex + cipherKey
    
    if (0 <= sumIndex  && sumIndex <= alphabetLength) {
        return sumIndex
    }
    else if (sumIndex > alphabetLength) {
        // cipherKey > 0
        return Math.abs(alphabetLength - (cipherKey + currentIndex))
    }
    else if (sumIndex < 0) {
        // cipherKey < 0
        return alphabetLength + cipherKey + currentIndex
    }
    throw 'no cipher index'

}

export const getDecryptedMessage = (message: string, cipherKey: number): string => (
    message.split('').reduce((acc, char) => acc += getDecryptedCharacter(char, cipherKey), '')
)
