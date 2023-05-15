export const getArrayWithoutDuplicates = <T>(arr: Array<T>) => {

	return arr.reduce((acc, currValue) => (
		acc.includes(currValue) ? acc : [...acc, currValue]
	), [] as Array<T>)

}

export const getAllPairsEqualToValue = (arr: number[], targetValue: number) => {

	const pairsEqualTargetValue: Pair[] = []

	arr.forEach((x, _, t) => {
		t.forEach(y => {
			if (x + y === targetValue && x !== y) {
				pairsEqualTargetValue.push([x, y])
			}
		})
	})

	return pairsEqualTargetValue
}

export const getArrayIndexFromValue = (arr: number[], arrValue: number) => {

	const firstIndexMatched = arr.reduce((prev, curr, idx) => {
		if(isNaN(prev)) {
			return curr === arrValue ? idx : prev
		}
		return prev
	}, NaN)
	
	return firstIndexMatched
}

export const getPairWithSmallerIndexes = (arr: number[], pairs: Pair[]): Pair | [] => {
	
	const pairsMatched = pairs.length > 0
	if (!pairsMatched) return []
	
	const sortedPairs = pairs.sort((pair1, pair2) => {
	
		const leftIndex1 = getArrayIndexFromValue(arr, pair1[0])
		const rightIndex1 = getArrayIndexFromValue(arr, pair1[1])
		
		const leftIndex2 = getArrayIndexFromValue(arr, pair2[0])
		const rightIndex2 = getArrayIndexFromValue(arr, pair2[1])
		
		if (leftIndex1 < leftIndex2) return -1
		if (leftIndex1 === leftIndex2 && rightIndex1 <= rightIndex2) return -1
		else return 1
		
	})
	
	const pairWithSmallerIndexes = sortedPairs[0]
	
	return pairWithSmallerIndexes
	
}
