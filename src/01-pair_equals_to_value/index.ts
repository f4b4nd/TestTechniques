import { 
    getArrayWithoutDuplicates,
    getAllPairsEqualToValue,
    getArrayIndexFromValue,
    getPairWithSmallerIndexes
} from './main'

/*
Given an integer "k" and array "arr"
Use the array "arr" to find the pairs (ie. couples) for which the sum equals to k.
If multiples responses are possible, you should :
- start from left to right (ex: indexes 1-4 is better than 2-5; and 2-4 is better 2-5)
- not take account of "mirror indexes" (ie. if left + right = sum, then ignore right + left)
- not take account twice of the same index twice (ie. if left + left = sum, then ignore)
- return an empty array if no pairs equals to sum

Example :
- k = 2
- arr = [5, 2, 1, 3, 6, 4]
- Possibles responses : (5 + 2) ; (3 + 4) ; (4 + 3)
- Response: (5 + 2) --> as indexes : (0, 1)

*/

const k = 7
const arr = [5, 3, 4, 2, 1, 3, 6, 4, 2, 5]

/*****/

const arrNoDuplicates = getArrayWithoutDuplicates(arr)
const possiblePairs = getAllPairsEqualToValue(arrNoDuplicates, k)
const selectedPair = getPairWithSmallerIndexes(arrNoDuplicates, possiblePairs)

console.log('#arr :', arrNoDuplicates, '#k :', k)
console.log('all pairs', possiblePairs)
console.log('selected pair', selectedPair)

const getPairIndexes = (pair: Pair | []) => {

    if (!pair[0] || !pair[1]) return []

    return [
        getArrayIndexFromValue(arr, pair[0]),
        getArrayIndexFromValue(arr, pair[1])
    ]
    
}

console.log('selected pair indexes', getPairIndexes(selectedPair))