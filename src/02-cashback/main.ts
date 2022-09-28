// quotient = dividend / divisor 
export const findGreatestDivisible = (int: number) => {

	let divisors_queue = [10, 5, 2]

	let currentDivisor = divisors_queue[0]

	let dividend = getDivision(int, 10).roundedQuotient // 10
	let remainder = getDivision(int, 10).remainder

	const equals1or3 = (r: number) => [1, 3].includes(r)

	if (remainder > 0) {

		// 11 = dividend:11 / divisior:10
		if (equals1or3(remainder)) {
			int = int - 10 // 90
			dividend = getDivision(int, 10).roundedQuotient // 90/10=9
			remainder = getDivision(int, 10).remainder // 13
		}

		else {
			dividend = getDivision(int, 10).roundedQuotient // 90/10 = 9
			//remainder = getDivision(int, 10)
		}
	}
}

const getDivision = (a: number, b: number) => {
	return {
		quotient:  a / b,
		roundedQuotient: Math.floor(a / b),
		remainder:  a % b,
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

const defaultResults = {
	2 : { ten: 0, five: 0, two: 1 },
	4 : { ten: 0, five: 0, two: 2 },
	5 : { ten: 0, five: 1, two: 0 },
	6 : { ten: 0, five: 0, two: 3 },
	7 : { ten: 0, five: 1, two: 1 },
	8 : { ten: 0, five: 0, two: 4 },
	9 : { ten: 0, five: 1, two: 2 },
	11 : { ten: 0, five: 1, two: 3 },
	13 : { ten: 0, five: 1, two: 4 },
}