import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "../../../Other/SortFunctions";

export default async function handler(req, res) {
  const method = req.query.methodId;
  if (req.method === "GET") {
    res.status(200).json({ message: `/api/${method}` });
  }
  if (req.method === "POST") {
    const array = req.body.data;
    const numArray = array.map((item) => {
      return parseFloat(item);
    });
    let output = [];
    if (method === "insertion") {
      output = await insertionSort(numArray);
    } else if (method === "bubble") {
      output = await bubbleSort(numArray);
    } else if (method === "merge") {
      output = await mergeSort(numArray);
    } else if (method === "heap") {
      output = await heapSort(numArray);
    } else if (method === "quick") {
      output = await quickSort(numArray, 0, numArray.length - 1);
      console.log("Length", numArray.length - 1);
    }
    res.status(200).json(output);
  }
}
