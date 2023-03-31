"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 给两个按钮注册点击事件
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// 获取元素
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
// 按钮注册点击事件
btnScrollTo.addEventListener("click", function (e) {
  // 获取按钮的周围距离
  const s1coords = section1.getBoundingClientRect();
  // 跳转到当前位置
  section1.scrollIntoView({ behavior: "smooth" });
});

// 获取链接
document.querySelector(".nav__links").addEventListener("click", function (e) {
  // 阻止默认行为
  e.preventDefault();
  // 如果类名包括nav__link
  if (e.target.classList.contains("nav__link")) {
    // 找到带有链接的按钮的类
    const id = e.target.getAttribute("href");
    // 点击链接,平滑滚动
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// 获取内容
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
// 父组件注册点击事件
tabsContainer.addEventListener("click", function (e) {
  // 无论点击哪个,都获取到按钮
  const clicked = e.target.closest(".operations__tab");
  // 如果没点击,就返回
  if (!clicked) return;
  // 移除相应的类名
  tabs.forEach((a) => a.classList.remove("operations__tab--active"));
  tabsContent.forEach((b) => b.classList.remove("operations__content--active"));
  // Activate tab
  clicked.classList.add("operations__tab--active");
  // 添加对应的类名
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// 获取内容
const nav = document.querySelector(".nav");
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    // 找到链接的父级
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    // 设置样式
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// 注册鼠标悬停事件
nav.addEventListener("mouseover", handleHover.bind(0.5));
// 注册鼠标离开事件
nav.addEventListener("mouseout", handleHover.bind(1));

// 导航栏部分
// 获取标签
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
// 观察者API
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// 预加载部分
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// 图片懒加载
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// 滑块部分
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  // 当前图片为第一张
  let curSlide = 0;
  // 最后一张图片为图片数组的长度
  const maxSlide = slides.length;
  // 创建点
  const createDots = function () {
    // 对应索引
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  // 当前点的函数
  const activateDot = function (slide) {
    // 删除类
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    // 添加类
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  // 平移
  const goToSlide = function (slide) {
    slides.forEach(
      (a, i) => (a.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // 下一张
  const nextSlide = function () {
    // 如果点击下一张时是最后一张，就回到第一张
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    // 去当前页
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // 上一张
  const prevSlide = function () {
    // 如果当前为第一张，就滑到最后一张
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    // 去当前页
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // 按钮初始化
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  // 右按钮点击事件
  btnRight.addEventListener("click", nextSlide);
  // 左按钮点击事件
  btnLeft.addEventListener("click", prevSlide);
  // 吉安盼敲击事件
  document.addEventListener("keydown", function (e) {
    // 敲击的是左箭头，就执行上一张
    if (e.key === "ArrowLeft") prevSlide();
    // 敲击的是右箭头，就执行下一张
    e.key === "ArrowRight" && nextSlide();
  });
  // 点的点击事件
  dotContainer.addEventListener("click", function (e) {
    // 如果类名包括dots__dot
    if (e.target.classList.contains("dots__dot")) {
      // 获取索引
      const { slide } = e.target.dataset;
      // 去对应的图片
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
