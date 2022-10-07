type Position = {
    type: 'row' | 'column',
    index: number,
    sort: 1 | -1
}

type Pair = [number, number]

export class SpiralSquaredMatrix {

    private dimension: number
    private size: number

    constructor(dimension: number) {
        this.dimension = dimension
        this.size = dimension * dimension
    }

    calculate (): number[][] {
        let matrix = this.getInitialMatrix(this.dimension)
        const matrixPositions = this.getSpiralPositions(this.dimension)
        let currentValue = 1
        let p = 0
        while (currentValue <= this.size && p < matrixPositions.length) {
            const position = matrixPositions[p]
            const pairIndexes = this.getIndexesForSpiralPosition(this.dimension, position)
            for (const [rowIndex, colIndex] of pairIndexes) {
                if (!matrix[rowIndex][colIndex]) {
                    matrix[rowIndex] = matrix[rowIndex].map((v, idx) => idx === colIndex ? currentValue : v)
                    currentValue++
                }
            }
            p++
        }
        return matrix
    }

    getInitialMatrix (dimension: number): number[][] {
        const emptyRow = Array(dimension).fill(NaN)
        const matrix = Array.from(Array(dimension)).map(() => emptyRow)
        return matrix
    }
 
    getSpiralPositions (dimension: number): Position[] {
        const acc = []
        let i = 0
        const maxIterations = dimension / 2
        while (i < maxIterations) {
            acc.push({type: 'row', index: i, sort: 1} as Position) 
            acc.push({type: 'column', index: dimension - 1 - i, sort: 1} as Position)
            acc.push({type: 'row', index: dimension - 1 - i, sort: -1} as Position) 
            acc.push({type: 'column', index: i, sort: -1} as Position)
            i++
        }
        return acc
    }

    getIndexesForSpiralPosition (dimension: number, position: Position): Pair[] {
        if (position.type === 'row') {
            const rowIndexes: Pair[] = Array.from(Array(dimension)).map((_, colIndex) => [position.index, colIndex])
            if (position.sort === -1) {
                const rowIndexesReverse = rowIndexes.sort((a, b) => a[1] >= b[1] ? -1 : 1)
                return rowIndexesReverse
            }
            return rowIndexes
        }
        if (position.type === 'column') {
            const colIndexes: Pair[] = Array.from(Array(dimension)).map((_, rowIndex) => [rowIndex, position.index])
            if (position.sort === -1) {
                const colIndexesReverse = colIndexes.sort((a, b) => a[0] >= b[0] ? -1 : 1)
                return colIndexesReverse
            }
            return colIndexes
        }
        throw `Invalid position for: ${position}` 
    }
    
}

const spiralMatrix = new SpiralSquaredMatrix(6)
console.log(spiralMatrix.calculate())