import CLOCK from "../modules/main.js";

const { $$, app, month, position } = CLOCK;

const monthInner = month.map((val) => [...val][0]);

const MonthInnerLayer = () => {
  const monthInnerLayer = new $$("div", { class: "month-inner-layer" }).addTo(
    app
  );
  const mInnerGroup = monthInner.map((val, idx) => {
    const inner = new $$("div", { class: `inner` }).text(val.toLowerCase());
    inner.transform(
      position({
        radius: 75,
        division: 12,
        order: idx,
        rotate: false,
      })
    );
    monthInnerLayer.add(inner);
    return inner;
  });
  return {
    monthInnerLayer,
    mInnerGroup,
  };
};
export default MonthInnerLayer();
