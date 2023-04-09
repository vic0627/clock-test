import CLOCK from "../modules/main.js";

const { $$, position, reCall, app } = CLOCK;

const secondArr = Array.from({ length: 60 }, (_, idx) => idx + 1);

const secondOuterTimer = [];

const SecondOuterLayer = () => {
  const secondOuterLayer = new $$("div", { class: "layer-second-outer" }).addTo(
    app
  );

  const secondOuterGroup = secondArr.map((val) => {
    const scale = new $$("div", { class: "scale" })
      .addTo(secondOuterLayer)
      .transform(
        position({ radius: 190, division: 60, order: val, skew: -30 })
      );
    let i = 0;
    secondOuterTimer.push(
      reCall(() => {
        scale.transform(
          position({ radius: 190, division: 60, order: val + i, skew: -30 })
        );
        i++;
      }, 1000)
    );
    return scale;
  });

  return {
    secondOuterLayer,
    secondOuterGroup,
  };
};
export default SecondOuterLayer();
