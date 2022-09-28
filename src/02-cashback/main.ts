const getDivision = (a: number, b: number) => {
	return {
		quotient: b !== 0 ? a / b : NaN,
		quotientFloor: b !== 0 ? Math.floor(a / b) : NaN,
		remainder:  a % b,
	}
}

const getLastDigit = (int: number) => {
	if (int <= 0) return NaN
	return int >= 10 ? int % 10 : int   
}

export const getNumberOfBills = (amount: number, billValue: number) => {

	const division = getDivision(amount, billValue)
	const quotientFloor = division.quotientFloor
	const remainder = division.remainder

	const remainderLastDigit = getLastDigit(remainder)
	const remainderEndsWithOneOrThree = remainderLastDigit === 1 || remainderLastDigit === 3

	return {
		amount,
		billValue,
		numberOfBills: remainderEndsWithOneOrThree ? quotientFloor - 1 : quotientFloor,
	}

}

export const getBillChange = (amount: number) => {

	const ten = getNumberOfBills(amount, 10)
	const five = getNumberOfBills(ten.amount - ten.numberOfBills * ten.billValue, 5)
	const two = getNumberOfBills(five.amount - five.numberOfBills * five.billValue, 2)

	return {
		ten: ten.numberOfBills,
		five: five.numberOfBills,
		two: two.numberOfBills,
	}

}


const steps = [
	// solution: 46 = 4*dix + 3*deux
	{
		amount : 46,
		divisor: 10,
		numberOfBills: 4, // quotient
		billValue: 10,
		quotient: getDivision(46, 10).quotient, // 4
		remainder: getDivision(46, 10).remainder, // 6,
	},
	{
		amount : 6, // 46 - 4*dix
		divisor: 5,
		numberOfBills: 0, // quotient-1 car reste = 1 ou 3
		billValue: 5,
		quotient: getDivision(6, 5).quotient, // 1
		remainder: getDivision(6, 5).remainder, // 1,
	},
	{
		amount : 6, // 6 - 0*cinq
		divisor: 2,
		numberOfBills: 1, // quotient
		billValue: 2,
		quotient: getDivision(6, 2).quotient, // 3
		remainder: getDivision(6, 2).remainder, // 0,
	},

]


const steps2 = [
	// solution: 203 = 19*dix + 1*cinq + 4*deux
	{
		amount : 203,
		divisor: 10,
		numberOfBills: 19, // quotient-1 car reste termine par 1 ou 3
		billValue: 10,
		quotient: getDivision(203, 10).quotient, // 20
		remainder: getDivision(203, 10).remainder, // 13,
	},
	{
		amount: 13, // 13 - 9*dix
		divisor: 5,
		numberOfBills: 1, // quotient-1 car reste termine par 1 ou 3
		billValue: 5,
		quotient: getDivision(13, 5).quotient, // 2
		remainder: getDivision(13, 5).remainder, // 3
	},
	{
		amount: 8, // 13 - 1*cinq
		divisor: 2,
		numberOfBills: 4,
		billValue: 2,
		quotient: getDivision(8, 2).quotient, // 4
		remainder: getDivision(8, 2).remainder, // 0
	},

]

const steps3 = [
	// solution: 29 = 2*dix + 1*cinq + 2*deux
	{
		amount : 29,
		divisor: 10,
		numberOfBills: 2, // quotient
		billValue: 10,
		quotient: getDivision(29, 10).quotient, // 2
		remainder: getDivision(29, 10).remainder, // 9,
	},
	{
		amount : 9, // 29 - 2*dix
		divisor: 5,
		numberOfBills: 1, // quotient
		billValue: 5,
		quotient: getDivision(9, 5).quotient, // 1
		remainder: getDivision(9, 5).remainder, // 4,
	},
	{
		amount : 4, // 9 - 1*cinq
		divisor: 2,
		numberOfBills: 2, // quotient
		billValue: 2,
		quotient: getDivision(4, 2).quotient, // 2
		remainder: getDivision(4, 2).remainder, // 0,
	},

]

