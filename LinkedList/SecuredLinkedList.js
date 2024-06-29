// Asked in Google First round
// A normal Linked List looks like this: Node -> Node -> Node, and a Node is usually represented as Node{String value; Node next}.
// The Linked List Node used in this question is a little bit special. It has one more field which is an integer hashValue. I.e. Node{String value; Node next; int hashValue}.
// The hashValue of a Node should be the hash of “its own value concatenated with the hashValue of the next node”. You can assume there is already a hash function well defined. The hash function implementation is not important for this question. If the Node do not have a next Node, its hashValue should be the hash of the Node’s own value.
// Now we want you to define and implement a Secured Linked List class which has the following two interfaces.
// /**
//   * Adds a new node with the value at the “head” of the Linked List.
//   * @param {string} value
//   */
// addValue(value)

// /**
//   * @returns {boolean} true if the whole chain is valid, false if not.
//   * “Valid" means for every node, the hashValue is in compliance with the hash
//   * function, i.e. hashValue is the same as the hash of
//   * “its own value concatenated with the hashValue of the next node”
//   */
// isValidChain()

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.hashValue = this.hash(value);
    }

    hash(value) {
        return `abc${value}`;
    }
}

class SecuredLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @param {number} value
     * @description adds the value to the head
     * @returns SecuredLinkedList
     */
    addValue(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            node.hashValue = `${node.hashValue}${this.head.hashValue}`;
            this.head = node;
        }
        this.length++;
        return this;
    }

    /**
     * @description loop through the list and check if the list is secured or not
     * @returns boolean
     */
    isValidChain() {
        let current = this.head;
        while (current) {
            const currentHash = current.hash(current.value);
            if (current.next) {
                const nextHash = current.next.hash(current.next.value);

                if (current.hashValue !== `${currentHash}${nextHash}`)
                    return false;
            } else if (current.hashValue !== current.hash(current.value)) {
                return false;
            }
            current = current.next;
        }

        return true;
    }
}

const list = new SecuredLinkedList();
console.log(list.addValue(1));
console.log(list.addValue(2));
console.log(list.isValidChain());
