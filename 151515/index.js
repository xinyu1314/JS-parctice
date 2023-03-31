'use strict';
// 测试数据 1: [5, 2, 4, 1, 15, 8, 3]
// 测试数据 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = ages => {
  // 遍历所有的年龄对其做年龄处理
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    // 过滤出大于18岁的
    .filter(age => age >= 18)
    // 进行累加并算出平均值
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};

// 第一组的平均年龄
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// 第二组的平均年龄
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
