const toRoman = (num) => {
  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join("");
};
const positionNum = (radius, divison, order) => {
  const odr = order - 3;
  const rad = (2 * Math.PI) / divison;
  const deg = 360 / divison;
  const rotate = order * deg;
  const x = radius * Math.cos(rad * odr);
  const y = radius * Math.sin(rad * odr);
  return `perspective(500px) translateX(${x}px) translateY(${y}px) rotateZ(${rotate}deg)`;
};
const positionSecond = (radius, divison, order, skew = true) => {
  const odr = order - 3;
  const rad = (2 * Math.PI) / divison;
  const deg = 360 / divison;
  const rotate = odr * deg;
  const x = radius * Math.cos(rad * odr);
  const y = radius * Math.sin(rad * odr);
  let dir;
  skew ? (dir = 30) : (dir = -30);
  return `perspective(500px) translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) skewY(${dir}deg)`;
};
const dToR = (d) => ((2 * Math.PI) / 360) * d;
const layer3D = (z, mouseX = 0, mouseY = 0) => {
  const rX = mouseX;
  const rY = mouseY;
  const x = -z * Math.sin(dToR(rX));
  const y = -z * Math.sin(dToR(rY));
  return `perspective(500px) rotateY(${rX}deg) rotateX(${rY}deg) translate3d(${x}px, ${y}px, ${z}px)`;
};
const positionRing = (radius, divison, order) => {
  const odr = order - 3;
  const rad = (2 * Math.PI) / divison;
  const deg = 360 / divison;
  const rotate = odr * deg;
  const x = radius * Math.cos(rad * odr);
  const y = radius * Math.sin(rad * odr);
  return `perspective(1000px) translateX(${x}px) translateY(${y}px) rotate(${rotate}deg)`;
};
const positionMonth = (radius, divison, order) => {
  const rad = (2 * Math.PI) / divison;
  const x = radius * Math.cos(rad * order);
  const y = radius * Math.sin(rad * order);
  return `perspective(500px) translateX(${x}px) translateY(${y}px)`;
};
class $$ {
  constructor(el, isNew = true) {
    isNew
      ? (this.element = document.createElement(el))
      : (this.element = document.querySelector(el));
  }
  log() {
    console.log(this.element);
  }
  class(className) {
    this.element.classList.add(className);
  }
  add(child) {
    this.element.appendChild(child);
  }
  text(para) {
    this.element.innerText = para;
  }
  transform(trans) {
    this.element.style.transform = trans;
  }
}
const delay = (callback, delay) => {
  const timer = setTimeout(() => {
    callback();
    clearTimeout(timer);
  }, delay);
};
