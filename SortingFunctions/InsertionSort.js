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
