export class Heap {
  _arr: number[] = []
  _step: any[] = []
  constructor(arr:number[]) {
    this._arr = arr;
  }
  init() {
    this._step = new Array(this._arr.length);
    this.drawTree(0, 300, 50, 150);
  }
  getStep() {
    return [...this._step];
  }
  getArr() {
    return [...this._arr];
  }
  drawTree(index:number, x:number = 0, y:number = 0, offsetX:number = 0, parentX:number = 0, parentY:number = 0) {
    if(index < this._arr.length) {
      // this._step.push(this._arr[index]);
      this._step[index] = {
        index: index,
        value: this._arr[index],
        parentX: parentX,
        parentY: parentY,
        x: x,
        y: y
      };
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      this.drawTree(left, x - offsetX, y + 50, offsetX / 2, x, y);
      this.drawTree(right, x + offsetX, y + 50, offsetX / 2, x, y);
    }
  }
  build() {
    const N = this._arr.length;
    // Build heap (rearrange array)
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
      this.heapify(N, i);
    }
  }
  sort() {
    const N = this._arr.length;
    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
      // Move current root to end
      this.swap(i, 0);
      // call max heapify on the reduced heap
      this.heapify(i, 0);
    }
  }
  heapify(N: number, i: number) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if(left < N && this._arr[left] > this._arr[largest]) {
      largest = left;
    }
    if(right < N && this._arr[right] > this._arr[largest]) {
      largest = right;
    }
    if(largest !== i) {
      this.swap(i, largest);
      this.heapify(N, largest);
    }
  }
  swap(i: number, j: number) {
    const temp = this._arr[i];
    this._arr[i] = this._arr[j];
    this._arr[j] = temp;
  }

}