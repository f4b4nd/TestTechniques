import { describe, expect, it } from '@jest/globals'

import { getLongestPalindrome, getSubstrings } from "."


describe('Given a string s and a given integer n', () => {
    it('should return all substrings in s of size n', () => {
        
        const str1 = "abcde"
        const n1 = 3
        const res1 = ['abc', 'bcd', 'cde']
        expect(getSubstrings(str1, n1).sort()).toEqual(res1.sort())
    
    })
})

describe('Given a string s', () => {
    it('should return the longest palindrome', () => {
        
        const str1 = "zbaabe"
        const res1 = 'baab'
        expect(getLongestPalindrome(str1)).toEqual(res1)

    })
})