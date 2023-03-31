"use strict";

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h
// 买车函数
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 继承：加速度
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make}的加速度是${this.speed} km/h`);
};
// 继承：刹车
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make}的刹车速度是${this.speed} km/h`);
};
// 新车属性
const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
// 加速调用与刹车调用
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
