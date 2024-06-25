class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if (this.size === 0) return null;
        const removedNode = this.first;
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

queue.enqueue(3);

console.log(queue);
