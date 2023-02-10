export const getDecryptedCharacter = (char: string, step: number) => {
    
    if (char.length !== 1) throw `${char} is not a single character`

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('')
    const alphabetLength = alphabetArray.length

    const charIndex = alphabetArray.findIndex(v => v === char.toLocaleLowerCase())
    if (charIndex === -1) return char

    const resultIndex = charIndex + step
    const result = resultIndex >= 0 ? alphabetArray[resultIndex] : alphabetArray.reverse()[Math.abs(resultIndex) - 1]
    return isUppercase(char) ? result.toLocaleUpperCase() : result 

}

const isUppercase = (char: string) => char === char.toLocaleUpperCase()


const getDecryptedSentence = (sentence: string, step: number) => {
    return sentence.split('').reduce((acc, curr) => acc += getDecryptedCharacter(curr, step), '')
}

const v1 = `Ftq cguow ndaiz raj
vgybe ahqd ftq xmlk pas.
Ftq ruhq najuzs
iulmdpe vgyb cguowxk.
`

const v2 = `
Dear Julius,
Let us meet near
the Theatre of Pompey
at sundown.
Ave Caesar!

`
const res = getDecryptedSentence(v1, -12)
console.log(res)