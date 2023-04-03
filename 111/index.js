function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用报错
  if (x === promise2) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 防止多次调用
  let called;
  // x不是null 且x是对象或者函数
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      // A+规定，声明then = x的then方法
      let then = x.then;
      // 如果then是函数，就默认是promise了
      if (typeof then === "function") {
        // 就让then执行 第一个参数是this   后面是成功的回调 和失败的回调
        then.call(
          x,
          (y) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            // resolve的结果依旧是promise 那就继续解析
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            reject(err); // 失败就失败了
          }
        );
      } else {
        resolve(x); //直接成功即可
      }
    } catch (err) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取出then出错了就不要继续执行
      reject(err);
    }
  } else {
    resolve(x);
  }
}
class Promise {
  constructor(executor) {
    // 添加状态
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    // 声明属性
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    // resolve函数
    let resolve = (value) => {
      if (this.state === "pending") {
        // 修改状态
        this.state = "fulfilled";
        this.value = value;
        // 调用成功的回调
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    // reject函数
    let reject = (reason) => {
      if (this.state === "pending") {
        // 修改状态
        this.state = "rejected";
        this.reason = reason;
        // 调用失败的回调
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      // 同步调用
      executor(resolve, reject);
    } catch (err) {
      // 修改promise对象失败
      reject(err);
    }
  }
  // 添加then函数
  then(onFulfilled, onRejected) {
    // 判断，如果onFulfilled不是函数，就返回value
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // 判断，如果onRejected不是函数，就抛出错误
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    // 返回promise对象
    let p2 = new Promise((resolve, reject) => {
      if (this.state === "fulfilled") {
        // 异步
        setTimeout(() => {
          try {
            // 获取回调函数的结果
            let x = onFulfilled(this.value);
            resolvePromise(p2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.state === "rejected") {
        // 异步
        setTimeout(() => {
          try {
            // 获取回调函数的结果
            let x = onRejected(this.reason);
            resolvePromise(p2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.state === "pending") {
        // 保存回调函数
        this.onResolvedCallbacks.push(() => {
          // 异步
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(p2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          // 异步
          setTimeout(() => {
            try {
              // 获取回调函数的结果
              let x = onRejected(this.reason);
              resolvePromise(p2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
      }
    });
    return p2;
  }
}
