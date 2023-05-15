type Matrix = number[][]

const getNumberOfRows = (matrix: Matrix): number => {
    return matrix.length
}

const getNumberOfColumns = (matrix: Matrix): number => {
    return matrix[0].length
}

const hasFixedColumnsLength = (matrix: Matrix): boolean => {

    const columnsLengths = matrix.reduce((acc, curr) => (
        acc.includes(curr.length) ? acc : [...acc, curr.length]
    ), [])

    return columnsLengths.length === 1

}

const isValidMatrix = (matrix:  Matrix): boolean => {
    // other conditions ?
    return hasFixedColumnsLength(matrix)
}

const areMultipliable = (a: Matrix, b: Matrix) => {

    if (!isValidMatrix(a) || !isValidMatrix(b)) return false

    return getNumberOfColumns(a) === getNumberOfRows(b)

}

const getEmptyMatrix = (nrows: number, ncolumns: number): Matrix  => {
    const rows = Array(ncolumns).fill(NaN)
    const matrix = Array(nrows).fill(rows)
    return matrix
}

export const getMatrixProduct = (a: Matrix, b: Matrix) => {

    if (!areMultipliable(a, b)) {
        throw "Cannot multiply"
    }

    const [rowLength, colLength] = [getNumberOfRows(a), getNumberOfColumns(b)]
    const matrix = getEmptyMatrix(rowLength, colLength)

    for (let i=0; i < getNumberOfRows(a); i++) {
        for (let j=0; j < getNumberOfColumns(b); j++) {
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


