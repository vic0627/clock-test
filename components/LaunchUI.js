import CLOCK from "../modules/main.js";
import ArticleLayer from "./ArticleLayer.js";
const { $$, testRes, fetchChat, app } = CLOCK;

const launchUI = new $$("div", { class: "ui-launch" }).addTo(app);

const launchBtn = new $$("div", { class: "launch-btn" })
  .text("Launch")
  .addTo(launchUI)
  .on("click",async () => {
    const res = await fetchChat();
    ArticleLayer(res)
  });

const LaunchUI = () => {
  return {
    launchUI,
  };
};
export default LaunchUI;
