import CLOCK from "../modules/main.js";

const { $$, date, month, position } = CLOCK;

const monthCenter = month.map((val) => [...val][1]);

const depth = -60;

const monthCenterLayer = new $$("div", { class: "month-center-layer" });

const mCenterGroup = monthCenter.map((val, idx) => {
  const center = new $$("div", { class: `center` }).text(val.toLowerCase());
  center.transform(
    position({
      radius: 95,
      division: 12,
      order: idx - date.getMonth(),
      rotate: false,
    })
  );
  monthCenterLayer.add(center);
  return center;
});

const MonthCenterLayer = () => {
  return {
    monthCenterLayer,
    mCenterGroup,
    depth,
  };
};
export default MonthCenterLayer;
