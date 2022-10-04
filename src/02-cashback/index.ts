import {
	getBillChange,
	getBillChangeRecursive,
} from "./main"


const amount = 203
const change = getBillChange(amount)
console.log(change)
