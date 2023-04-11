import CLOCK from "../modules/main.js";
import MenuUI from "../components/MenuUI.js";
import { digiNumGroupRun } from "../components/DigiNum.js";
import { menuPermit, monthRun } from "../components/EnterUI.js";
import YearLayer from "../components/YearLayer.js";
import MonthInnerLayer from "../components/MonthInnerLayer.js";
import MonthCenterLayer from "../components/MonthCenterLayer.js";
import MonthOuterLayer from "../components/MonthOuterLayer.js";
import DateLayer from "../components/DateLayer.js";
const { yearNumGroup } = YearLayer();
const { mInnerGroup } = MonthInnerLayer();
const { mCenterGroup } = MonthCenterLayer();
const { mOuterGroup } = MonthOuterLayer();
const { numGroup, dateText, dateFix, nowDay } = DateLayer();
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
  op ? (month -= 1) : (month += 1);
  if (month === -1) {
    month = 11;
    monthRun(month, monthGroup);
    digiNumGroupRun(yearCal(true), yearNumGroup);
  }
  if (month === 12) {
    month = 0;
    monthRun(month, monthGroup);
    digiNumGroupRun(yearCal(false), yearNumGroup);
  }
  if (currentDate > maxDate()) {
    currentDate = maxDate();
    digiNumGroupRun(currentDate, numGroup);
    dateText.text(dateFix(currentDate).str);
  }
  return month;
};

const averageDate = 30;
const leap = (y) => {
  let leapYear;
  const tempYear = y % 4;
  if (tempYear !== 0) {
    leapYear = false;
  } else if (tempYear % 100 !== 0) {
    leapYear = true;
  } else if (tempYear % 400 === 0) {
    leapYear = true;
  } else {
    leapYear = false;
  }
  return leapYear;
};

let currentDate = nowDay.num;

const maxDate = (n = 0) => {
  const isleapYear = leap(year);
  let maxVal;
  switch (month - n) {
    case 0:
      maxVal = 31;
      break;
    case 1:
      isleapYear ? (maxVal = 29) : (maxVal = 28);
      break;
    case 2:
      maxVal = 31;
      break;
    case 3:
      maxVal = 30;
      break;
    case 4:
      maxVal = 31;
      break;
    case 5:
      maxVal = 30;
      break;
    case 6:
      maxVal = 31;
      break;
    case 7:
      maxVal = 31;
      break;
    case 8:
      maxVal = 30;
      break;
    case 9:
      maxVal = 31;
      break;
    case 10:
      maxVal = 30;
      break;
    case 11:
      maxVal = 31;
      break;
  }
  return maxVal;
};
let canRunD = true;
const dateCal = (op) => {
  op ? (currentDate -= 1) : (currentDate += 1);
  if (currentDate < 1) {
    monthCal(true);
    monthRun(month, monthGroup);
    currentDate = maxDate();
    canRunD = false;
  }
  if (currentDate > maxDate()) {
    monthCal(false);
    monthRun(month, monthGroup);
    currentDate = 1;
    canRunD = false;
  }
  console.log({ month, currentDate });
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
      monthCal(op);
      monthRun(month, monthGroup);
      delay(() => {
        canRun = true;
      }, 500);
      break;
    case 2:
      if (!canRunD) return;
      dateCal(op);
      const { num, str } = dateFix(currentDate);
      digiNumGroupRun(num, numGroup);
      dateText.text(str);
      delay(() => {
        canRunD = true;
      }, 500);
      break;
  }
};

window.addEventListener("wheel", menuType);

export { mouseMove3D };
