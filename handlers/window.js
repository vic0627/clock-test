import CLOCK from "../modules/main.js";
const { layer3D } = CLOCK;
const mouseMoveHandler = (e, canMove, layers, depth) => {
  if (!canMove) return;
  const ww = window.innerWidth / 2;
  const wh = window.innerHeight / 2;
  const x = e.x - ww;
  const y = e.y - wh;
  const dx = ww * Math.sin(x / ww);
  const dy = wh * Math.sin(y / wh);
  layers.map((e, i) => {
    e.transform(layer3D(depth[i], dx, dy));
  });
};
export { mouseMoveHandler };
