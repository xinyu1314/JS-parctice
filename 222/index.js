// 函数
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
};
// 调用
Promise.resolve(200).then((res) => {
  console.log(res);
});
