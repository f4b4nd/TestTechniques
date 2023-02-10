import { describe, expect, it } from '@jest/globals'

import { getMatrixProduct } from './'


describe('Given 2 matrixes x and y', () => {
    it('should return the matricial product', () => {
        
        const x1 = [
            [1, 2, 3, 9], 
            [2, 4, 5, 8],
            [8, 3, 1, 9],
        ]
        
        const y1 = [
            [1, 8, 3], 
            [2, 4, 5],
            [8, 9, 1],
            [2, 4, 5],
        ]

        const res1 = [[ 47, 79, 61 ], [ 66, 109, 71 ], [ 40, 121, 85 ]]
        expect(getMatrixProduct(x1, y1)).toEqual(res1)


        const x2 = [
            [1, -2, 3, 9], 
            [2, 4, 5, 8],
            [8, 3, 1, 9],
        ]
        
        const y2 = [
            [1, -8, 3], 
            [2, 4, 5],
            [8, -9, 1],
            [2, 4, 5],
        ]

        const res2 = [[ 39, -7, 41 ], [ 66, -13, 71 ], [ 40, -25, 85 ]]
        expect(getMatrixProduct(x2, y2)).toEqual(res2)
    })
})