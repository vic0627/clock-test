import CLOCK from "../modules/main.js";
const { $$, position, reCall, app } = CLOCK;

const secondArr = Array.from({ length: 60 }, (_, idx) => idx + 1);

const secondInnerTimer = [];

const depth = 30;

const SecondInnerLayer = () => {
  const secondInnerLayer = new $$("div", { class: "layer-second-inner" });

  const secondInnerGroup = secondArr.map((val) => {
    const scale = new $$("div", { class: "scale" })
      .addTo(secondInnerLayer)
      .transform(position({ radius: 170, division: 60, order: val, skew: 30 }));
    const secondInnerTimerTrigger = () => {
      let i = 0;
      return reCall(() => {
        scale.transform(
          position({ radius: 170, division: 60, order: val + i, skew: 30 })
        );
        i--;
      }, 1000);
    };
    secondInnerTimer.push(secondInnerTimerTrigger);
    return scale;
  });
  return {
    secondInnerLayer,
    secondInnerGroup,
    secondInnerTimer,
    depth,
  };
};
export default SecondInnerLayer();
