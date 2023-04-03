// 导入fs模块
const fs = require("fs");
// // 读取指定文件
// fs.readFile("./index.txt", (err, data) => {
//   // 如果发生了错误，就扔掉错误
//   if (err) {
//     throw err;
//     // 否则打印文件内容
//   } else {
//     console.log(data.toString());
//   }
// });
// 创建promise对象
const p = new Promise((resolve, reject) => {
  // 读取文件
  fs.readFile("./index.txt", (err, data) => {
    // 失败执行错误的函数
    if (err) {
      reject(err);
      // 成功执行成功的函数
    } else {
      resolve(data);
    }
  });
});
p.then(
  // 成功的函数
  (value) => {
    // 打印读取到的内容
    console.log(data.toString());
  },
  // 失败的函数
  (reason) => {
    // 打印错误
    console.log(reason);
  }
);
