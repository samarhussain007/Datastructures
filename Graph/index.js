class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
    return this;
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (el) => el !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (el) => el !== vertex1
    );
    return this;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex].length > 0) {
      let arr = this.adjacencyList[vertex];
      let length = this.adjacencyList[vertex].length;
      for (let i = 0; i < length; i++) {
        this.removeEdge(vertex, arr[i]);
      }
      delete this.adjacencyList[vertex];
    }
    return this;
  }

  dephtFirstRecursive(vertex) {
    let res = [];
    let obj = {};

    const helper = (vertex) => {
      if (!vertex) {
        return;
      }

      obj[vertex] = true;
      res.push(vertex);
      console.log(obj);

      let adjList = this.adjacencyList[vertex];

      for (let i = 0; i < adjList.length; i++) {
        let char = adjList[i];
        if (!obj[char]) {
          helper(char);
        }
      }
    };

    helper(vertex);

    return res;
  }
}

module.exports = { Graph };
