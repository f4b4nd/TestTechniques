import { describe, expect, it } from '@jest/globals'

import { 
    getArrayWithoutDuplicates,
    getAllPairsEqualToValue,
    getArrayIndexFromValue,
    getPairWithSmallerIndexes
} from './main.js'

describe('Given an array of integers', () => {
    it('should return this array without duplicates', () => {
        expect(getArrayWithoutDuplicates([1, 2, 1, 3, 1])).toStrictEqual([1, 2, 3])
    })
})

describe('Given an array of integers and an integer k', () => {
    it('should return an array containing all pairs of values equal to k', () => {

        const arr1 = [5, 2, 1], int1 = 3, res1 = [[2, 1], [1, 2]]
        expect(getAllPairsEqualToValue(arr1, int1)).toEqual(res1)

        const arr2 = [2, 3, 1, 7], int2 = 99, res2 = []
        expect(getAllPairsEqualToValue(arr2, int2)).toEqual(res2)

        const arr3 = [2, 5, 1, 3, 4], int3 = 7, res3 = [[2, 5], [3, 4], [4,3], [5, 2]]
        expect(getAllPairsEqualToValue(arr3, int3)).toEqual(expect.arrayContaining(res3))

    })
})

describe('Given an array of integers and an integer k', () => {
    it('should return the position of the first occurence of k in the array', () => {

        const arr1 = [1, 3, 5, 3], val1 = 3, res1 = 1
        expect(getArrayIndexFromValue(arr1, val1)).toEqual(res1)

        const arr2 = [3, 2, 3, 8], val2 = 9, res2 = NaN
        expect(getArrayIndexFromValue(arr2, val2)).toEqual(res2)

    })
})

describe('Given an array of integers A and an array of pairs P (its values are inside A)', () => {
    it('should return the pair in P with smaller indexes in A', () => {

        const arr1 = [4, 6, 9], pairs1 = [[4, 9], [9, 6], [4, 6], [6,9]], res1 = [4, 6]
        expect(getPairWithSmallerIndexes(arr1, pairs1)).toEqual(res1)

    })
})