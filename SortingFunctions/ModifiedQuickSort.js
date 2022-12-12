var outputArr = [];
const k = 15;
function limitedQuickSort(inputArr, start, end, k) {
  if (end - start >= k) {
    let partitioned = partition(inputArr, start, end);
    limitedQuickSort(inputArr, start, partitioned, k);
    limitedQuickSort(inputArr, partitioned + 1, end, k);
  }
}

function partition(inputArr, start, end) {
  let counter1, counter2, temp, element;
  element = inputArr[end - 1];
  counter1 = start;

  for (counter2 = 0; counter2 < end - 1; counter2++) {
    if (inputArr[counter2] <= element) {
      temp = inputArr[counter1];
      inputArr[counter1] = inputArr[counter2];
      inputArr[counter2] = temp;
      outputArr.push({ i: counter1, j: end - 1, array: [...inputArr] });
      counter1++;
    }
  }
  temp = inputArr[counter1];
  inputArr[counter1] = inputArr[end - 1];
  inputArr[end - 1] = temp;
  outputArr.push({ i: counter1, j: end - 1, array: [...inputArr] });
  return counter1;
}

function insertionSort(inputArr, start, end) {
  let counter1, counter2, key;
  for (counter1 = start + 1; counter1 < end; counter1++) {
    key = inputArr[counter1];
    for (
      counter2 = counter1 - 1;
      counter2 >= start && inputArr[counter2] > key;
      counter2--
    ) {
      inputArr[counter2 + 1] = inputArr[counter2];
    }
    inputArr[counter2 + 1] = key;
  }
  return inputArr;
}

export async function modifiedQuickSort(inputArr, start, end) {
  limitedQuickSort(inputArr, start, end, k);
  let sortedArr = insertionSort(inputArr, start, end);
  outputArr.push({ array: [...sortedArr] });
  return outputArr;
}
