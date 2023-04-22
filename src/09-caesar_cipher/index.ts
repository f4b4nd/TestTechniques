const getDecryptedCharacter = (char: string, cipherKey: number, alphabet: string[]): string => {
    
    if (char.length !== 1) throw `${char} is not a single character`

    const charIndex = alphabet.findIndex(c => c.toLocaleLowerCase() === char.toLocaleLowerCase())

    if (charIndex === -1) return char

    const decryptedCharIndex = getCipherIndex(alphabet.length, charIndex, cipherKey)
    const decryptedChar = alphabet[decryptedCharIndex]

    return isUppercase(char) ? decryptedChar.toLocaleUpperCase() : decryptedChar.toLocaleLowerCase()     

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

export const getDecryptedMessage = (message: string, cipherKey: number): string => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('')

    return message.split('').reduce((acc, char) => (
        acc += getDecryptedCharacter(char, cipherKey, alphabetArray)
    ), '')
    
}
