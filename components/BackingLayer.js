import CLOCK from "../modules/main.js";
const { delay } = CLOCK;

const depth = -2000;

const BackingLayer = () => {
  const backingLayer = new CLOCK.$$("div", { class: "layer-backing" }).addTo(
    CLOCK.app
  );

  const backingArr = Array.from({ length: 48 }, (_, idx) => idx);

  const blockA = new CLOCK.$$("div", { class: "block-backing-A" }).addTo(
    backingLayer
  );
  const blockB = new CLOCK.$$("div", { class: "block-backing-B" }).addTo(
    backingLayer
  );
  const blockC = new CLOCK.$$("div", { class: "block-backing-C" }).addTo(
    backingLayer
  );
  const blockD = new CLOCK.$$("div", { class: "block-backing-D" }).addTo(
    backingLayer
  );
  const blockE = new CLOCK.$$("div", { class: "block-backing-E" }).addTo(
    backingLayer
  );
  const blockF = new CLOCK.$$("div", { class: "block-backing-F" }).addTo(
    backingLayer
  );
  const blockG = new CLOCK.$$("div", { class: "block-backing-G" }).addTo(
    backingLayer
  );
  const blockH = new CLOCK.$$("div", { class: "block-backing-H" }).addTo(
    backingLayer
  );
  backingArr.map((val) => {
    const block = new CLOCK.$$("div", {
      class: `block-backing`,
    });
    if (val < 6) {
      block.addTo(blockA);
    } else if (val < 12) {
      block.addTo(blockB);
    } else if (val < 18) {
      block.addTo(blockC);
    } else if (val < 24) {
      block.addTo(blockD);
    } else if (val < 30) {
      block.addTo(blockE);
    } else if (val < 36) {
      block.addTo(blockF);
    } else if (val < 42) {
      block.addTo(blockG);
    } else {
      block.addTo(blockH);
    }
  });
  delay(() => {
    backingLayer.class("layer-backing-mount");
  }, 100);

  return { backingLayer, depth };
};

export default BackingLayer();
