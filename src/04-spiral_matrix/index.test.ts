import { describe, expect, it } from '@jest/globals'

import { getSpiralMatrix } from '.'

describe('Given an integer n', () => {
    it('should give a spiral matrix of size n*n', () => {
        const expected5 = [
            [ 1, 2, 3, 4, 5 ],
            [ 16, 17, 18, 19, 6 ],
            [ 15, 24, 25, 20, 7 ],
            [ 14, 23, 22, 21, 8 ],
            [ 13, 12, 11, 10, 9 ]
          ]
        expect(getSpiralMatrix(5)).toEqual(expected5)
    })
})
