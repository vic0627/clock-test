const $ = (e) => document.querySelector(e);

const yearLayer = document.createElement("div");
yearLayer.classList.add("layer-Year");
yearLayer.innerText = new Date().getFullYear();
$("#app").appendChild(yearLayer);

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const m = new Date().getMonth();
const months = month.concat(month.slice(0, m)).filter((e, i) => i >= m);
const monthInner = months.map((val) => [...val][0]);
const monthCenter = months.map((val) => [...val][1]);
const monthOuter = months.map((val) => [...val][2]);

const monthInnerLayer = document.createElement("div");
monthInnerLayer.classList.add("month-inner-layer");
monthInner.map((val, idx) => {
  const inner = document.createElement("div");
  inner.classList.add(`inner-${val}`);
  inner.classList.add(`inner`);
  inner.innerText = val.toLowerCase();
  if (idx === 0) {
    inner.classList.add(`high-light`);
    inner.innerText = val.toLocaleUpperCase();
  }
  inner.style.transform = positionMonth(75, 12, idx);
  monthInnerLayer.appendChild(inner);
});
$("#app").appendChild(monthInnerLayer);

const monthCenterLayer = document.createElement("div");
monthCenterLayer.classList.add("month-center-layer");
monthCenter.map((val, idx) => {
  const center = document.createElement("div");
  center.classList.add(`center-${val}`);
  center.classList.add(`center`);
  center.innerText = val.toLowerCase();
  if (idx === 0) {
    center.classList.add(`high-light`);
    center.innerText = val.toUpperCase();
  }
  center.style.transform = positionMonth(95, 12, idx);
  monthCenterLayer.appendChild(center);
});
$("#app").appendChild(monthCenterLayer);

const monthOuterLayer = document.createElement("div");
monthOuterLayer.classList.add("month-outer-layer");
monthOuter.map((val, idx) => {
  const outer = document.createElement("div");
  outer.classList.add(`outer-${val}`);
  outer.classList.add(`outer`);
  outer.innerText = val.toLowerCase();
  if (idx === 0) {
    outer.classList.add(`high-light`);
    outer.innerText = val.toUpperCase();
  }
  outer.style.transform = positionMonth(115, 12, idx);
  monthOuterLayer.appendChild(outer);
});
$("#app").appendChild(monthOuterLayer);

const layerRing = document.createElement("div");
layerRing.classList.add("layer-ring");
const ringArr = Array.from({ length: 6 }, (_, idx) => idx + 1);
ringArr.map((val) => {
  const deco = document.createElement("div");
  deco.classList.add(`deco-${val}`);
  deco.classList.add(`deco`);
  deco.style.transform = positionRing(141, 6, val);
  let i = 0;
  setInterval(() => {
    deco.style.transform = positionRing(141, 6, val + i);
    i++;
  }, 60000);
  layerRing.appendChild(deco);
});
$("#app").appendChild(layerRing);

const layerSecondInner = document.createElement("div");
layerSecondInner.classList.add("layer-second-inner");
const secondArr = Array.from({ length: 60 }, (_, idx) => idx + 1);
secondArr.map((val) => {
  const scale = document.createElement("div");
  scale.classList.add(`scale-${val}`);
  scale.classList.add(`scale`);
  scale.style.transform = positionSecond(170, 60, val);
  let i = 0;
  setInterval(() => {
    scale.style.transform = positionSecond(170, 60, val + i);
    i--;
  }, 1000);

  layerSecondInner.appendChild(scale);
});
$("#app").appendChild(layerSecondInner);

const layerSecond = document.createElement("div");
layerSecond.classList.add("layer-second");
secondArr.map((val) => {
  const scale = document.createElement("div");
  scale.classList.add(`scale-${val}`);
  scale.classList.add(`scale`);
  scale.style.transform = positionSecond(190, 60, val, false);
  let i = 0;
  setInterval(() => {
    scale.style.transform = positionSecond(190, 60, val + i, false);
    i++;
  }, 1000);

  layerSecond.appendChild(scale);
});
$("#app").appendChild(layerSecond);

const layerWave = document.createElement("div");
layerWave.classList.add("layer-wave");
$("#app").appendChild(layerWave);

const layerNums = document.createElement("div");
layerNums.classList.add("layer-nums");
const numsArr = Array.from({ length: 12 }, (_, idx) => idx + 1);
const hour = new Date().getHours();
numsArr.map((val) => {
  const num = document.createElement("div");
  num.classList.add(`num-${val}`);
  num.classList.add(`num`);
  num.style.transform = positionNum(250, 12, val);
  if (val % 12 === hour % 12) {
    num.classList.add(`high-light-num`);
  }
  num.innerText = toRoman(val);
  layerNums.appendChild(num);
});
const min = document.createElement("div");
min.classList.add(`num`);
min.classList.add(`high-light-num`);
min.innerText = new Date().getMinutes();
min.style.transform = positionNum(275, 12, hour % 12);
layerNums.appendChild(min);

$("#app").appendChild(layerNums);

let trans = false;
const transform3D = () => {
  if (trans) {
    yearLayer.style.transform = layer3D(0);
    monthInnerLayer.style.transform = layer3D(0);
    monthCenterLayer.style.transform = layer3D(0);
    monthOuterLayer.style.transform = layer3D(0);
    layerRing.style.transform = layer3D(0);
    layerSecondInner.style.transform = layer3D(0);
    layerSecond.style.transform = layer3D(0);
    layerWave.style.transform = layer3D(0);
    layerNums.style.transform = layer3D(0);
    const timer = setTimeout(() => {
      yearLayer.style.transform = ``;
      monthInnerLayer.style.transform = ``;
      monthCenterLayer.style.transform = ``;
      monthOuterLayer.style.transform = ``;
      layerRing.style.transform = ``;
      layerSecondInner.style.transform = ``;
      layerSecond.style.transform = ``;
      layerWave.style.transform = ``;
      layerNums.style.transform = ``;
      trans = false;
      clearTimeout(timer);
    }, 500);
  } else {
    yearLayer.style.transform = layer3D(0);
    monthInnerLayer.style.transform = layer3D(0);
    monthCenterLayer.style.transform = layer3D(0);
    monthOuterLayer.style.transform = layer3D(0);
    layerRing.style.transform = layer3D(0);
    layerSecondInner.style.transform = layer3D(0);
    layerSecond.style.transform = layer3D(0);
    layerWave.style.transform = layer3D(0);
    layerNums.style.transform = layer3D(0);
    const timer = setTimeout(() => {
      yearLayer.style.transform = layer3D(-80);
      monthInnerLayer.style.transform = layer3D(-60);
      monthCenterLayer.style.transform = layer3D(-40);
      monthOuterLayer.style.transform = layer3D(-20);
      layerSecondInner.style.transform = layer3D(30);
      layerSecond.style.transform = layer3D(60);
      layerWave.style.transform = layer3D(80);
      layerNums.style.transform = layer3D(120);
      trans = true;
      clearTimeout(timer);
    }, 500);
  }
};
layerNums.addEventListener("click", transform3D);
