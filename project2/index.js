"use strict";
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnShowModel = document.querySelectorAll(".show-model");

const showmodel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener("click", showmodel);
}

const closemodel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModel.addEventListener("click", closemodel);
overlay.addEventListener("click", closemodel);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    if (!model.classList.contains("hidden")) {
      closemodel();
    }
  }
});
