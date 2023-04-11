import CLOCK from "../modules/main.js";
const { $$, app } = CLOCK;

const mouseFollower = new $$("div", { class: "mouse-follower" }).addTo(app);

const mouseText = new $$("div", { class: "mouse-inner" }).addTo(mouseFollower);
const mouseWaveA = new $$("div", { class: "mouse-wave" }).addTo(mouseFollower);
const mouseWaveB = new $$("div", { class: "mouse-wave" }).addTo(mouseFollower);

const MouseFollower = {
  mouseFollower,
};

export default MouseFollower;
