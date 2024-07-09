import Queue from "../LinkedList/Queue.mjs";
import Stack from "../LinkedList/Stack.mjs";
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        this.adjacencyList[vertex1].push(vertex2);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1
        );
    }

    removeVertax(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertax = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertax);
        }

        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(virtex) {
            if (!virtex) return null;
            visited[virtex] = true;
            result.push(virtex);
            console.log(adjacencyList);
            adjacencyList[virtex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    depthFirstIteretive(start) {
        const stack = new Stack();
        stack.push(start);
        const visited = {};
        const result = [];
        while (stack.size > 0) {
            const virtex = stack.pop().value;
            if (!visited[virtex]) {
                visited[virtex] = true;
                result.push(virtex);
                this.adjacencyList[virtex].forEach((v) => stack.push(v));
            }
        }

        return result;
    }

    breadthFirst(start) {
        const queue = new Queue();
        const visited = {};
        const result = [];
        queue.enqueue(start);
        while (queue.size > 0) {
            const virtex = queue.dequeue().value;
            if (!visited[virtex]) {
                visited[virtex] = true;
                result.push(virtex);
                this.adjacencyList[virtex].forEach((v) => queue.enqueue(v));
            }
        }

        return result;
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.depthFirstRecursive("A"));
console.log(graph.depthFirstIteretive("A"));
console.log(graph.breadthFirst("A"));
