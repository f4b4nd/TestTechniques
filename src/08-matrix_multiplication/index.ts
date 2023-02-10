const getNumberOfRows = (matrix: number[][]): number => {
    return matrix.length
}

const getNumberOfColumns = (matrix: number[][]): number => {
    return matrix[0].length
}

const hasFixedColumnsLength = (matrix: number[][]): boolean => {

    const columnsLengths = matrix.reduce((acc, curr) => (
        acc.includes(curr.length) ? acc : [...acc, curr.length]
    ), [])

    return columnsLengths.length === 1

}

const isValidMatrix = (matrix:  number[][]): boolean => {
    // other conditions ?
    return hasFixedColumnsLength(matrix)
}

const areMultipliable = (a: number[][], b: number[][]) => {

    if (!isValidMatrix(a) || !isValidMatrix(b)) return false

    const match1 = getNumberOfColumns(a) === getNumberOfRows(b)
    const match2 = getNumberOfRows(a) === getNumberOfColumns(b)
    return match1 && match2
}

const getEmptyMatrix = (nrows: number, ncolumns: number) => {
    const rows = Array(ncolumns).fill(NaN)
    const matrix = Array(nrows).fill(rows)
    return matrix
}

export const getMatrixProduct = (a: number[][], b: number[][]) => {

    if (!areMultipliable(a, b)) {
        return []
    }

    const dimension = getNumberOfRows(a)
    const matrix: number[][] = getEmptyMatrix(dimension, dimension)

    for (let i=0; i < getNumberOfRows(a); i++) {
        for (let j=0; j < getNumberOfColumns(a); j++) {
            let coeff = 0
            for (let v=0; v < getNumberOfColumns(a); v++) {
                coeff += a[i][v] * b[v][j]
            }
            // cannot access matrix[i][j] directly without overwrite
            matrix[i] = matrix[i].map((value, idx) => idx === j ? coeff : value)
        }
    }

    return matrix 

}


const main = () => {

    const x = [
        [1, 2, 3, 9], 
        [2, 4, 5, 8],
        [8, 3, 1, 9],
    ]
    
    const y = [
        [1, 8, 3], 
        [2, 4, 5],
        [8, 9, 1],
        [2, 4, 5],
    ]

    const res = getMatrixProduct(x, y)
    console.log(res)
    return res

}

main()


