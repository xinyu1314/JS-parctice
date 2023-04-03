// async function main() {
//   // 返回值为非promise对象类型
//   // return 521
//   // 返回值为promise对象
//   return new Promise((resolve, reject) => {
//     // resolve("ok");
//     // reject('err')
//     // 抛出异常
//     throw "aaa";
//   });
// }
// let res = main();
// console.log(res);
async function main() {
  let p1 = new Promise((resolve, reject) => {
    resolve("ok");
  });
  let p2 = new Promise((resolve, reject) => {
    reject("err");
  });
  // 右侧为promise对象的值
  let res1 = await p1;
  // 右侧为非promise对象的值
  let res2 = await 20;
  // 右侧为失败的promise
  try {
    let res3 = await p2;
  } catch (e) {
    console.log(e);
  }
  console.log(res1);
  console.log(res2);
  console.log(res3);
}
main();
