/*
Find the optimized combination of currency to equal an amount of money.
Optimized means you have to use less coins / billets as possible.
Only 2€, 5€ and 10€ (coins / billets) are allowed.

Example : 
	Total = 45€
	Possible responses : [ 4*ten + 1*five ; 9*five ; 20*two + 1*five ; 2*ten + 1*five + 10*two, ... ]
	Optimized response = 4*ten + 1*five
*/


const getCoinsCountFromCurrency = (amount, currency) => {
	
	
	if (currency > amount) {
		return {
			coinsCount : 0,
			moneyLeft : amount
		}
	}
	
	let coinsCount = 0
	let moneyLeft = 0
	
	if (amount % currency === 0) {
		coinsCount = amount / currency
	}
	
	else if (amount % currency > 0) {
		coinsCount = Math.floor(amount / currency)
		moneyLeft = amount % currency
	}
	
	return {
		coinsCount,
		moneyLeft
	}

}

const getCombination = (amount) => {
	
	let [ten, five, two] = [0, 0, 0]
	let moneyLeft = amount
	
	ten = getCoinsCountFromCurrency(moneyLeft, 10).coinsCount
	moneyLeft = getCoinsCountFromCurrency(moneyLeft, 10).moneyLeft
	
	if (moneyLeft > 0) {
		five = getCoinsCountFromCurrency(moneyLeft, 5).coinsCount
		moneyLeft = getCoinsCountFromCurrency(moneyLeft, 5).moneyLeft
	}
	
	if (moneyLeft > 0) {
		two = getCoinsCountFromCurrency(moneyLeft, 2).coinsCount
		moneyLeft = getCoinsCountFromCurrency(moneyLeft, 2).moneyLeft
	}
	
	return {
		ten,
		five,
		two,
		moneyLeft,
	}
	
}

const amount = 46
const combination = getCombination(amount)
console.log('combination', combination)
//console.log('getCoinsCount', getCoinsCountFromCurrency(52, 5))

