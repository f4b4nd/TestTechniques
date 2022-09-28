/*
 Given an integer "k" and array "arr"
 Use the array "arr" to find the pairs (ie. couples) for which the sum equals to k.
 If multiples responses are possible, you should :
 - start from left to right (ex: indexes 1-4 is better than 2-5; and 2-4 is better 2-5)
 - not take account of "mirror indexes" (ie. if left + right = sum, then ignore right + left)
 - the same index cannot be used twice (ie. if left + left = sum, then ignore)
 - if no pairs equals to sum, return an empty array
 
 Example :
 k = 2
 arr = [5, 2, 1, 3, 6, 4]
 Possibles responses : (5 + 2) ; (3 + 4) ; (4 + 3)
 Response: (5 + 2) --> as indexes : (0, 1)

*/

export const getArrayWithoutDuplicates = (arr) => {

	return arr.reduce((acc, currValue) => (
		acc.includes(currValue) ? acc : [...acc, currValue]
	), [])
	
}

const getAllPairsEqualToValue = (arr, targetValue) => {
	const pairsEqualTargetValue = []
	
	arr.forEach((x, _, t) => {
		t.forEach(y => {
			if (x + y === k && x !== y) {
				pairsEqualTargetValue.push([x, y])
			}
		})
	})
	
	return pairsEqualTargetValue
}


const getArrayIndexFromValue = (arr, arrValue) => {

	const firstIndexMatched = arr.reduce((prev, curr, idx) => {
		if(isNaN(prev)) {
			return curr === arrValue ? idx : prev
		}
		return prev
	}, NaN)
	
	return firstIndexMatched
}

const getPairWithSmallerIndexes = (arr, pairs) => {
	
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

/********/

const k = 7
const arr = [5, 3, 4, 2, 1, 3, 6, 4, 2, 5]

/*****/
const arrNoDuplicates = getArrayWithoutDuplicates(arr)
const possiblePairs = getAllPairsEqualToValue(arrNoDuplicates, k)
const selectedPair = getPairWithSmallerIndexes(arrNoDuplicates, possiblePairs)
const foundIndexes = [
	getArrayIndexFromValue(arr, selectedPair[0]),
	getArrayIndexFromValue(arr, selectedPair[1])
]

console.log('arr :', arrNoDuplicates, '## k :', k)
console.log('all pairs', possiblePairs)
console.log('selected pair', selectedPair)
console.log('found indexes', foundIndexes)
