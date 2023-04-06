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
const dToR = (d) => (Math.PI / 180) * d;
const layer3D = (r, mouseX = 0, mouseY = 0) => {
  const rX = mouseX / window.innerWidth * 2;
  const rY = -(mouseY / window.innerHeight * 2);
  const theta = dToR(rX * 60);
  const phi = dToR(rY * 60);
  const x = r * Math.cos(phi) * Math.sin(theta);
  const y = () => {
    const temp = r * Math.sin(phi) * Math.sin(theta);
    if (rX > 0) {
      return -temp;
    } else {
      return temp;
    }
  };
  const z = r * Math.cos(theta);
  return `perspective(500px) rotateX(${rY * 60}deg) rotateY(${rX * 60}deg) translate3d(${x}px, ${y()}px, ${z}px)`;
};
const positionRing = (radius, divison, order) => {
  const odr = order - 3;
  const rad = (2 * Math.PI) / divison;
  const deg = 360 / divison;
  const rotate = odr * deg;
  const x = radius * Math.cos(rad * odr);
  const y = radius * Math.sin(rad * odr);
  return `perspective(500px) translateX(${x}px) translateY(${y}px) rotate(${rotate}deg)`;
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
  on(event, callback) {
    this.element.addEventListener(event, callback);
  }
}
const delay = (callback, delay) => {
  const timer = setTimeout(() => {
    callback();
    clearTimeout(timer);
  }, delay);
};
