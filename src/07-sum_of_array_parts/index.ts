export const partsSums = (ls: number[], acc = 0): number[] => {

    if (ls.length < 1) return [acc]
    
    const nextAcc = acc + ls[ls.length - 1]

    return [...partsSums(ls.slice(0, -1), nextAcc), acc]

}

const ls1 = [0, 1, 3, 6, 10]
const a = partsSums(ls1)
console.log(a)