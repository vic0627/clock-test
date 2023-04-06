const app = new $$("#app", false);

const yearLayer = new $$("div");
yearLayer.class("layer-Year");
yearLayer.text(new Date().getFullYear());
app.add(yearLayer.element);

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

const monthInnerLayer = new $$("div");
monthInnerLayer.class("month-inner-layer");
monthInner.map((val, idx) => {
  const inner = new $$("div");
  inner.class(`inner-${val}`);
  inner.class(`inner`);
  inner.text(val.toLowerCase());
  if (idx === 0) {
    inner.class(`high-light`);
    inner.text(val.toLocaleUpperCase());
  }
  inner.transform(positionMonth(75, 12, idx));
  monthInnerLayer.add(inner.element);
});
app.add(monthInnerLayer.element);

const monthCenterLayer = new $$("div");
monthCenterLayer.class("month-center-layer");
monthCenter.map((val, idx) => {
  const center = new $$("div");
  center.class(`center-${val}`);
  center.class(`center`);
  center.text(val.toLowerCase());
  if (idx === 0) {
    center.class(`high-light`);
    center.text(val.toUpperCase());
  }
  center.transform(positionMonth(95, 12, idx));
  monthCenterLayer.add(center.element);
});
app.add(monthCenterLayer.element);

const monthOuterLayer = new $$("div");
monthOuterLayer.class("month-outer-layer");
monthOuter.map((val, idx) => {
  const outer = new $$("div");
  outer.class(`outer-${val}`);
  outer.class(`outer`);
  outer.text(val.toLowerCase());
  if (idx === 0) {
    outer.class(`high-light`);
    outer.text(val.toUpperCase());
  }
  outer.transform(positionMonth(115, 12, idx));
  monthOuterLayer.add(outer.element);
});
app.add(monthOuterLayer.element);

const layerRing = new $$("div");
layerRing.class("layer-ring");
const ringArr = Array.from({ length: 6 }, (_, idx) => idx + 1);
ringArr.map((val) => {
  const deco = new $$("div");
  deco.class(`deco-${val}`);
  deco.class(`deco`);
  deco.transform(positionRing(141, 6, val));
  let i = 0;
  setInterval(() => {
    deco.transform(positionRing(141, 6, val + i));
    i++;
  }, 60000);
  layerRing.add(deco.element);
});
app.add(layerRing.element);

const layerSecondInner = new $$("div");
layerSecondInner.class("layer-second-inner");
const secondArr = Array.from({ length: 60 }, (_, idx) => idx + 1);
secondArr.map((val) => {
  const scale = new $$("div");
  scale.class(`scale-${val}`);
  scale.class(`scale`);
  scale.transform(positionSecond(170, 60, val));
  let i = 0;
  setInterval(() => {
    scale.transform(positionSecond(170, 60, val + i));
    i--;
  }, 1000);

  layerSecondInner.add(scale.element);
});
app.add(layerSecondInner.element);

const layerSecond = new $$("div");
layerSecond.class("layer-second");
secondArr.map((val) => {
  const scale = new $$("div");
  scale.class(`scale-${val}`);
  scale.class(`scale`);
  scale.transform(positionSecond(190, 60, val, false));
  let i = 0;
  setInterval(() => {
    scale.transform(positionSecond(190, 60, val + i, false));
    i++;
  }, 1000);

  layerSecond.add(scale.element);
});
app.add(layerSecond.element);

const layerWave = new $$("div");
layerWave.class("layer-wave");
app.add(layerWave.element);

const layerNums = new $$("div");
layerNums.class("layer-nums");
const numsArr = Array.from({ length: 12 }, (_, idx) => idx + 1);
const hour = new Date().getHours();
numsArr.map((val) => {
  const num = new $$("div");
  num.class(`num-${val}`);
  num.class(`num`);
  num.transform(positionNum(250, 12, val));
  if (val % 12 === hour % 12) {
    num.class(`high-light-num`);
  }
  num.text(toRoman(val));
  layerNums.add(num.element);
});
const min = new $$("div");
min.class(`num`);
min.class(`high-light-num`);
min.text(new Date().getMinutes());
min.transform(positionNum(275, 12, hour % 12));
layerNums.add(min.element);

app.add(layerNums.element);

let trans = false;
const transform3D = () => {
  if (trans) {
    yearLayer.transform(layer3D(0));
    monthInnerLayer.transform(layer3D(0));
    monthCenterLayer.transform(layer3D(0));
    monthOuterLayer.transform(layer3D(0));
    layerRing.transform(layer3D(0));
    layerSecondInner.transform(layer3D(0));
    layerSecond.transform(layer3D(0));
    layerWave.transform(layer3D(0));
    layerNums.transform(layer3D(0));
    const timer = setTimeout(() => {
      yearLayer.transform(``);
      monthInnerLayer.transform(``);
      monthCenterLayer.transform(``);
      monthOuterLayer.transform(``);
      layerRing.transform(``);
      layerSecondInner.transform(``);
      layerSecond.transform(``);
      layerWave.transform(``);
      layerNums.transform(``);
      trans = false;
      clearTimeout(timer);
    }, 500);
  } else {
    yearLayer.transform(layer3D(0));
    monthInnerLayer.transform(layer3D(0));
    monthCenterLayer.transform(layer3D(0));
    monthOuterLayer.transform(layer3D(0));
    layerRing.transform(layer3D(0));
    layerSecondInner.transform(layer3D(0));
    layerSecond.transform(layer3D(0));
    layerWave.transform(layer3D(0));
    layerNums.transform(layer3D(0));
    const timer = setTimeout(() => {
      yearLayer.transform(layer3D(-80));
      monthInnerLayer.transform(layer3D(-60));
      monthCenterLayer.transform(layer3D(-40));
      monthOuterLayer.transform(layer3D(-20));
      layerSecondInner.transform(layer3D(30));
      layerSecond.transform(layer3D(60));
      layerWave.transform(layer3D(80));
      layerNums.transform(layer3D(120));
      trans = true;
      clearTimeout(timer);
    }, 500);
  }
};
//layerNums.element.addEventListener("click", transform3D);
const els = [
  yearLayer,
  monthInnerLayer,
  monthCenterLayer,
  monthOuterLayer,
  layerRing,
  layerSecondInner,
  layerSecond,
  layerWave,
  layerNums,
];
const va = [-80, -60, -40, -20, 0, 15, 30, 60, 80];
window.addEventListener("mousemove", (e) => {
  let x = e.x - window.innerWidth / 2,
    y = e.y - window.innerHeight / 2;
  console.log({ x, y });
  els.map((e, i) => {
    e.transform(layer3D(va[i], x / 30, y / 30));
  });
});
