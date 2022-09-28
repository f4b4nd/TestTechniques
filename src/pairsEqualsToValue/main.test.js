import { describe, expect, test, it } from '@jest/globals'

import { getArrayWithoutDuplicates } from './main.js'

describe('Given an array', () => {
    it('should return this array without duplicates', () => {
        expect(getArrayWithoutDuplicates([1, 2, 1, 3, 1])).toStrictEqual([1, 2, 3])
    })
})