"use strict";
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// 获取数组每一项的值（不重复）
const events = [...new Set(gameEvents.values())];
// 删掉不公平的黄牌
gameEvents.delete(64);
// 计算触发事件时间的平均值
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// 获取最后一个事件的时间
const time = [...gameEvents.keys()].pop();
// 根据时间确定是上半场的事件还是下半场的事件
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
