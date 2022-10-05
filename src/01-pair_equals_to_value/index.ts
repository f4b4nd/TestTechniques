import { 
    getArrayWithoutDuplicates,
    getAllPairsEqualToValue,
    getArrayIndexFromValue,
    getPairWithSmallerIndexes
} from './main'


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