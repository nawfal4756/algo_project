import { insertionSort } from "../../../SortingFunctions/InsertionSort";
import { bubbleSort } from "../../../SortingFunctions/BubbleSort";
import { mergeSort } from "../../../SortingFunctions/MergeSort";
import { heapSort } from "../../../SortingFunctions/HeapSort";
import { quickSort } from "../../../SortingFunctions/QuickSort";
import { radixController } from "../../../SortingFunctions/RadixSort";
import { countingSort } from "../../../SortingFunctions/CountingSort";
import { modifiedQuickSort } from "../../../SortingFunctions/ModifiedQuickSort";

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
    } else if (method === "radix") {
      output = await radixController(numArray);
    } else if (method === "counting") {
      output = await countingSort(numArray);
    } else if (method === "modifiedQuick") {
      output = await modifiedQuickSort(numArray, 0, numArray.length);
    }
    res.status(200).json(output);
  }
}
