import { describe, expect, it } from '@jest/globals'

import { getNumberBaseConversion } from '.'

describe('Given an integer n and base b', () => {
    it('should return n converted in base b', () => {

        const n1 = 1830, b1 = 2, res1 = 11100100110
        expect(getNumberBaseConversion(n1, b1)).toEqual(res1)

        const n2 = 1830, b2 = 16, res2 = 726
        expect(getNumberBaseConversion(n2, b2)).toEqual(res2)
    })
})