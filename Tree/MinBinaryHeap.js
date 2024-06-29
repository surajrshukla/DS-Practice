class MinBinaryHeap {
    constructor() {
        this.values = [12, 14, 18, 19, 15, 20, 21];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];
            if (element >= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        let element = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (element > leftChild) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (swap === null && element > rightChild) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const heap = new MinBinaryHeap();
console.log(heap.insert(9));
console.log(heap.insert(8));

console.log(heap.extractMin());
console.log(heap.values);
