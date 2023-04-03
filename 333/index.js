const btn = document.querySelector("#btn");
// 按钮注册点击事件
btn.addEventListener("click", function () {
  //   // 创建对象
  //   const xhr = new XMLHttpRequest();
  //   // 初始化
  //   xhr.open("GET", "https://api.apiopen.top/getJoke");
  //   // 发送
  //   xhr.send();
  //   // 处理响应结果
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4) {
  //       // 判断响应码符合条件就打印相应信息
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         console.log(xhr.response);
  //         // 不符合条件就打印响应码
  //       } else {
  //         console.log(xhr.status);
  //       }
  //     }
  //   };
  // 创建promise对象
  const p = new Promise((resolve, reject) => {
    // 创建对象
    const xhr = new XMLHttpRequest();
    // 初始化
    xhr.open("GET", "https://api.apiopen.top/getJoke");
    // 发送
    xhr.send();
    // 处理响应结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // 判断响应码符合条件就执行成功的函数
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
          // 不符合条件就执行失败的函数
        } else {
          reject(xhr.status);
        }
      }
    };
  });
  p.then(
    // 成功的函数，打印相应信息
    (value) => {
      console.log(value);
    },
    // 失败的函数，打印相应码
    (reason) => {
      console.log(reason);
    }
  );
});
