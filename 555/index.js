"use strict";
// 取随机数
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// 提示用户的函数
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// check按钮注册点击事件
document.querySelector(".check").addEventListener("click", function () {
  // 获取输入框内用户输入的数字
  const guess = Number(document.querySelector(".guess").value);
  // 如果没有输入数字
  if (!guess) {
    // 提示用户没有输入数字
    displayMessage("请输入数字");
    // 如果用户输入的数字为指定的随机数
  } else if (guess === secretNumber) {
    // 提示用户：恭喜猜中数字
    displayMessage("恭喜猜中数字!");
    // 框内显示指定的随机数
    document.querySelector(".number").textContent = secretNumber;
    // 整体变换颜色
    document.querySelector("body").style.backgroundColor = "#60b347";
    // 框内大小变化
    document.querySelector(".number").style.width = "30rem";
    // 如果剩余次数大于highscore
    if (score > highscore) {
      // 赋值
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // 用户猜错了
  } else if (guess !== secretNumber) {
    // 如果剩余次数大于1
    if (score > 1) {
      // 根据输入的数字与指定的随机数的大小对比提示用户输入数字是大了还是小了
      displayMessage(guess > secretNumber ? "大了" : "小了");
      // 次数减1
      score--;
      document.querySelector(".score").textContent = score;
      // 如果次数不大于1
    } else {
      // 提示用户：您输了
      displayMessage("您输了");
      // 将次数归0
      document.querySelector(".score").textContent = 0;
    }
  }
});
// 给again按钮注册点击事件
document.querySelector(".again").addEventListener("click", function () {
  // 次数回归20
  score = 20;
  // 重新获取随机数
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // 提示用户：继续猜数字
  displayMessage("继续猜数字...");
  // 重置
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
