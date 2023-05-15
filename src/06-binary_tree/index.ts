type NodeProps = {
    value: number,
    path: string | null,
    parentPath: string | null,
    left: NodeProps | null,
    right: NodeProps | null,
}

class Node {

    public value: NodeProps['value']
    public path: NodeProps['path']
    public parentPath: NodeProps['parentPath']
    public right: NodeProps['right']
    public left: NodeProps['left']

    constructor(value: number, parentPath: NodeProps['parentPath'] = null) {
        this.value = value
        this.parentPath = parentPath
        this.path = null
        this.left = null
        this.right = null
    }

    get isLeaf () {
        return !this.left && !this.right
    }

    get hasChildren () {
        return !this.isLeaf
    }

    getParentOnInsert (binaryTree: BinaryTree) {
        if (binaryTree.isEmpty) return null
        const leaves = binaryTree.get().filter(node => node.isLeaf)
    }

}


export class BinaryTree {

    private binaryTree: Node[]

    constructor () {
        this.binaryTree = []
    }

    insertNode (value: number, parentPath: NodeProps['parentPath'] = null) {

        const node = new Node(value, parentPath)

        if (this.isEmpty) {
            node.path = '1'
            this.binaryTree = [node]
            return
        }

        if (!parentPath) throw 'Parent Path is mandatory when node is not root'

        const parent = this.getNodeByPath(parentPath)

        if (parent) {
            this.setChild(parent, node)
            this.setPath(node, parent)
        }

        this.binaryTree = [...this.binaryTree, node]

    }

    getNodeByPath(path: NodeProps['path']) {
        return this.binaryTree.find(node => node.path === path)
    }

    setChild(node: NodeProps, child: NodeProps) {
        const rightorLeft = child.value >= node.value ? 'right' : 'left'
        node[rightorLeft] = child
    }

    setPath(node: NodeProps, parent: NodeProps) {
        const path = (parent.path || '') + (node.value >= parent.value ? '2' : '1')
        node.path = path
    }

    get isEmpty () {
        return this.binaryTree.length === 0
    }

    get () {
        return this.binaryTree
    }

}



const node9 = {value: 9, left: null, right: null}
const node8 = {value: 8, left: null, right: null}
const node7 = {value: 7, left: null, right: null}
const node6 = {value: 6, left: null, right: null}
const node5 = {value: 5, left: null, right: null}
const node4 = {value: 4, left: node8, right: node9}
const node3 = {value: 3, left: node6, right: node7}
const node2 = {value: 2, parent: node3, left: node4, right: node5}
const node1 = {value: 1, left: node2, right: node3}
const binaryTree = [node1, node2, node3, node4, node5, node6, node7, node8, node9]

const bin = new BinaryTree()
bin.insertNode(1)
bin.insertNode(2, '1')
bin.insertNode(2, '')
//bin.insertNode(5, 0)
//bin.insertNode(6, 5)
console.log(bin.get())

/** 
1 -> 11 ou 12 -> 121 ou 112 ou 111 ou 122
                 1            
            /         \ 
          2             3 
        / \            / \
       4   5          6   7
      /\  /\        / \  /\
    8 9   10 11    12 13 14 15
 */