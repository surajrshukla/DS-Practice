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
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(3);
tree.insert(8);

console.log(tree.find(-1));

// Insert / find operetions = O(log n )
