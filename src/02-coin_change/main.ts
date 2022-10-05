const getDivision = (a: number, b: number) => {
	return {
		quotient: b !== 0 ? a / b : NaN,
		quotientFloor: b !== 0 ? Math.floor(a / b) : NaN,
		remainder:  a % b,
	}
}

export const getLastDigit = (int: number) => int > 0 ? int % 10 : NaN

export const getNumberOfBills = (amount: number, billValue: number) => {

	const division = getDivision(amount, billValue)
	const quotientFloor = division.quotientFloor
	const remainder = division.remainder

	const remainderLastDigit = getLastDigit(remainder)
	const remainderEndsWithOneOrThree = remainderLastDigit === 1 || remainderLastDigit === 3
	
	const numberOfBills = remainderEndsWithOneOrThree ? quotientFloor - 1 : quotientFloor

	return {
		amount,
		billValue,
		numberOfBills,
		amountLeft: amount - (numberOfBills * billValue)
	}

}

export const getBillChange = (amount: number) => {

	if (amount <= 0 || amount === 1 || amount === 3) return {}
	
	const availableBillsValues = [10, 5, 2]

	let amountLeft = amount

	let i = 0
	let billChange = {}

	while (amountLeft > 0 && i < availableBillsValues.length) {

		const change = getNumberOfBills(amountLeft, availableBillsValues[i])
		amountLeft = change.amountLeft
		billChange = {...billChange, [`${change.billValue}€`]: change.numberOfBills}
		i++

	}

	return billChange

}


export const getBillChangeRecursive = (amount: number): any[] => {

	const billValues = [2, 5, 10]

	const amountMatched = billValues.find(v => v === amount)

	//console.log('amount', amount)
	
	if (amount === 1) {
		return [[NaN]]
	}

	if (amountMatched) return [amountMatched]

	let acc2:any = [], acc5:any = [], acc10:any = []

	if (amount - 2 > 0) {
		acc2 = [2, ...getBillChangeRecursive(amount - 2)]
	}

	if (amount - 5 > 0) {
		acc5 = [5, ...getBillChangeRecursive(amount - 5)]
	}

	if (amount - 10 > 0) {
		acc10 = [10, ...getBillChangeRecursive(amount - 10)]
	}

	return [
		[acc2],
		[acc5],
		[acc10]
	]

}
