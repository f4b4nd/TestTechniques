const getNextRow = (arr: number[]) => {
    const acc: number[] = arr.map((_, idx, t) => {
        return idx === 0 ? t[idx] : t[idx] + t[idx-1]
    })
    return [...acc, 1]
}

export const getPascalTriangle = (n: number) => {
    const acc: number[][] = []
    let row = [1]
    let i = 0
    acc.push(row)
    while (i < n) {
        i++
        row = getNextRow(row)
        acc.push(row)
    }
    return acc
}

export const getPascalTriangleRecursive = (maxIterations: number, row: number[] = [1]): number[][] => {

    if (row.length <= maxIterations) {
        const nextRow = getNextRow(row)
        return [row, ...getPascalTriangleRecursive(maxIterations, nextRow)]
    }
    return [row]

}


//console.log(getPascalTriangle(5))
console.log(getPascalTriangleRecursive(6))
