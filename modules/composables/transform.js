import { dToR } from "./logic.js";
const layer3D = (r, mouseX = 0, mouseY = 0, rotateZ = 0) => {
  const rX = (mouseX / window.innerWidth) * 2;
  const rY = -((mouseY / window.innerHeight) * 2);
  const theta = dToR(rX * 60);
  const phi = dToR(rY * 60);
  const x = r * Math.cos(phi) * Math.sin(theta);
  const y = () => {
    const temp = r * Math.sin(phi) * Math.sin(theta);
    if (rX > 0) {
      return -temp;
    } else {
      return temp;
    }
  };
  const z = r * Math.cos(theta);
  return `perspective(500px) rotateX(${rY * 60}deg) rotateY(${
    rX * 60
  }deg) rotateZ(${rotateZ}deg) translate3d(${x}px, ${y()}px, ${z}px)`;
};
const position = ({ radius, division, order, skew = 0, rotate = true, rotateFix = 0 , scale = 0}) => {
  const rad = (2 * Math.PI) / division;
  const deg = 360 / division;
  const x = radius * Math.cos(rad * order);
  const y = radius * Math.sin(rad * order);
  let transform = `translateX(${x}px) translateY(${y}px)`;
  if (rotate) {
    const r = order * deg + rotateFix;
    transform += ` rotate(${r}deg)`;
  }
  if (scale) {
    transform += ` scale(${scale})`;
  }
  if (skew) {
    transform += ` skewY(${skew}deg)`;
  }
  return transform;
};
export {position, layer3D}