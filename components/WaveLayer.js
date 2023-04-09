import CLOCK from "../modules/main.js";
const { $$, position, reCall, app, digiNumUnit, digiNumGroupRun } = CLOCK;

const WaveLayer = () => {
  const layerWave = new $$("div", { class: "layer-wave" }).addTo(app);
  return { layerWave };
};
export default WaveLayer();
