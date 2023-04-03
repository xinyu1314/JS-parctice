function Promise(aaa) {
  // 添加属性
  this.PromiseState = "pending";
  this.PromiseResult = null;
  // 声明属性
  this.callbacks = [];
  // 保存实例对象的this
  const bbb = this;
  // resolve函数
  function resolve(data) {
    // 判断状态:保证状态只能更改一次
    if (bbb.PromiseState !== "pending") return;
    // 修改状态
    bbb.PromiseState = "fulfilled";
    bbb.PromiseResult = data;
    // 调用成功的回调
    bbb.callbacks.forEach((item) => {
      item.onresovled(data);
    });
    // if (bbb.callback.onresovled) {
    //   bbb.callback.onresovled(data);
    // }
  }
  // reject函数
  function reject(data) {
    // 判断状态
    if (bbb.PromiseState !== "pending") return;
    // 修改状态
    bbb.PromiseState = "rejected";
    bbb.PromiseResult = data;
    // 调用失败的回调
    bbb.callbacks.forEach((item) => {
      item.onrejected(data);
    });
    // if (bbb.callback.onrejected) {
    //   bbb.callback.onrejected(data);
    // }
  }
  try {
    // 同步调用
    aaa(resolve, reject);
  } catch (e) {
    // 修改promise对象为失败
    reject(e);
  }
}
// 添加then方法
Promise.prototype.then = function (onresovled, onrejected) {
  const ccc = this;
  // 判断回调函数参数
  if (typeof onrejected !== "function") {
    onrejected = (reason) => {
      throw reason;
    };
  }
  // 指定值
  if (typeof onresovled !== "function") {
    onresovled = (value) => {
      value;
    };
  }
  return new Promise((resolve, reject) => {
    // 封装函数
    function callback(type) {
      try {
        // 获取回调函数的结果
        let result = type(ccc.PromiseResult);
        // 判断
        if (result instanceof Promise) {
          // 如果是Promise对象
          result.then(
            (a) => {
              resolve(a);
            },
            (b) => {
              reject(b);
            }
          );
          // 如果不是Promise对象
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    // 执行回调函数
    if (this.PromiseState === "fulfilled") {
      callback(onresovled);
    }
    if ((this.PromiseState = "rejected")) {
      callback(onrejected);
    }
    if ((this.PromiseState = "pending")) {
      // 保存回调函数
      this.callbacks.push({
        onresovled: function () {
          callback(onresovled);
        },
        onrejected: function () {
          callback(onrejected);
        },
      });
    }
  });
};
// 添加catch方法
Promise.prototype.catch = function (onrejected) {
  return this.then(undefined, onrejected);
};
// 添加resolve方法
Promise.resolve = function (value) {
  // 返回Promise对象
  return new Promise((resolve, reject) => {
    // 判断传入的是否为Promise对象
    if (value instanceof Promise) {
      value.then(
        (a) => {
          resolve(a);
        },
        (b) => {
          reject(b);
        }
      );
    } else {
      // 状态设置为成功
      resolve(value);
    }
  });
};
// 添加reject方法
Promise.reject = function (reason) {
  // 返回Promise对象
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};
// 添加all方法
Promise.all = function (promises) {
  // 返回Promise对象
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    // 遍历数组
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        // 成功状态
        (a) => {
          count++;
          // 将当前promise对象的结果存入数组中
          arr[i] = a;
          // 判断
          if (count === promises.length) {
            resolve(arr);
          }
        },
        (b) => {
          reject(b);
        }
      );
    }
  });
};
// 添加race方法
Promise.race = function (promises) {
  // 返回Promise对象
  return new Promise((resolve, reject) => {
    // 遍历数组
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        // 成功状态
        (a) => {
          resolve(a);
        },
        (b) => {
          reject(b);
        }
      );
    }
  });
};
