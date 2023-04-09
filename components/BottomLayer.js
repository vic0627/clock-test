import CLOCK from "../modules/main.js";

const { $$, reCall } = CLOCK;

const BottomLayer = () => {
  const bottomLayer = new $$("div", { class: "layer-Bottom" }).addTo(CLOCK.app);

  reCall((timer) => {
    if (bottomLayer) {
      bottomLayer.class("layer-Bottom-mount");
      clearInterval(timer);
    }
  });
  return { bottomLayer };
};
export default BottomLayer();
