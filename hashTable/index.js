class hashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charValue = char.charCodeAt(0) - 96;
      total = (total + WEIRD_PRIME + charValue) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const hashkey = this._hash(key);

    if (!this.keyMap[hashkey]) {
      this.keyMap[hashkey] = [];
    }
    this.keyMap[hashkey].push([key, value]);

    return this;
  }

  get(key) {
    const hashkey = this._hash(key);

    if (!this.keyMap[hashkey]) {
      return null;
    }

    let resArr = this.keyMap[hashkey];

    for (let i = 0; i < resArr.length; i++) {
      let charKey = resArr[i][0];
      if (charKey === key) {
        return resArr[i][1];
      }
    }
  }

  keys() {
    if (!(this.keyMap.length !== 0)) return null;
    let arr = this.keyMap;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        for (let j = 0; j < arr[i]?.length; j++) {
          let key = arr[i][j][0];
          !res.includes(key) && res.push(key);
        }
      }
    }
    return res;
  }
  values() {
    if (!(this.keyMap.length !== 0)) return null;
    let arr = this.keyMap;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        for (let j = 0; j < arr[i]?.length; j++) {
          let key = arr[i][j][1];
          !res.includes(key) && res.push(key);
        }
      }
    }
    return res;
  }
}

module.exports = { hashTable };
