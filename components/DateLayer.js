import CLOCK from "../modules/main.js";
const { $$, app, digiNumUnit, digiNumGroupRun } = CLOCK;

const dateLayer = new $$("div", { class: "date-layer" });

const dateGroup = new $$("div", { class: "date-group" }).addTo(dateLayer);

const dateText = new $$("div", { class: "date-text" })
  .text("st")
  .addTo(dateLayer);

const numGroup = [];

for (let i = 0; i < 2; i++) {
  const digiNum = digiNumUnit().addTo(dateGroup);
  numGroup.push(digiNum);
}

digiNumGroupRun("01", numGroup);

const DateLayer = () => {
  return {
    dateLayer,
    dateGroup,
  };
};
export default DateLayer;
