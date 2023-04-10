import CLOCK from "../modules/main.js";
const { delay, $$, app } = CLOCK;

const depth = -2000;

const backingArr = Array.from({ length: 48 }, (_, idx) => idx);

const backingLayer = new $$("div", { class: "layer-backing" }).addTo(app);

const blockArr = ["A", "B", "C", "D", "E", "F", "G", "H"];

const blockGroup = blockArr.map((val) => {
  const block = new $$("div", { class: `block-backing-${val}` }).addTo(
    backingLayer
  );
  return block;
});

backingArr.map((val) => {
  const block = new $$("div", {
    class: `block-backing`,
  });
  if (val < 6) {
    block.addTo(blockGroup[0]);
  } else if (val < 12) {
    block.addTo(blockGroup[1]);
  } else if (val < 18) {
    block.addTo(blockGroup[2]);
  } else if (val < 24) {
    block.addTo(blockGroup[3]);
  } else if (val < 30) {
    block.addTo(blockGroup[4]);
  } else if (val < 36) {
    block.addTo(blockGroup[5]);
  } else if (val < 42) {
    block.addTo(blockGroup[6]);
  } else {
    block.addTo(blockGroup[7]);
  }
});
delay(() => {
  backingLayer.class("layer-backing-mount");
}, 100);
const BackingLayer = () => {
  return { backingLayer, depth };
};

export default BackingLayer;
