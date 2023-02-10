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

        const x3 = [
            [1, -2, 3, 9], 
            [2, 4, 5, 8],
            [8, 3, 1, 9],
        ]
        
        const y3 = [
            [1, -8, 3, 4, 2], 
            [2, 4, 5, 2, 8],
            [8, -9, 1, 9, 3],
            [2, 4, 5, 7, 7],
        ]

        const res3 = [[ 39, -7, 41, 90, 58], [ 66, -13, 71, 117, 107 ], [ 40, -25, 85, 110, 106 ]]
        expect(getMatrixProduct(x3, y3)).toEqual(res3)
    })
})

`Ftq cguow ndaiz raj vgybe ahqd ftq xmlk pas. Ftq ruhq najuzsiulmdpe vgyb cguowxk.`