import CLOCK from "../modules/main.js";
const { $$, app, reCall } = CLOCK;

const EnterUI = () => {
  const enterLayer = new $$("div", { class: "layer-enter" }).addTo(app);

  const enterTitle = new $$("div", { class: "enter-title" })
    .text("The time for action is now.")
    .addTo(enterLayer);

  const enterBtn = new $$("div", { class: "enter-btn" })
    .text("Enter")
    .addTo(enterLayer);

  reCall((timer) => {
    console.log(enterTitle);
    if (enterTitle) enterTitle.class("enter-title-mount");
    if (enterBtn) enterBtn.class("enter-btn-mount");
    clearInterval(timer);
  }, 10);
};
export default EnterUI;
