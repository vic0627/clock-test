import CLOCK from "../modules/main.js";
import { digiNumUnit, digiNumGroupRun } from "./DigiNum.js";

const { $$, date } = CLOCK;

const depth = -110;

const yearLayer = new $$("div", { class: "layer-year" });

const yearNumGroup = [];

for (let i = 0; i < 4; i++) {
  const digiNum = digiNumUnit().addTo(yearLayer);
  yearNumGroup.push(digiNum);
}

digiNumGroupRun(date.getFullYear(), yearNumGroup);

const YearLayer = () => {
  return { yearLayer, yearNumGroup, depth };
};
export default YearLayer;
