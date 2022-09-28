const getDivision = (a: number, b: number) => {
	return {
		quotient: b !== 0 ? a / b : NaN,
		quotientFloor: b !== 0 ? Math.floor(a / b) : NaN,
		remainder:  a % b,
	}
}

export const getLastDigit = (int: number) => {
	if (int <= 0) return NaN
	return int >= 10 ? int % 10 : int   
}

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

	if (amount === 1 || amount === 3) return {}

	const ten = getNumberOfBills(amount, 10)
	const five = getNumberOfBills(ten.amountLeft, 5)
	const two = getNumberOfBills(five.amountLeft, 2)

	return {
		ten: ten.numberOfBills,
		five: five.numberOfBills,
		two: two.numberOfBills,
	}

}