'use strict';
// 测试数据 1: [5, 2, 4, 1, 15, 8, 3]
// 测试数据 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = function (ages) {
  // 换算成人类年龄
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  // 筛选出年龄大于18岁的为成年的
  const adults = humanAges.filter(age => age >= 18);
  // 计算出成年的平均年龄
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // 返回这个平均年龄
  return average;
};
// 第一组的平均年龄
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// 第二组的平均年龄
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
