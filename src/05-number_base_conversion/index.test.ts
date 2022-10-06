import { describe, expect, it } from '@jest/globals'

import { getConvertedFromBase10 } from './fromBase10'
import { getConvertedToBase10 } from './toBase10'


describe('Given an integer n in base 10, and a target base b', () => {
    it('should return n converted in base b', () => {

        const n1 = 1830, b1 = 2, res1 = '11100100110'
        expect(getConvertedFromBase10(n1, b1)).toBe(res1)

        const n2 = 1830, b2 = 16, res2 = '726'
        expect(getConvertedFromBase10(n2, b2)).toBe(res2)

        const n3 = 209963, b3 = 62, res3 = 'scV'
        expect(getConvertedFromBase10(n3, b3)).toBe(res3)
    })
})


describe('Given an integer n in base b', () => {
    it('should return n converted in base 10', () => {

        const n1 = '1FA6', b1 = 16, res1 = 8102
        expect(getConvertedToBase10(n1, b1)).toBe(res1)

        const n2 = '10011', b2 = 2, res2 = 19
        expect(getConvertedToBase10(n2, b2)).toBe(res2)

    })
})