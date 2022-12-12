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
