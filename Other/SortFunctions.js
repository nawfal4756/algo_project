// Remove export and async keyword before running on node directly

// Insertions Sort Function
export async function insertionSort(inputArr) {
  let n = inputArr.length;
  let output = [];
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      output.push({
        i,
        j,
        current,
        highlight: -1,
        array: [...inputArr],
      });
      j--;
    }

    // console.log(inputArr);
    inputArr[j + 1] = current;
    output.push({
      i,
      j,
      current,
      highlight: j + 1,
      array: [...inputArr],
    });
  }
  return output;
}

// Bubble Sort Function
export async function bubbleSort(inputArr) {
  let output = [];

  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr.length; j++) {
      let highlighted = -1;

      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
        highlighted = j;
      }

      output.push({ i, j, highlight: highlighted, array: [...inputArr] });
    }
  }
  return output;
}

// Merge Sort Functions
var outputArr = [];
function merge_Arrays(left_sub_array, right_sub_array) {
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  if (array.length != 0) {
    outputArr.push({ array: [...array] });
  }
  if (left_sub_array.length != 0) {
    outputArr.push({ array: [...left_sub_array] });
  }
  if (right_sub_array.length != 0) {
    outputArr.push({ array: [...right_sub_array] });
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}
function merge_sort(unsorted_Array) {
  const middle_index = unsorted_Array.length / 2;
  if (unsorted_Array.length < 2) {
    return unsorted_Array;
  }
  const left_sub_array = unsorted_Array.splice(0, middle_index);
  outputArr.push({ array: [...left_sub_array] });
  outputArr.push({ array: [...unsorted_Array] });
  return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
}
export async function mergeSort(inputArr) {
  outputArr.push({ array: [...inputArr] });
  let output = merge_sort(inputArr);
  outputArr.push({ array: [...output] });
  return outputArr;
}

// Heap Sort Functions
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item) {
    this.heap.push(item);
    var index = this.heap.length - 1;
    var parent = this.parentIndex(index);
    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    outputArr.push({ array: [...this.heap] });

    var item = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    var index = 0;
    var leftChild = this.leftChildIndex(index);
    var rightChild = this.rightChildIndex(index);
    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      var max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return item;
  }
}
export async function heapSort(arr) {
  var sorted = [];
  var heap1 = new MaxHeap();

  outputArr.push({ array: [...arr] });

  for (let i = 0; i < arr.length; i++) {
    heap1.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    sorted.push(heap1.delete());
  }

  outputArr.push({ array: [...sorted] });
  return outputArr;
}

// Quick Sort Functions
function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      outputArr.push({ i: pivotIndex, j: end, array: [...arr] });
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  outputArr.push({ i: pivotIndex, j: end, array: [...arr] });
  return pivotIndex;
}

function quickSortRec(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSortRec(arr, start, index - 1);
  quickSortRec(arr, index + 1, end);
}

export async function quickSort(arr, start, end) {
  quickSortRec(arr, start, end);
  return outputArr;
}

// console.log(insertionSort([20, 25, 78, 12, 9, 15, 6]));
