import CLOCK from "../modules/main.js";

const { $$, reCall, app } = CLOCK;

const depth = -120;

const bottomLayer = new $$("div", { class: "layer-Bottom" });

bottomLayer
  .onMounted(() => {
    bottomLayer.class("layer-Bottom-mount");
  })
  .mount(app);

const BottomLayer = () => {
  return { bottomLayer, depth };
};
export default BottomLayer;
