class Heaps {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    const BubbleUp = () => {
      let childIndex = this.values.length - 1;
      let parentIndex = Math.floor((childIndex - 1) / 2);

      while (
        parentIndex >= 0 &&
        this.values[childIndex] > this.values[parentIndex]
      ) {
        [this.values[parentIndex], this.values[childIndex]] = [
          this.values[childIndex],
          this.values[parentIndex],
        ];

        childIndex = parentIndex;
        parentIndex = Math.floor((childIndex - 1) / 2);
      }

      return this;
    };

    return BubbleUp();
  }
}

module.exports = { Heaps };
