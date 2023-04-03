// 函数
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};
// 调用
Promise.reject(200).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
