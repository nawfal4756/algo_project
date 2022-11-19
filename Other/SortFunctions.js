function insertionSort(inputArr) {
  let n = inputArr.length;
  let output = {};
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }

    // output[i] = [...inputArr];
    console.log(inputArr);
    inputArr[j + 1] = current;
  }
  return output;
}

let output = insertionSort([25, 69, 78, 32, 6, 8, 12]);
console.log(output);
