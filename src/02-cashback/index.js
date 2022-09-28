import {
    getCoinsCountFromCurrency,
    getCombination 
} from "./main.js"

/*
Find the optimized combination of currency to equal an amount of money.
Optimized means you have to use less coins / billets as possible.
Only 2€, 5€ and 10€ (coins / billets) are allowed.

Example : 
	Total = 45€
	Possible responses : [ 4*ten + 1*five ; 9*five ; 20*two + 1*five ; 2*ten + 1*five + 10*two, ... ]
	Optimized response = 4*ten + 1*five
*/

const amount = 46
const combination = getCombination(amount)
console.log('combination', combination)
//console.log('getCoinsCount', getCoinsCountFromCurrency(52, 5))