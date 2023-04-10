import CLOCK from "../modules/main.js";

const { $$, date, month, position } = CLOCK;

const monthInner = month.map((val) => [...val][0]);

const depth = -80;

const monthInnerLayer = new $$("div", { class: "month-inner-layer" });

const mInnerGroup = monthInner.map((val, idx) => {
  const inner = new $$("div", { class: `inner` }).text(val.toLowerCase());
  inner.transform(
    position({
      radius: 75,
      division: 12,
      order: idx - date.getMonth(),
      rotate: false,
    })
  );
  monthInnerLayer.add(inner);
  return inner;
});

const MonthInnerLayer = () => {
  return {
    monthInnerLayer,
    mInnerGroup,
    depth,
  };
};
export default MonthInnerLayer;
