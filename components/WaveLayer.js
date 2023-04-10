import CLOCK from "../modules/main.js";
const { $$ } = CLOCK;
const depth = 80;
const WaveLayer = () => {
  const layerWave = new $$("div", { class: "layer-wave" });
  return { layerWave, depth };
};
export default WaveLayer();
