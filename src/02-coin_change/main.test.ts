import { describe, expect, it } from '@jest/globals'

import { 
    getBillChange,
    getNumberOfBills,
    getLastDigit,
} from './main'

describe('Given an amount of money', () => {
    it('should return combination of change with minimum of bills', () => {

        const amount1 = 46, res1 = {'10€': 4, '5€': 0, '2€': 3}
        expect(getBillChange(amount1)).toEqual(res1)

        const amount2 = 203, res2 = {'10€': 19, '5€': 1, '2€': 4}
        expect(getBillChange(amount2)).toEqual(res2)

        const amount3 = 89, res3 = {'10€': 8, '5€': 1, '2€': 2}
        expect(getBillChange(amount3)).toEqual(res3)

        const amount4 = 1, res4 = {}
        expect(getBillChange(amount4)).toEqual(res4)

        const amount5 = 9, res5 = {'10€': 0, '5€': 1, '2€': 2}
        expect(getBillChange(amount5)).toEqual(res5)

    })

})

describe('Given an amount of money and a billValue', () => {
    it('should return the closest number of bills, and leave room to be able to complete with other bill values', () => {

        const amount1 = 52, billValue1 = 10, res1 = 5
        expect(getNumberOfBills(amount1, billValue1).numberOfBills).toEqual(res1)

        const amount2 = 103, billValue2 = 10, res2 = 9
        expect(getNumberOfBills(amount2, billValue2).numberOfBills).toEqual(res2)

        const amount3 = 5, billValue3 = 5, res3 = 1
        expect(getNumberOfBills(amount3, billValue3).numberOfBills).toEqual(res3)

        const amount4 = 11, billValue4 = 5, res4 = 1
        expect(getNumberOfBills(amount4, billValue4).numberOfBills).toEqual(res4)
    
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
