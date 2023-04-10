import CLOCK from "../modules/main.js";
import MenuUI from "../components/MenuUI.js";
import { digiNumGroupRun } from "../components/DigiNum.js";
import { menuPermit, monthRun } from "../components/EnterUI.js";
import YearLayer from "../components/YearLayer.js";
import MonthInnerLayer from "../components/MonthInnerLayer.js";
import MonthCenterLayer from "../components/MonthCenterLayer.js";
import MonthOuterLayer from "../components/MonthOuterLayer.js";
const { yearNumGroup } = YearLayer();
const { mInnerGroup } = MonthInnerLayer();
const { mCenterGroup } = MonthCenterLayer();
const { mOuterGroup } = MonthOuterLayer();
const monthGroup = [mInnerGroup, mCenterGroup, mOuterGroup];
const { layer3D, date, delay } = CLOCK;

const mouseMove3D = (e, canMove, layers, depth) => {
  if (!canMove) return;
  const ww = window.innerWidth / 2;
  const wh = window.innerHeight / 2;
  const x = e.x - ww;
  const y = e.y - wh;
  const dx = ww * Math.sin(x / ww);
  const dy = wh * Math.sin(y / wh);
  layers.map((e, i) => {
    e.transform(layer3D(depth[i], dx, dy));
  });
};

const yearMax = date.getFullYear();
let year = yearMax;

const yearCal = (op) => {
  const plus = () => {
    if (year < yearMax) year += 1;
  };
  const reduce = () => {
    if (year > 0) year -= 1;
  };
  op ? reduce() : plus();
  return year;
};

const monthNow = date.getMonth();
let month = monthNow;
let canRun = true;
const monthCal = (op) => {
  const plus = () => {
    if (month < 11) {
      month += 1;
    } else {
      month = 0;
    }
  };
  const reduce = () => {
    if (month > 0) {
      month -= 1;
    } else {
      month = 11;
    }
  };
  op ? reduce() : plus();
  return month;
};
const menuType = (e) => {
  if (!menuPermit()) return;
  let op = e.deltaY > 0 ? true : false;
  const { titleId } = MenuUI();
  switch (titleId) {
    case 0:
      digiNumGroupRun(yearCal(op), yearNumGroup);
      break;
    case 1:
      if (!canRun) return;
      canRun = false;
      monthRun(monthCal(op), monthGroup);
      delay(() => {
        canRun = true;
      }, 500);
      break;
  }
};

window.addEventListener("wheel", menuType);

export { mouseMove3D };
