"use strict";
const poll = {
  question: "你最喜欢哪种编程语言?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // 页面提示框内的问题
  registerNewAnswer() {
    // 输入答案
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n('写下符合你答案的数字')`
      )
    );
    // 对输入的字符进行判定，如果是数字并且是数组中的内容, 就计数加1
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  // 显示结果
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll函数运行的结果${this.answers.join(", ")}`);
    }
  },
};
// 注册点击事件
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer();

// 民意调查结果
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// 点击事件，点击中间部分切换颜色
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
