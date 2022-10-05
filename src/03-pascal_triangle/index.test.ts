import { describe, expect, it } from '@jest/globals'

import { getPascalTriangle, getPascalTriangleRecursive } from '.'

describe('Given an integer n', () => {
    it('should give the Pascal Triangle with n+1 rows', () => {
        const expected = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1],
            [1, 6, 15, 20, 15, 6, 1],
        ]
        expect(getPascalTriangle(6)).toEqual(expected)
        expect(getPascalTriangleRecursive(6)).toEqual(expected)
    })
})