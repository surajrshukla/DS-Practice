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
}

const graph = new Graph();

graph.addVertex("Mehsana");
graph.addVertex("Ahmedabad");
graph.addVertex("Gandhinagar");
graph.addVertex("Surat");
graph.addEdge("Ahmedabad", "Gandhinagar");
graph.addEdge("Ahmedabad", "Surat");
graph.addEdge("Ahmedabad", "Mehsana");
graph.removeEdge("Ahmedabad", "Mehsana");
graph.removeVertax("Ahmedabad");
console.log(graph.adjacencyList);
