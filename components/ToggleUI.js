import CLOCK from "../modules/main.js";
import { mouseMoveHandler } from "../handlers/window.js";

const { $$, menuOptions, btn, app, reCall, delay, layer3D } = CLOCK;

const toggle = ["PAUSE", "EXPLORE"];

const ToggleUI = (Layers) => {
  const toggleLayer = new $$("div", { class: "layer-toggle" }).addTo(app);

  const toggleModePause = new $$("div", { class: "toggle-mode" })
    .text(toggle[0])
    .addTo(toggleLayer);
  const toggleModeExplore = new $$("div", { class: "toggle-mode" })
    .text(toggle[1])
    .addTo(toggleLayer);

  let canMove = false;
  toggleLayer.on("click", () => {
    canMove ? (canMove = false) : (canMove = true);
    if (canMove) {
      toggleModePause.class("pause");
      toggleModeExplore.class("explore");
      layerArr.map((e, i) => {
        console.log(e)
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
  const layerArr = Layers.map((val) => val["layer"]);
  const depthArr = Layers.map((val) => val["depth"]);
  window.addEventListener("mousemove", (e) =>
    mouseMoveHandler(e, canMove, layerArr, depthArr)
  );
};
export default ToggleUI;
