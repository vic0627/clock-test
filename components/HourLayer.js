import CLOCK from "../modules/main.js";
const { $$, position, toRoman, app, date } = CLOCK;
const numsArr = Array.from({ length: 12 }, (_, idx) => idx + 1);
const hour = date.getHours();
const depth = 100;
const HourLayer = () => {
  const layerHour = new $$("div", { class: "layer-hour" });

  const hourGroup = numsArr.map((val) => {
    const num = new $$("div", { class: "hour-num" })
      .text(toRoman(val))
      .transform(
        position({
          radius: 250,
          division: 12,
          order: val - 3,
          rotateFix: 90,
        })
      )
      .addTo(layerHour);
    // if (val % 12 === hour % 12) {
    //   num.class(`high-light-num`);
    // }
    return num;
  });
  return {
    layerHour,
    hourGroup,
    depth,
  };
};
export default HourLayer();
