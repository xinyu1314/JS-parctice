// // 创建我的读取文件内容函数
// function mineReadFile(path) {
//   // 返回promise对象
//   return new Promise((resolve, reject) => {
//     // 读取文件内容封装
//     require("fs").readFile(path, (err, data) => {
//       // 失败执行失败的函数
//       if (err) reject(err);
//       // 成功执行成功的函数
//       resolve(data);
//     });
//   });
// }
// mineReadFile("./index.txt").then(
//   // 成功就打印读取的内容
//   (value) => {
//     console.log(value.toString());
//   },
//   // 失败就打印错误
//   (reason) => {
//     console.log(reason);
//   }
// );
// util.promisify方法
// 导入util
const util = require("util");
// 导入fs
const fs = require("fs");
// 使用util.promisify
let mineReadFile = util.promisify(fs.readFile);
// 读取成功就打印读取到的内容
mineReadFile("./index.txt").then((value) => {
  console.log(value.toString());
});
