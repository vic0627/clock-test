import {
  toRoman,
  positionNum,
  positionSecond,
  layer3D,
  positionRing,
  positionMonth,
  $$,
  delay,
} from "./logic.js";
import { btn, month, menuOptions } from "./obj.js";

const app = new $$("#app", false);

const backingLayer = new $$("div");
backingLayer.class("layer-backing");
const backingArr = Array.from({ length: 100 }, (_, idx) => idx);
backingArr.map((val) => {
  const block = new $$("div");
  block.class("block-backing");
  backingLayer.add(block.element);
});
app.add(backingLayer.element);
backingLayer.transform(layer3D(-2000, 0, 0));

/* const bottomLayer = new $$("div");
bottomLayer.class("layer-Bottom");
app.add(bottomLayer.element); */


// year
const digiNumUnit = () => {
  const digiNum = new $$("div");
  digiNum.class("digi-num");
  for (let i = 0; i < 7; i++) {
    const digiNumPart = new $$("div");
    digiNumPart.class("digi-num-part");
    digiNum.add(digiNumPart.element);
  }
  return digiNum;
};

const yearLayer = new $$("div");
yearLayer.class("layer-year");
const yearNumGroup = [];
for (let i = 0; i < 4; i++) {
  const digiNum = digiNumUnit();
  yearLayer.add(digiNum.element);
  yearNumGroup.push(digiNum);
}
app.add(yearLayer.element);

const numRun = (n) => {
  let cache = [];
  switch (n) {
    default:
    case "0":
      cache = [0, 1, 2, 4, 5, 6];
      break;
    case "1":
      cache = [2, 5];
      break;
    case "2":
      cache = [0, 2, 3, 4, 6];
      break;
    case "3":
      cache = [0, 2, 3, 5, 6];
      break;
    case "4":
      cache = [1, 2, 3, 5];
      break;
    case "5":
      cache = [0, 1, 3, 5, 6];
      break;
    case "6":
      cache = [0, 1, 3, 4, 5, 6];
      break;
    case "7":
      cache = [0, 1, 2, 5];
      break;
    case "8":
      cache = [0, 1, 2, 3, 4, 5, 6];
      break;
    case "9":
      cache = [0, 1, 2, 3, 5, 6];
      break;
  }
  return cache;
};
const yearNumGroupRun = (year) => {
  const yearStr = year.toString();
  yearNumGroup.map((num, nid) => {
    const partStyleArr = numRun(yearStr[nid]);
    num.element.childNodes.forEach((part, pid) => {
      part.style = "";
      if (partStyleArr.includes(pid)) {
        part.style = "background: #E6A23C; box-shadow: 0 0 20px 0 #f8e3c5";
      }
    });
  });
};
const yearArr = Array.from({ length: 200 }, (_, idx) => idx + 1900);
const inputYear = new $$("select");
const nowYear = new Date().getFullYear();
yearArr.map((val) => {
  const option = new $$("option");
  option.element.value = val;
  option.text(val);
  if (nowYear === val) {
    option.attr("selected", "");
    yearNumGroupRun(nowYear);
  }
  inputYear.add(option.element);
});
app.add(inputYear.element);

inputYear.on("input", (e) => yearNumGroupRun(e.target.value));

// month
let mOrder = 0;
const inputMonth = new $$("select");
month.map((val) => {
  const option = new $$("option");
  option.element.value = val;
  option.text(val);
  inputMonth.add(option.element);
});
inputMonth.on("input", (e) => {
  month.map((val, idx) => {
    if (val === e.target.value) mOrder = idx;
  });
  for (let i = 0; i < 12; i++) {
    const newI = i - mOrder;
    if (newI === 0) {
      mInnerGroup[i].class(`high-light`);
      mInnerGroup[i].text(monthInner[i].toLocaleUpperCase());
      mCenterGroup[i].class(`high-light`);
      mCenterGroup[i].text(monthCenter[i].toLocaleUpperCase());
      mOuterGroup[i].class(`high-light`);
      mOuterGroup[i].text(monthOuter[i].toLocaleUpperCase());
    } else {
      mInnerGroup[i].class(`high-light`, false);
      mInnerGroup[i].text(monthInner[i].toLocaleLowerCase());
      mCenterGroup[i].class(`high-light`, false);
      mCenterGroup[i].text(monthCenter[i].toLocaleLowerCase());
      mOuterGroup[i].class(`high-light`, false);
      mOuterGroup[i].text(monthOuter[i].toLocaleLowerCase());
    }
    mInnerGroup[i].transform(positionMonth(75, 12, i - mOrder));
    mCenterGroup[i].transform(positionMonth(95, 12, i - mOrder));
    mOuterGroup[i].transform(positionMonth(115, 12, i - mOrder));
  }
});
app.add(inputMonth.element);
const m = new Date().getMonth();
const months = month
  .concat(month.slice(0, mOrder))
  .filter((e, i) => i >= mOrder);
const monthCenter = months.map((val) => [...val][1]);
const monthOuter = months.map((val) => [...val][2]);

const monthInnerLayer = new $$("div");
monthInnerLayer.class("month-inner-layer");
const mInnerGroup = monthInner.map((val, idx) => {
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
  return inner;
});
app.add(monthInnerLayer.element);

const monthCenterLayer = new $$("div");
monthCenterLayer.class("month-center-layer");
const mCenterGroup = monthCenter.map((val, idx) => {
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
  return center;
});
app.add(monthCenterLayer.element);

const monthOuterLayer = new $$("div");
monthOuterLayer.class("month-outer-layer");
const mOuterGroup = monthOuter.map((val, idx) => {
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
  return outer;
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
  layerRing.add(deco.element);
});
app.add(layerRing.element);

const layerSecondInner = new $$("div");
layerSecondInner.class("layer-second-inner");
const secondArr = Array.from({ length: 60 }, (_, idx) => idx + 1);
const secondInnerTimer = [];
const secondInnerGroup = secondArr.map((val) => {
  const scale = new $$("div");
  scale.class(`scale-${val}`);
  scale.class(`scale`);
  scale.transform(positionSecond(170, 60, val));
  let i = 0;
  secondInnerTimer.push(
    setInterval(() => {
      scale.transform(positionSecond(170, 60, val + i));
      i--;
    }, 1000)
  );
  layerSecondInner.add(scale.element);
  return scale;
});
app.add(layerSecondInner.element);

const layerSecond = new $$("div");
layerSecond.class("layer-second");
const secondTimer = [];
const secondGroup = secondArr.map((val) => {
  const scale = new $$("div");
  scale.class(`scale-${val}`);
  scale.class(`scale`);
  scale.transform(positionSecond(190, 60, val, false));
  let i = 0;
  secondTimer.push(
    setInterval(() => {
      scale.transform(positionSecond(190, 60, val + i, false));
      i++;
    }, 1000)
  );
  layerSecond.add(scale.element);
  return scale;
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

const menuLayer = new $$();
menuLayer.class("layer-menu");
const menuOption = new $$();
menuOption.class("menu-option");
let preOpts;
const createMenuTitle = (n = 0) => {
  if (preOpts) {
    preOpts.forEach((el, idx) => {
      el.style("transition-delay", `${idx * 0.1}s`);
      el.transform(`perspective(500px) translateY(-48px)`);
    });
    delay(() => {
      preOpts.forEach((el) => {
        menuOption.remove(el.element);
      });
      preOpts = [...menuOptions[n]].map((char, idx) => {
        const menuOptionChar = new $$();
        menuOptionChar.class("menu-option-char");
        menuOptionChar.text(char);
        menuOption.add(menuOptionChar.element);
        menuOptionChar.transform(`perspective(500px) translateY(48px)`);
        return menuOptionChar;
      });
      const timer = setInterval(() => {
        if (preOpts) {
          preOpts.forEach((el, idx) => {
            el.style("transition-delay", `${idx * 0.1}s`);
            el.transform(`perspective(500px) translateY(0px)`);
          });
          clearInterval(timer);
        }
      }, 10);
    }, 500);
  }
};
preOpts = [...menuOptions[0]].map((char, idx) => {
  const menuOptionChar = new $$();
  menuOptionChar.class("menu-option-char");
  menuOptionChar.text(char);
  menuOption.add(menuOptionChar.element);
  menuOptionChar.transform(`perspective(500px) translateY(48px)`);
  return menuOptionChar;
});
preOpts.forEach((el, idx) => {
  el.style("transition-delay", `${idx * 0.1}s`);
  el.transform(`perspective(500px) translateY(0px)`);
});
menuLayer.add(menuOption.element);
const menuPreBtn = new $$();
menuPreBtn.class("menu-pre-btn");
menuPreBtn.html(btn);
menuLayer.add(menuPreBtn.element);
const menuNextBtn = new $$();
menuNextBtn.class("menu-next-btn");
menuNextBtn.html(btn);
menuLayer.add(menuNextBtn.element);
app.add(menuLayer.element);
let titleId = 0;
menuNextBtn.on("click", () => createMenuTitle(++titleId));
menuPreBtn.on("click", () => createMenuTitle(--titleId));

const toggle = ["PAUSE", "EXPLORE"];
const toggleLayer = new $$();
toggleLayer.class("layer-toggle");
const toggleModePause = new $$();
toggleModePause.class("toggle-mode");
toggleModePause.text(toggle[0]);
const toggleModeExplore = new $$();
toggleModeExplore.class("toggle-mode");
toggleModeExplore.text(toggle[1]);
toggleLayer.add(toggleModePause.element);
toggleLayer.add(toggleModeExplore.element);
app.add(toggleLayer.element);

toggleLayer.on("click", () => {
  canMove ? (canMove = false) : (canMove = true);
  if (canMove) {
    toggleModePause.class("pause");
    toggleModeExplore.class("explore");
  } else {
    els.map((e, i) => {
      e.transform(layer3D(va[i], 0, 0));
    });
    toggleModePause.class("pause", false);
    toggleModeExplore.class("explore", false);
  }
});

//======= EVENT =======//
const els = [
  backingLayer,
  bottomLayer,
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
const va = [-2000, -120, -110, -80, -60, -40, 10, 30, 50, 80, 100];
let canMove = false;
const mouseMoveHandler = (e) => {
  if (!canMove) return;
  const ww = window.innerWidth / 2;
  const wh = window.innerHeight / 2;
  const x = e.x - ww;
  const y = e.y - wh;
  const dx = ww * Math.sin(x / ww);
  const dy = wh * Math.sin(y / wh);
  els.map((e, i) => {
    e.transform(layer3D(va[i], dx, dy));
  });
};
window.addEventListener("mousemove", mouseMoveHandler);

document.addEventListener("visibilitychange", (e) => {
  if (document.hidden) {
    secondInnerTimer.forEach((val) => clearInterval(val));
    secondTimer.forEach((val) => clearInterval(val));
  } else {
    secondInnerGroup.forEach((el, idx) => {
      let i = 0;
      secondInnerTimer.push(
        setInterval(() => {
          el.transform(positionSecond(170, 60, idx + i));
          i--;
        }, 1000)
      );
    });
    secondGroup.forEach((el, idx) => {
      let i = 0;
      secondTimer.push(
        setInterval(() => {
          el.transform(positionSecond(190, 60, idx + i, false));
          i++;
        }, 1000)
      );
    });
  }
});
