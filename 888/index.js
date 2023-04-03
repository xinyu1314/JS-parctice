// // 导入fs
// const fs = require("fs");
// // 读取三个文件的值
// fs.readFile("./aaa.txt", (err, data1) => {
//   if (err) throw err;
//   fs.readFile("./bbb.txt", (err, data2) => {
//     if (err) throw err;
//     fs.readFile("./ccc.txt", (err, data3) => {
//       if (err) throw err;
//       console.log(data1 + data2 + data3);
//     });
//   });
// });
// async 与 await
// // 导入fs
const fs = require("fs");
const util = require("util");
const mineReadFile = util.promisify(fs.readFile);
async function main() {
  try {
    let data1 = await mineReadFile("./aaa.txt");
    let data2 = await mineReadFile("./bbb.txt");
    let data3 = await mineReadFile("./ccc.txt");
    console.log(`${data1} ${data2} ${data3}`);
  } catch (e) {
    console.log(e);
  }
}
main();
