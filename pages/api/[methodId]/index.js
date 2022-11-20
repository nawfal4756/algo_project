import { insertionSort } from "../../../Other/SortFunctions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const method = req.query.methodId;
    const array = req.body.data;
    const numArray = array.map((item) => {
      return parseFloat(item);
    });
    let output = [];
    if (method === "insertion") {
      output = await insertionSort(numArray);
    }
    res.status(200).json(output);
  }
}
