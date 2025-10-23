import fs from "fs";

export default function removeFile(filePath) {
  return fs.unlink(filePath, (err) => {
    if (err) throw new Error(err);
  });
}
