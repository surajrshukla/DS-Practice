// piece of data - val
// reference to the next node - next
// reference to the pren node - prev

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        // 1. Create a node
        // 2. assign new node prev as tail
        // 3. if there is no head assign the node as head and tail.
        // 4. if there is a tail, tail.next = node and assign node as tail
        // 5. increase length of list
        // 6. return list
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /**
     *
     * @returns Node
     * removes the item from last
     */
    pop() {
        if (!this.head) return;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newTail = this.tail.prev;
            this.tail.prev = null;
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        return this.tail;
    }

    shift() {
        if (!this.head) return;
        const oldHead = this.head;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) return;
        const isFrontNear = index <= Math.floor(this.length / 2);
        let current = isFrontNear ? this.head : this.tail;
        let count = isFrontNear ? 0 : this.length - 1;
        while (count !== index) {
            if (isFrontNear) {
                current = current.next;
                count++;
            } else {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return;
        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        }

        const node = new Node(val);
        const prevNode = this.get(index - 1);
        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next = node;
        node.next.prev = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return;
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            return this.shift();
        }

        const node = this.get(index);
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

console.log(list);
console.log(list.reverse());
console.log(list);
