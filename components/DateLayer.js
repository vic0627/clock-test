import CLOCK from "../modules/main.js";
const { $$, date, dayOptions, digiNumUnit, digiNumGroupRun } = CLOCK;

const dateLayer = new $$("div", { class: "date-layer" });

const dateGroup = new $$("div", { class: "date-group" }).addTo(dateLayer);

const dateFix = (d = 0) => {
  let num = "",
    str = "";
  if (d < 10) {
    num = "0" + d;
  } else {
    num = d.toString();
  }
  const lastNum = (n) => num[num.length - 1].includes(n);
  if (lastNum("1")) {
    str = "st";
  } else if (lastNum("2")) {
    str = "nd";
  } else if (lastNum("3")) {
    str = "rd";
  } else {
    str = "th";
  }
  return { num, str };
};

const nowDay = dateFix(date.getDate());

const dateText = new $$("div", { class: "date-text" })
  .text(nowDay.str)
  .addTo(dateLayer);

const numGroup = [];

for (let i = 0; i < 2; i++) {
  const digiNum = digiNumUnit().addTo(dateGroup);
  numGroup.push(digiNum);
}

digiNumGroupRun(nowDay.num, numGroup);

const DateLayer = () => {
  return {
    dateLayer,
    dateGroup,
    dateText,
    numGroup,
    dateFix,
    nowDay
  };
};
export default DateLayer;
