import Queue from "../LinkedList/Queue.mjs";

class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return this;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (!this.root) return null;
        if (this.root.value === value) return this.root;
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) return null;
                if (current.left.value === value) return current.left;
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) return null;
                if (current.right.value === value) return current.right;
                current = current.right;
            }
        }
    }

    BFS() {
        let node = this.root;
        const queue = new Queue();
        const visited = [];
        queue.enqueue(node);
        while (queue.size) {
            // queue.dequeue() will give tree node as value so to access the tree node we have to access value property of queue node
            const treeNode = queue.dequeue().value;
            visited.push(treeNode.value);
            if (treeNode.left) queue.enqueue(treeNode.left);
            if (treeNode.right) queue.enqueue(treeNode.right);
        }

        return visited;
    }

    DFSPreOrder() {
        const visited = [];
        let current = this.root;

        const traverse = (node) => {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };

        traverse(current);

        return visited;
    }

    DFSPostOrder() {
        const visited = [];
        let current = this.root;

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        };

        traverse(current);

        return visited;
    }

    DFSInOrder() {
        const visited = [];
        let current = this.root;

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        };

        traverse(current);

        return visited;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());

// BST
// Insert / find operetions = O(log n )
