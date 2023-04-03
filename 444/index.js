// 函数
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    // 遍历promises
    promises.forEach((p) => {
      // Promise的状态只能改变一次
      p.then(resolve, reject);
    });
  });
};
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
});
