"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// 重置
const init = function () {
  // 玩家0和玩家1的初始分数
  scores = [0, 0];
  // 掷骰子的累加分数
  currentScore = 0;
  // 当前玩家
  activePlayer = 0;
  // 是否在玩
  playing = true;
  // 重置为0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // 增加隐藏类
  diceEl.classList.add("hidden");
  // 清除胜者类
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  // 清除当前玩家类
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

// 切换用户函数
const switchPlayer = function () {
  // 重置分数为0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // 分数清零
  currentScore = 0;
  // 区分当前玩家
  activePlayer = activePlayer === 0 ? 1 : 0;
  // 切换类，确保这个当前游戏的玩家的类只在一个玩家身上
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// 掷骰子的点击事件
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 掷骰子
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 删除类
    diceEl.classList.remove("hidden");
    // 根据骰子的点数切换相应的图片
    diceEl.src = `dice-${dice}.png`;
    // 判断，如果掷出的点数不等于1
    if (dice !== 1) {
      // 累加上一个值
      currentScore += dice;
      // 赋值
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // 切换用户
      switchPlayer();
    }
  }
});

// hold的点击事件
btnHold.addEventListener("click", function () {
  if (playing) {
    // 将当前分数添加到总分上
    scores[activePlayer] += currentScore;
    // 文本赋值
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 判断，如果分数大于等于100
    if (scores[activePlayer] >= 100) {
      // 结束游戏
      playing = false;
      // 添加隐藏类
      diceEl.classList.add("hidden");
      // 给赢的玩家增加类
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      // 移除当前玩家的类
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // 如果没到100分，就切换到下一个玩家
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
