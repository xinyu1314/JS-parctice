const btn = document.querySelector("#btn");
// 取随机数函数
function rand(m, n) {
  return Math.ceil(Math.random() * (n - m + 1) + m - 1);
}
// 注册点击事件
btn.addEventListener("click", function () {
  //   // 建立定时器
  //   setTimeout(() => {
  //     // 取1-100的随机数
  //     let n = rand(1, 100);
  //     // 如果小于30，就提示用户：恭喜您，中奖了
  //     if (n <= 30) {
  //       alert("恭喜您，中奖了");
  //       // 否则就提示用户：请再接再厉
  //     } else {
  //       alert("请再接再厉");
  //     }
  //   }, 1000);
  // 创建新的promise对象
  const p = new Promise((resolve, reject) => {
    // 创建定时器
    setTimeout(() => {
      // 取1-100的随机数
      let n = rand(1, 100);
      //   如果小于30，执行成功的函数
      if (n <= 30) {
        resolve(n);
        // 大于30，执行失败的函数
      } else {
        reject(n);
      }
    }, 1000);
  });
  p.then(
    // 成功的函数
    (value) => {
      alert(`恭喜您，中奖了，你的中奖号码是${value}`);
    },
    // 失败的函数
    (value) => {
      alert(`您的号码是${value}您没有中奖，请再接再厉`);
    }
  );
});
