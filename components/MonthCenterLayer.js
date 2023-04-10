import CLOCK from "../modules/main.js";

const { $$, app, month, position } = CLOCK;

const monthCenter = month.map((val) => [...val][1]);

const depth = -60;

const MonthCenterLayer = () => {
  const monthCenterLayer = new $$("div", { class: "month-center-layer" });
  const mCenterGroup = monthCenter.map((val, idx) => {
    const center = new $$("div", { class: `center` }).text(val.toLowerCase());
    center.transform(
      position({
        radius: 95,
        division: 12,
        order: idx,
        rotate: false,
      })
    );
    monthCenterLayer.add(center);
    return center;
  });
  return {
    monthCenterLayer,
    mCenterGroup,
    depth,
  };
};
export default MonthCenterLayer();
