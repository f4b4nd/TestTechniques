type Position = {
    type: 'row' | 'col',
    index: number,
    sort: 1 | -1
}

type Pair = [number, number]

export const getInitialMatrix = (n: number) => {
    const emptyRow = Array(n).fill(NaN)
    const matrix = Array.from(Array(n)).map(() => emptyRow)
    return matrix
}

const getSpiralPositionsForMatrix = (matrixLength: number): Position[] => {

    const acc = []
    let i = 0
    const maxIterations = matrixLength / 2
    while (i < maxIterations) {
        acc.push({type: 'row', index: i, sort: 1} as Position) 
        acc.push({type: 'col', index: matrixLength - 1 - i, sort: 1} as Position)
        acc.push({type: 'row', index: matrixLength - 1 - i, sort: -1} as Position) 
        acc.push({type: 'col', index: i, sort: -1} as Position)
        i++
    }
    return acc
}

const getIndexesForMatrixPosition = (matrixLength: number, position: Position): Pair[] => {
    if (position.type === 'row') {
        const rowIndexes: Pair[] = Array.from(Array(matrixLength)).map((_, id) => [position.index, id])
        if (position.sort === -1) {
            const rowIndexesReverse = rowIndexes.sort((a, b) => a[1] >= b[1] ? -1 : 1)
            return rowIndexesReverse
        }
        return rowIndexes
    }
    if (position.type === 'col') {
        const colIndexes: Pair[] = Array.from(Array(matrixLength)).map((_, id) => [id, position.index])
        if (position.sort === -1) {
            const colIndexesReverse = colIndexes.sort((a, b) => a[0] >= b[0] ? -1 : 1)
            return colIndexesReverse
        }
        return colIndexes
    }
    return []
}

export const getSpiralMatrix = (matrixLength: number) => {
    let matrix = getInitialMatrix(matrixLength)
    const matrixPositions = getSpiralPositionsForMatrix(matrixLength)
    let i = 0
    let p = 0
    while (i < matrixLength ** 2 && p < matrixPositions.length) {
        const position = matrixPositions[p]
        const pairIndexes = getIndexesForMatrixPosition(matrixLength, position)
        for (const [rowIndex, colIndex] of pairIndexes) {
            if (!matrix[rowIndex][colIndex]) {
                matrix[rowIndex] = matrix[rowIndex].map((v, idx) => idx === colIndex ? i + 1 : v)
                i++
            }
        }
        p++
    }
    return matrix
}

console.log(getSpiralMatrix(6))