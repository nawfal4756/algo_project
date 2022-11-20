export async function insertionSort(inputArr) {
  let n = inputArr.length;
  let output = [];
  let highlighted = -1;
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
        array: structuredClone(inputArr),
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
      array: structuredClone(inputArr),
    });
  }
  return output;
}

// console.log(insertionSort([20, 25, 78, 12, 9, 15, 6]));
