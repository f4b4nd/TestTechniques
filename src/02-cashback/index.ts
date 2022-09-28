import {
	getBillChange
} from "./main"

/*
Find the optimized combination of currency to equal an amount of money.
Optimized means you have to use less coins / billets as possible.
Only 2€, 5€ and 10€ (coins / billets) are allowed.

Example : 
	Total = 45€
	Possible responses : [ 4*ten + 1*five ; 9*five ; 20*two + 1*five ; 2*ten + 1*five + 10*two, ... ]
	Optimized response = 4*ten + 1*five

	Impossible: 1€ et 3€
	
	1 = ***
	2 = 1*deux
	3 = ***
	4 = 2*deux
	5 = 1*cinq
	6 = 3*deux
	7 = 1*cinq + 1*deux
	8 = 4*deux
	9 = 1*cinq + 2*deux
	10 = 1*dix // 2*cinq // 5*deux 

	Cas particuliers : 
	- 11 = 5 + 6 = 1*cinq + 3*deux
	- 13 = 5 + 8 = 1*cinq + 4*deux
	- 21 = 10 + 11
	- 23 = 10 + 13 etc...

	1) 46 = 23*deux 
	2) --> 23 = 3*cinq + 4*deux (si le reste est 1 ou 3, baisser d'un cran, ici 23 % 4 = 3)
	3a) --> 15 = 1*dix + 1*cinq --> irréductible
	3b) --> 8 irreductible
	4) --> DONC 46 = 2 * ( 1*dix + 1*cinq + 4*deux ) = 2*dix + 2*cinq + 8*deux
	5) ---> FACTORISANT = (2*dix) + (1*dix) + (1*dix + 3*deux) = 4*dix + 3*deux

	1) 46 = 4*dix + 3*deux (car reste != 1 et 3)

	1) 103 = 9*dix + 1*five + 4*deux (baisse dizaine car reste=3)

	1) 89 = 8*dix + 1*cinq + 2*deux

	1) 57 = 10*cinq + 1*cinq + 1*deux

	
*/

const amount = 89
const billChange = getBillChange(amount)
console.log('amount', amount, 'billChange', billChange)

