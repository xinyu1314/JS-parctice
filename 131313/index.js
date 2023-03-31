'use strict';
// 测试数据 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// 测试数据 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
const checkDogs = function (dogsJulia, dogsKate) {
  // 数据全选
  const dogsJuliaCorrected = dogsJulia.slice();
  // 删除第一个狗的数据与后两个狗的数据
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // 将所有狗的数据存储到一个数组中
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  // 遍历所有的狗
  dogs.forEach(function (dog, i) {
    // 如果狗大于等于三岁
    if (dog >= 3) {
      console.log(`${i + 1}号狗已经成年了, ${dog}岁`);
    } else {
      console.log(`${i + 1}号狗还未成年`);
    }
  });
};
// 测试数据
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
