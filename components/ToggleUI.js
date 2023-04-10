import CLOCK from "../modules/main.js";
import { mouseMove3D } from "../handlers/window.js";

const { $$, layer3D } = CLOCK;

const toggle = ["PAUSE", "EXPLORE"];

let canMove = false;

const toggleLayer = new $$("div", { class: "layer-toggle" });

const toggleModePause = new $$("div", { class: "toggle-mode" })
  .text(toggle[0])
  .addTo(toggleLayer);
const toggleModeExplore = new $$("div", { class: "toggle-mode" })
  .text(toggle[1])
  .addTo(toggleLayer);

const ToggleUI = (Layers) => {
  const layerValues = Object.values(Layers);
  const layerArr = layerValues.map((val) => Object.values(val())[0]);
  const depthArr = layerValues.map((val) => val()["depth"]);

  toggleLayer.on("click", () => {
    canMove ? (canMove = false) : (canMove = true);
    if (canMove) {
      toggleModePause.class("pause");
      toggleModeExplore.class("explore");
      layerArr.map((e, i) => {
        e.transform(layer3D(depthArr[i], 0, 0));
      });
    } else {
      layerArr.map((e, i) => {
        e.transform(layer3D(0, 0, 0));
      });
      toggleModePause.class("pause", false);
      toggleModeExplore.class("explore", false);
    }
  });

  window.addEventListener("mousemove", (e) =>
    mouseMove3D(e, canMove, layerArr, depthArr)
  );
  return {
    toggleLayer,
  };
};
export default ToggleUI;
