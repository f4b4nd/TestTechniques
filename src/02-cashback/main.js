export const getCoinsCountFromCurrency = (amount, currency) => {
	
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

export const getCombination = (amount) => {
	
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



