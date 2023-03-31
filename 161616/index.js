'use strict';

// 测试数据:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 计算狗需要的食物的量并添加到对象中
dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
// 找到沙拉的狗
const dogSarah = dogs.find(dog => {
  dog.owners.includes('Sarah');
});
// 判断沙拉的狗是吃的太多了还是太少了
console.log(
  `沙拉的狗吃的食物太${dogSarah.curFood > dogSarah.recFood ? '多' : '少'}了`
);
// 找到所有吃的太多的狗的主人
const ownersDogEatTooMuch = dogs
  .filter(dog => {
    dog.curFood > dog.recFood;
  })
  .flatMap(dog => {
    dog.owners;
  });
// 找到所有吃的太少的狗的主人
const ownersDogEatTooLittle = dogs
  .filter(dog => {
    dog.curFood < dog.recFood;
  })
  .flatMap(dog => {
    dog.owners;
  });
// 创建字符串
console.log(`${ownersDogEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersDogEatTooLittle.join(' and ')}'s dogs eat too little`);
// 看是否有狗吃的食物的量与推荐的量相同
console.log(
  dogs.some(dog => {
    dog.curFood === dog.recFood;
  })
);
// 看是否有狗吃的食物的量符合推荐的量
const checkEatingOkay = dog => {
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
};
console.log(dogs.some(checkEatingOkay));
// 过滤出正在吃推荐的量的狗
console.log(dogs.filter(checkEatingOkay));
// 根据狗的推荐食物量进行排序
console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));
