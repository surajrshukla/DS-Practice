// piece of data - val
// reference to the next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     *
     * @param {*} val
     * @returns SinglyLinkedList
     * @description adds the value to the end of the list
     */

    push(val) {
        // 1. Create a node
        // 2. if there is no head assign the node as head and tail.
        // 3. if there is a tail, tail.next = node and assign node as tail
        // 4. increase length of list
        // 5. return list
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
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
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    get(index) {
        if (this.length === 0 || index > this.length || index < 0) return;
        let current = this.head;
        let count = 0;
        while (count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(index, val) {
        let found = this.get(index);
        if (found) {
            found.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (this.length === 0 || index > this.length || index < 0) return false;
        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        const newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (this.length === 0 || index > this.length || index < 0) return false;
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            return this.shift();
        }

        let prevNode = this.get(index - 1);
        const current = prevNode.next;
        prevNode.next = current.next;
        this.length--;
        return current;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);

list.reverse();
list.traverse();

console.log(list);

/**
 * Insertion -
 *      1. at Begennong or at end O(1)
 *      2. anywhere between O(N)
 * Removal -
 *      1. at Begennong or at end O(1)
 *      2. anywhere between O(N)
 * Searching - O(N)
 * Access - O(N)
 */
