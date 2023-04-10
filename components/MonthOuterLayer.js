import CLOCK from "../modules/main.js";

const { $$, date, month, position } = CLOCK;

const monthOuter = month.map((val) => [...val][2]);

const depth = -40;

const monthOuterLayer = new $$("div", { class: "month-outer-layer" });

const mOuterGroup = monthOuter.map((val, idx) => {
  const outer = new $$("div", { class: `center` }).text(val.toLowerCase());
  outer.transform(
    position({
      radius: 115,
      division: 12,
      order: idx  - date.getMonth(),
      rotate: false,
    })
  );
  monthOuterLayer.add(outer);
  return outer;
});

const MonthOuterLayer = () => {
  return { monthOuterLayer, mOuterGroup, depth };
};
export default MonthOuterLayer;
