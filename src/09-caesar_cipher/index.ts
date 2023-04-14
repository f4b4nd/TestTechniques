const getDecryptedCharacter = (char: string, key: number): string => {
    
    if (char.length !== 1) throw `${char} is not a single character`

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('')

    const charIndex = alphabetArray.findIndex(c => c === char.toLocaleLowerCase())

    if (charIndex === -1) return char

    const newIndex = getPivotIndex(alphabetArray.length, charIndex, key)
    const newChar = alphabetArray[newIndex]

    return isUppercase(char) ? newChar.toLocaleUpperCase() : newChar     

}

const isUppercase = (char: string) => char === char.toLocaleUpperCase()

const getPivotIndex = (arrayLength: number, currIndex: number, key: number): number => {
    /*
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const currIndex = 4
    const k = -8
    const res = Math.abs(a.length - (k + currIndex))
    const res2 = Math.abs(a.length + k - currIndex) //9 - 8 + 4
    */
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

export const getDecryptedSentence = (sentence: string, key: number) => {
    return sentence.split('').reduce((acc, curr) => acc += getDecryptedCharacter(curr, key), '')
}
