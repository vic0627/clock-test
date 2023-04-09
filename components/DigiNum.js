import CLOCK from "../modules/main.js";

const digiNumUnit = () => {
  const digiNum = new CLOCK.$$("div", { class: "digi-num" });
  for (let i = 0; i < 7; i++) {
    const digiNumPart = new CLOCK.$$("div", { class: "digi-num-part" }).addTo(
      digiNum
    );
  }
  return digiNum;
};

// 輸入數字，轉換為 digiNum 的 index 值。
const numRun = (n) => {
  let cache = [];
  switch (n) {
    default:
    case "0":
      cache = [0, 1, 2, 4, 5, 6];
      break;
    case "1":
      cache = [2, 5];
      break;
    case "2":
      cache = [0, 2, 3, 4, 6];
      break;
    case "3":
      cache = [0, 2, 3, 5, 6];
      break;
    case "4":
      cache = [1, 2, 3, 5];
      break;
    case "5":
      cache = [0, 1, 3, 5, 6];
      break;
    case "6":
      cache = [0, 1, 3, 4, 5, 6];
      break;
    case "7":
      cache = [0, 1, 2, 5];
      break;
    case "8":
      cache = [0, 1, 2, 3, 4, 5, 6];
      break;
    case "9":
      cache = [0, 1, 2, 3, 5, 6];
      break;
  }
  return cache;
};

// 依據入年分與 digiNumUnit 陣列，改變 CSS 樣式。
const digiNumGroupRun = (nums, digiNumGroup = []) => {
  const numStr = nums.toString();
  digiNumGroup.map((num, nid) => {
    const partStyleArr = numRun(numStr[nid]);
    num.element.childNodes.forEach((part, pid) => {
      part.style = "";
      if (partStyleArr.includes(pid)) {
        part.style = "background: #E6A23C; box-shadow: 0 0 20px 0 #f8e3c5";
      }
    });
  });
};
export { digiNumUnit, digiNumGroupRun };
