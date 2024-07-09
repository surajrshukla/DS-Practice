class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(value) {
        const node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this;
    }
    pop() {
        const removedNode = this.first;
        if (!this.first) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
            removedNode.next = null;
        }
        this.size--;
        return removedNode;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);

stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);

export default Stack;
