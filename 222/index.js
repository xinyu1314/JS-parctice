"use strict"

// let a = false
// const b = true

// // if (b) c = true
// if (b) a = true
// if (a) console.log('你可以开车上路了');

// function aaa () {
//     console.log('aaa');
// }
// aaa()

// function bbb (aa, bb) {
//     console.log(aa, bb);
//     const ccc = `Juice with apple${aa} and orange${bb}`
//     return ccc
// }
// console.log(bbb(5, 0));
// console.log(bbb(2, 4));

// function calcAge1 (birdayYear) {
//     return 2037 - birdayYear
// }

// const calcAge2 = function (birdayYear) {
//     return 2037 - birdayYear
// }

// const calcAge3 = (birdayYear) => 2037 - birdayYear 
// console.log(calcAge2(2000), calcAge1(2000), calcAge3(2000));

// const retirement = (birdayYear, name) => {
//     const age = 65 - (2037 - birdayYear)
//     return `${name}还有${age}年退休`
// }
// console.log(retirement(2000, '张三'));
// console.log(retirement(1994, '李四'));

// const cutFruit = (fruit) => {
//     return fruit * 4
// }

// const fruitChangeJuice = (apple, orange) => {
//     const apples = cutFruit(apple)
//     const oranges = cutFruit(orange)
//     const juice = `Juice with ${apples} pieces of apple and ${oranges} pieces of orange`
//     return juice
// }

// console.log(fruitChangeJuice(2,3));

// const calcAge = function (birdayYear) {
//     return 2037 - birdayYear
// }

// const retirement = (birdayYear, name) => {
//     const age = calcAge(birdayYear)
//     const retire = 65 - age
//     if (retire > 0) {
//         return `${name}还有${retire}年退休`
//     } else {
//         return `${name}已经退休了`
//     }
// }

// console.log(retirement(2000, '张三'));

// const averScore = (a, b, c) => (a + b + c) / 3

// const d = averScore(44, 23, 71)
// const e = averScore(65, 54, 49)

// const checkWinner = (score1, score2) => {
//     if (score1 >= score2 * 2) {
//         console.log('张三赢了');
//     } else if (score2 >= score1 * 2) {
//         console.log('李四赢了');
//     } else if (score1 === score2) {
//         console.log('都赢了');
//     } else {
//         console.log('都没赢');
//     }
// }
// checkWinner(d, e)

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 500, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);
// const total = bills[0] + bills[1] + bills[2] + tips[0] + tips[1] + tips[2]
// console.log(total);

const a = {
    name: '张三',
    age: 18
}
console.log(a['name']);

const b = prompt('你想知道有关a的什么，name还是age')
console.log(a[b]);