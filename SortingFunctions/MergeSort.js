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
