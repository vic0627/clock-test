import CLOCK from "../modules/main.js";
import DateLayer from "./DateLayer.js";
const { $$, app, position } = CLOCK;
const { dateLayer } = DateLayer;
const ringArr = Array.from({ length: 6 }, (_, idx) => idx + 1);
const depth = 10;
const RingLayer = () => {
  const ringLayer = new $$("div", { class: "layer-ring" });

  dateLayer.addTo(ringLayer);

  const decoGroup = ringArr.map((val) => {
    const deco = new $$("div", { class: "deco" })
      .transform(
        position({
          radius: 141,
          division: 6,
          order: val,
        })
      )
      .addTo(ringLayer);
    return deco;
  });
  return {
    ringLayer,
    decoGroup,
    depth,
    dateLayer,
  };
};
export default RingLayer();
