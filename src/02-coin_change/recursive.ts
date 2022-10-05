type FormattedSolution = {
	[key : number]: number
}

type SolutionsList = {
	[key: number]: number[] 
}

export const minOfSubArrays = (arr: number[][]) => (
	arr.reduce((acc, element) => {
		if (element && (acc.length === 0 || element.length < acc.length)) return element
		return acc
	}, [])
)

export const getOccurencesByValue = (arr: number[]) => (
	arr.reduce((acc, curr) => (
		{...acc, [curr]: curr in acc ? acc[curr] + 1 : 1}
	), {} as FormattedSolution)
)

export class Change {

	solutions: SolutionsList

	constructor() {
	  	this.solutions = {}
	}

	calculate(coins: number[], amount: number): number[] {

		if (amount < 0) throw 'Negative totals are not allowed.'

		if (amount === 0) return []

		const solution = this.getMinSolution(coins, amount)

		if (solution.length === 0) throw `${amount} cannot be represented in the given currency.`

		return solution

	}

	getMinSolution(coins: number[], amount: number): number[] {

		const solutions = coins.map(coin => this.getSolutionForCoin(amount, coin, coins))

		//console.log('solutions', solutions)
		//console.log('this.solutions', this.solutions)
		const validSolutions = solutions.filter(solution => !solution.includes(NaN))
		if (validSolutions.length === 0) return []
		
		const minSolution = minOfSubArrays(validSolutions)
		this.solutions[amount] = minSolution
		return minSolution

	}

	getSolutionForCoin(amount: number, coin: number, coins: number[]): number[] {

		const amountLeft = amount - coin

		if (amountLeft < 0) return [NaN]

		if (amountLeft === 0) return [coin]

		// lookup from cache if possible
		const cacheSolutionForAmountLeft = this.solutions[amountLeft]

		const solutionForAmountLeft = cacheSolutionForAmountLeft ?? this.getMinSolution(coins, amountLeft)
		
		if (solutionForAmountLeft.length === 0) return [NaN]

		return [coin, ...solutionForAmountLeft]

	}

}


