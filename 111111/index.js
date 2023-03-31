"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
// 注册按钮点击事件
document.querySelector("button").addEventListener("click", function () {
  // 获取输入框的值
  const text = document.querySelector("textarea").value;
  // 将获取到的输入框的值根据换行进行切割
  const rows = text.split("\n");
  // 从分割出来的数据进行遍历与解构
  for (const [i, row] of rows.entries()) {
    // 将分割出的数据进行再次分割
    const [first, second] = row.toLowerCase().trim().split("_");
    // 将第二次分割出的字符进行替换，将第一个字母替换成大写的
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // padEnd：长度为20
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
