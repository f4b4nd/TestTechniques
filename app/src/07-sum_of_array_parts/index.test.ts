import { describe, expect, it } from '@jest/globals'

import { partsSums } from './'


describe('Given a list of numbers', () => {
    it('should return a list of the sums of its parts', () => {

        const arr1: number[] = [], res1 = [0]
        expect(partsSums(arr1)).toEqual(res1)

        const arr2 = [0, 1, 3, 6, 10], res2 = [20, 20, 19, 16, 10, 0]
        expect(partsSums(arr2)).toEqual(res2)

        const arr3 = [1, 2, 3, 4, 5, 6], res3 = [21, 20, 18, 15, 11, 6, 0]
        expect(partsSums(arr3)).toEqual(res3)

        const arr4 = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
        const res4 = [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
        expect(partsSums(arr4)).toEqual(res4)

    })
})