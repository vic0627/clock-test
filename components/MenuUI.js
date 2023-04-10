import CLOCK from "../modules/main.js";
const { $$, menuOptions, btn, app, reCall, delay } = CLOCK;

const delayFactor = 0.07;

const MenuUI = () => {
  const menuLayer = new $$("div", { class: "layer-menu" });

  const menuOption = new $$("div", { class: "menu-option" }).addTo(menuLayer);

  let preOpts,
    canClick = true;
  const createMenuTitle = (n = 0) => {
    if (!canClick) return;
    canClick = false;
    if (preOpts) {
      preOpts.forEach((el, idx) => {
        el.style("transition-delay", `${idx * delayFactor}s`).class(
          "char-in",
          false
        );
      });
      delay(() => {
        preOpts.forEach((el) => {
          el.remove();
        });
        preOpts = [...menuOptions[n]].map((char, idx) => {
          const menuOptionChar = new $$("div", {
            class: "menu-option-char char-preIn",
          })
            .text(char)
            .addTo(menuOption);
          return menuOptionChar;
        });
        delay(() => {
          if (preOpts) {
            preOpts.forEach((el, idx) => {
              el.style("transition-delay", `${idx * delayFactor}s`)
                .class("char-in")
                .class("char-preIn", false);
            });
            canClick = true;
          }
        }, 100);
      }, 300);
    }
  };
  preOpts = [...menuOptions[0]].map((char, idx) => {
    const menuOptionChar = new $$("div", {
      class: "menu-option-char char-preIn",
    })
      .text(char)
      .addTo(menuOption);
    return menuOptionChar;
  });
  preOpts.forEach((el, idx) => {
    el.style("transition-delay", `${idx * delayFactor}s`)
      .class("char-in")
      .class("char-preIn", false);
  });

  const menuPreBtn = new $$("div", { class: "menu-pre-btn" })
    .html(btn)
    .addTo(menuLayer);
  const menuNextBtn = new $$("div", { class: "menu-next-btn" })
    .html(btn)
    .addTo(menuLayer);

  let titleId = 0;
  const titleIdCount = (op) => {
    op ? titleId++ : titleId--;
    if (titleId === menuOptions.length) titleId = 0;
    if (titleId === -1) titleId = menuOptions.length - 1;
    console.log(titleId);
    return titleId;
  };
  menuNextBtn.on("click", () => createMenuTitle(titleIdCount(true)));
  menuPreBtn.on("click", () => createMenuTitle(titleIdCount(false)));

  return {
    menuLayer,
  };
};
export default MenuUI();
