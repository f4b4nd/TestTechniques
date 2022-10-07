import {
	getBillChange,
	getBillChangeRecursive,
} from "./main"

import { Change, getOccurencesByValue} from "./recursive"

const amount = 203
const change = getBillChange(amount)
console.log(change)

const coins = [2, 5, 10]
const changeRecursive = new Change()
const c = changeRecursive.calculate(coins, amount)

console.log(c, getOccurencesByValue(c))    