let outputArr = [];

function bucketSortMain(arr, size = arr.length) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val);
    outputArr.push({ array: [...buckets[Math.floor((val - min) / size)]] });
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
}

export async function bucketSort(inputArr) {
  const answer = bucketSortMain(inputArr);
  outputArr.push({ array: [...answer] });
  return outputArr;
}
