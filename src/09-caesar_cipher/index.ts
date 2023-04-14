const getDecryptedCharacter = (char: string, key: number): string => {
    
    if (char.length !== 1) throw `${char} is not a single character`

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('')

    const charIndex = alphabetArray.findIndex(c => c === char.toLocaleLowerCase())

    if (charIndex === -1) return char

    const newCharIndex = getPivotIndex(alphabetArray.length, charIndex, key)
    const newChar = alphabetArray[newCharIndex]

    return isUppercase(char) ? newChar.toLocaleUpperCase() : newChar     

}

const isUppercase = (char: string) => char === char.toLocaleUpperCase()

const getPivotIndex = (arrayLength: number, currIndex: number, key: number): number => {

    const sumIndex = currIndex + key
    
    if (0 <= sumIndex  && sumIndex <= arrayLength) {
        return sumIndex
    }
    else if (sumIndex > arrayLength) {
        // k > 0
        return Math.abs(arrayLength - (key + currIndex))
    }
    else if (sumIndex < 0) {
        // k < 0
        return arrayLength + key + currIndex
    }
    throw 'no pivot index'

}

export const getDecryptedSentence = (sentence: string, key: number): string => (
    sentence.split('').reduce((acc, curr) => acc += getDecryptedCharacter(curr, key), '')
)
