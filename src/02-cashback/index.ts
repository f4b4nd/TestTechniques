import {
	getBillChange
} from "./main"

/*
	Find the optimized combination of currency to equal an amount of money.
	Optimized means you have to use less coins / billets as possible.
	Only 2€, 5€ and 10€ (coins / billets) are allowed.

	Example : 
	- Total = 45€
	- Possible responses : [ 4*ten + 1*five ; 9*five ; 20*two + 1*five ; 2*ten + 1*five + 10*two, ... ]
	- Optimized response = 4*ten + 1*five

	Impossible: 1€ et 3€
	
	1 = ***
	2 = 1*two
	3 = ***
	4 = 2*two
	5 = 1*five
	6 = 3*two
	7 = 1*five + 1*deux
	8 = 4*two
	9 = 1*five + 2*two
	10 = 1*ten  

	Warning : 
	- 11 = 5 + 6 = 1*five + 3*two
	- 13 = 5 + 8 = 1*five + 4*two

*/

const amount = 203
const billChange = getBillChange(amount)
console.log('amount', amount, 'billChange', billChange)

