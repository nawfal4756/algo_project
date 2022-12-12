var outputArr = [];

function getMax(arr, n = arr.length) {
  let mx = arr[0];
  for (let i = 1; i < n; i++) if (arr[i] > mx) mx = arr[i];
  return mx;
}

export async function boundedCountSort(inputArr, bound1, bound2) {
  let counter, numberOfIntegers;
  let max = getMax(inputArr);
  let arrB = new Array(max + 1);
  let arrC = new Array(max + 1);

  for (counter = 0; counter <= max; counter++) {
    arrB[counter] = 0;
  }

  for (counter = 0; counter < inputArr.length; counter++) {
    arrB[inputArr[counter]] += 1;
  }
  outputArr.push({ array: [...arrB] });

  arrC[0] = arrB[0];

  for (counter = 1; counter <= max; counter++) {
    arrC[counter] = arrB[counter] + arrC[counter - 1];
  }
  outputArr.push({ array: [...arrC] });

  if (bound1 > max || bound1 < 0) {
    numberOfIntegers = 0;
  } else if (bound2 > max || bound2 < 0) {
    numberOfIntegers = 0;
  } else if (bound1 > bound2) {
    numberOfIntegers = 0;
  } else {
    numberOfIntegers = arrC[bound2] - arrC[bound1] + arrB[bound1];
  }
  outputArr.push({ i: numberOfIntegers });
  return outputArr;
}
