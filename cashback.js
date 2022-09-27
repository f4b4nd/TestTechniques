/*
Find the optimized combination of currency to equal an amount of money.
Optimized means you have to use less coins / billets as possible.
Only 2€, 5€ and 10€ (coins / billets) are allowed.

Example : 
	Total = 45€
	Possible responses : [ 4*ten + 1*five ; 9*five ; 20*two + 1*five ; 2*ten + 1*five + 10*two, ... ]
	Optimized response = 4*ten + 1*five

*/


const getAllCombinations = (amount) => {}

const getCoinsCount = (amount, currency) => {
	
	const currencyLabels = {
		10 : 'ten',
		5 : 'five',
		2 : 'two',
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
		[currencyLabels[currency]] : coinsCount,
		moneyLeft
	}

}

const getCombination = (amount) => {
	
	let [ten, five, two] = [0, 0, 0]
	let currentAmount = amount
	
	while (currentAmount > 0) {
		console.log('currentAmount', currentAmount)
		if (currentAmount % 10 === 0) {
			ten++
			currentAmount = currentAmount / 10
		}
		else if (currentAmount % 5 === 0) {
			five++
			currentAmount = currentAmount / 5
		}
		else if (currentAmount % 2 === 0) {
			two++
			currentAmount = currentAmount / 2
		}
		else {
			break
		}
	}
	
	return {
		ten,
		five,
		two
	}
	
}

const amount = 45
const combination = getCombination(amount)
console.log('combination', combination)
console.log('getCoinsCount', getCoinsCount(52, 5))

