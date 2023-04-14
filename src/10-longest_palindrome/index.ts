const isPalindrome = (s: string): boolean => {

    if (s.length === 0) return false

    if (s.length === 1) return true

    let startIdx = 0
    let endIdx = s.length - 1
    while (startIdx < endIdx) {
        if (s[startIdx] !== s[endIdx]) return false
        startIdx += 1
        endIdx -= 1
    }
    return true
}

const getPalindromesOfSize = (s: string, size: number): Array<string> => {
    if (s.length < size) return []
    const substrings = getSubstrings(s, size)
    console.log('palindromes', substrings)

    const palindromes = substrings.reduce((acc, curr) => {
        return isPalindrome(curr) ? [...acc, curr] : acc
    }, [] as Array<string>)
    return palindromes
}

export const getSubstrings = (s: string, size: number) => (
    s.split('').reduce((acc, _, i) => {
        if (size + i > s.length) return acc
        const substring = s.substring(i, size + i)
        return [...acc, substring]
    }, [] as Array<string>)
)

export const getLongestPalindrome = (s: string): string => {
    let size = s.length
    while (size > 0) {
        let palindromes = getPalindromesOfSize(s, size)
        if (palindromes.length > 0) return palindromes[0]
        size -= 1
    }
    throw 'No palindrome'
}