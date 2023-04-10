import CLOCK from "../modules/main.js";
import MenuUI from "./MenuUI.js";
import ToggleUI from "./ToggleUI.js";
const { $$, app, reCall, delay, digiNumGroupRun, date } = CLOCK;
const { menuLayer } = MenuUI;

const EnterUI = (Layers) => {
  const { toggleLayer } = ToggleUI(Layers);
  const {
    SecondInnerLayer,
    SecondOuterLayer,
    RingLayer,
    YearLayer,
    WaveLayer,
    MonthInnerLayer,
    MonthCenterLayer,
    MonthOuterLayer,
    HourLayer,
  } = Layers;
  const { secondInnerLayer, secondInnerTimer } = SecondInnerLayer;
  const { secondOuterLayer, secondOuterTimer } = SecondOuterLayer;
  const { ringLayer, dateLayer, decoGroup } = RingLayer;
  const { yearLayer } = YearLayer;
  const { layerWave } = WaveLayer;
  const { monthInnerLayer } = MonthInnerLayer;
  const { monthCenterLayer } = MonthCenterLayer;
  const { monthOuterLayer } = MonthOuterLayer;
  const { layerHour } = HourLayer;

  const enterLayer = new $$("div", { class: "layer-enter" }).addTo(app);

  const enterTitle = new $$("div", { class: "enter-title" })
    .text("The time for action is now.")
    .addTo(enterLayer);

  const enterBtn = new $$("div", { class: "enter-btn" })
    .text("Enter")
    .addTo(enterLayer);

  reCall((timer) => {
    enterTitle.class("enter-title-mount");
    enterBtn.class("enter-btn-mount");
    clearInterval(timer);
  });

  const clickHandler = () => {
    enterTitle.class("enter-title-mount", false);
    enterBtn.class("enter-btn-mount", false).off();
    delay(() => {
      enterLayer.remove();
      app.add([
        secondInnerLayer,
        secondOuterLayer,
        layerWave,
        ringLayer,
        yearLayer,
        monthInnerLayer,
        monthCenterLayer,
        monthOuterLayer,
        layerHour,
      ]);
      reCall((timer) => {
        secondInnerLayer.class("layer-second-inner-mount");
        secondOuterLayer.class("layer-second-outer-mount");
        layerWave.class("layer-wave-mount");
        ringLayer.class("layer-ring-mount");
        decoGroup.forEach((el) => {
          el.class("deco-mount");
        });
        dateLayer.class("date-layer-mount");
        yearLayer.class("layer-year-mount");
        monthInnerLayer.class("month-inner-layer-mount");
        monthCenterLayer.class("month-center-layer-mount");
        monthOuterLayer.class("month-outer-layer-mount");
        layerHour.class("layer-hour-mount");
        delay(() => {
          secondInnerTimer.forEach((func) => {
            func();
          });
          secondOuterTimer.forEach((func) => {
            func();
          });
        }, 3000);
        clearInterval(timer);
      });
    }, 1500);
    delay(() => {
      app.add([menuLayer, toggleLayer]);
      reCall((timer) => {
        if (document.querySelector(".layer-menu")) {
          menuLayer.class("layer-menu-mount");
          toggleLayer.class("layer-toggle-mount");
          clearInterval(timer);
        }
      });
    }, 5500);
  };

  enterBtn.on("click", clickHandler);

  return {
    enterLayer,
  };
};
export default EnterUI;
