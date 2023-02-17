type FormattedSolution = {
	[key : number]: number
}

type SolutionsList = {
	[key: number]: number[] 
}

export const minOfSubArrays = (arr: number[][]): number[] => (
	arr.reduce((acc, curr) => {
		const currIsMin = acc.length === 0 || curr.length < acc.length
		return curr && currIsMin ? curr : acc
	}, [])
)

export const getOccurencesByValue = (arr: number[]) => (
	arr.reduce((acc, curr) => (
		{...acc, [curr]: curr in acc ? acc[curr] + 1 : 1}
	), {} as FormattedSolution)
)

export class Change {

	solutions: SolutionsList
	coins: number[]

	constructor(coins: number[]) {
	  	this.solutions = {}
		this.coins = coins
	}

	calculate(amount: number): number[] {

		if (amount < 0) throw 'Negative totals are not allowed.'

		if (amount === 0) return []

		const solution = this.getMinSolution(amount)

		if (solution.length === 0) throw `${amount} cannot be represented in the given currency.`

		return solution

	}

	getMinSolution(amount: number): number[] {

		const solutions = this.coins.map(coin => this.getSolutionForCoin(amount, coin))

		//console.log('solutions', solutions)
		//console.log('this.solutions', this.solutions)
		const validSolutions = solutions.filter(solution => !solution.includes(NaN))
		if (validSolutions.length === 0) return []
		
		const minSolution = minOfSubArrays(validSolutions)
		this.solutions[amount] = minSolution
		return minSolution

	}

	getSolutionForCoin(amount: number, coin: number): number[] {

		const amountLeft = amount - coin

		if (amountLeft < 0) return [NaN]

		if (amountLeft === 0) return [coin]

		// lookup from cache if possible
		const cacheSolutionForAmountLeft = this.solutions[amountLeft]

		const solutionForAmountLeft = cacheSolutionForAmountLeft ?? this.getMinSolution(amountLeft)
		
		if (solutionForAmountLeft.length === 0) return [NaN]

		return [coin, ...solutionForAmountLeft]

	}

}


