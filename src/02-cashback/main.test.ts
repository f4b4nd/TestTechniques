import { describe, expect, it } from '@jest/globals'

import { 
    getBillChange,
    getLastDigit,
} from './main'

describe('Given an amount of money', () => {
    it('should return change with minimum of Bills', () => {

        const amount1 = 46, res1 = {ten: 4, five: 0, two: 3}
        expect(getBillChange(amount1)).toEqual(res1)

        const amount2 = 203, res2 = {ten: 19, five: 1, two: 4}
        expect(getBillChange(amount2)).toEqual(res2)

        const amount3 = 89, res3 = {ten: 8, five: 1, two: 2}
        expect(getBillChange(amount3)).toEqual(res3)

        const amount4 = 1, res4 = {}
        expect(getBillChange(amount4)).toEqual(res4)

        const amount5 = 9, res5 = {ten: 0, five: 1, two: 2}
        expect(getBillChange(amount5)).toEqual(res5)

    })

})

describe('Given an digit', () => {
    it('should return the last digit', () => {

        const digit1 = 3232, res1 = 2
        expect(getLastDigit(digit1)).toEqual(res1)

        const digit2 = 9, res2 = 9
        expect(getLastDigit(digit2)).toEqual(res2)

        const digit3 = -98023, res3 = NaN
        expect(getLastDigit(digit3)).toEqual(res3)

    })
})
