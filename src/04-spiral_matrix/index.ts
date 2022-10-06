type Position = {
    type: 'row' | 'col',
    index: number,
    sort: 1 | -1
}

type Pair = [number, number]

export const getInitialMatrix = (n: number) => {
    const emptyRow = Array.from(Array(n)).map(v => NaN)
    const matrix = []
    for (let i = 0; i < n; i++) matrix.push(emptyRow)
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

const getIndexesFromMatrixPosition = (matrixLength: number, position: Position): Pair[] => {
    if (position.type === 'row') {
        const row: Pair[] = Array.from(Array(matrixLength)).map((_, id) => [position.index, id])
        if (position.sort === -1) {
            const rowReverse = row.sort((a, b) => a[1] >= b[1] ? -1 : 1)
            return rowReverse
        }
        return row
    }
    if (position.type === 'col') {
        const col: Pair[] = Array.from(Array(matrixLength)).map((_, id) => [id, position.index])
        if (position.sort === -1) {
            const colReverse = col.sort((a, b) => a[0] >= b[0] ? -1 : 1)
            return colReverse
        }
        return col
    }
    return []
}

export const getSpiralMatrix = (n: number) => {
    let matrix = getInitialMatrix(n)
    const matrixPositions = getSpiralPositionsForMatrix(n)
    let i = 0
    let p = 0
    while (i < n*n && p < matrixPositions.length) {
        const position = matrixPositions[p]
        const pairIndexes = getIndexesFromMatrixPosition(n, position)
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

console.log(getSpiralMatrix(5))
