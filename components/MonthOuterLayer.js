import CLOCK from "../modules/main.js";

const { $$, app, month, position } = CLOCK;

const monthOuter = month.map((val) => [...val][2]);

const MonthOuterLayer = () => {
  const monthOuterLayer = new $$("div", { class: "month-outer-layer" }).addTo(
    app
  );
  const mOuterGroup = monthOuter.map((val, idx) => {
    const outer = new $$("div", { class: `center` }).text(val.toLowerCase());
    outer.transform(
      position({
        radius: 115,
        division: 12,
        order: idx,
        rotate: false,
      })
    );
    monthOuterLayer.add(outer);
    return outer;
  });
  return { monthOuterLayer, mOuterGroup };
};
export default MonthOuterLayer();
