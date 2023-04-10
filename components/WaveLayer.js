import CLOCK from "../modules/main.js";
const { $$ } = CLOCK;

const depth = 80;

const layerWave = new $$("div", { class: "layer-wave" });

const WaveLayer = () => {
  return { layerWave, depth };
};
export default WaveLayer;
