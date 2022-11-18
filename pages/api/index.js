import formidable from "formidable";
import { readFileSync } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function formParser(req) {
  return new Promise((resolve, reject) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  const { fields, files } = await formParser(req);
  let method = fields.method;
  let fileUrl = files.file.filepath;
  let originalFileName = files.file.originalFilename;

  const fileType = originalFileName.split(".").pop();

  if (fileType === "txt") {
    const data = readFileSync(fileUrl, { encoding: "utf8", flag: "r" });
    const array = data.split(" ");
    console.log(array);
    res.status(200).json({ message: "Successful", array });
  } else {
    res.status(422).json({ message: "Only .txt files can be sent" });
  }
}
