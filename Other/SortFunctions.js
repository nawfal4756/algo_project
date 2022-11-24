// Remove export and async keyword before running on node directly
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

// console.log(insertionSort([20, 25, 78, 12, 9, 15, 6]));
