import CLOCK from "../modules/main.js";

const { $$, position, reCall, app } = CLOCK;

const secondArr = Array.from({ length: 60 }, (_, idx) => idx + 1);

const secondOuterTimer = [];

const depth = 50;

const secondOuterLayer = new $$("div", { class: "layer-second-outer" });

const secondOuterGroup = secondArr.map((val) => {
  const scale = new $$("div", { class: "scale" })
    .addTo(secondOuterLayer)
    .transform(position({ radius: 190, division: 60, order: val, skew: -30 }));
  const secondOuterTimerTrigger = () => {
    let i = 0;
    reCall(() => {
      scale.transform(
        position({ radius: 190, division: 60, order: val + i, skew: -30 })
      );
      i++;
    }, 1000);
  };
  secondOuterTimer.push(secondOuterTimerTrigger);
  return scale;
});

const SecondOuterLayer = () => {
  return {
    secondOuterLayer,
    secondOuterGroup,
    secondOuterTimer,
    depth,
  };
};
export default SecondOuterLayer;
