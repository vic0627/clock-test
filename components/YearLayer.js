import CLOCK from "../modules/main.js";
import { digiNumUnit, digiNumGroupRun } from "./DigiNum.js";

const YearLayer = () => {
  const yearLayer = new CLOCK.$$("div", { class: "layer-year" }).addTo(
    CLOCK.app
  );

  const yearNumGroup = [];

  for (let i = 0; i < 4; i++) {
    const digiNum = digiNumUnit().addTo(yearLayer);
    yearNumGroup.push(digiNum);
  }
  digiNumGroupRun(2023, yearNumGroup);
  return { yearLayer, yearNumGroup };
};
export default YearLayer();
