`0%{border-radius: 0 0 0 0; transform: skewX(deg) skewY(deg);}`;

const a = [0, 20, 40, 60, 80, 100];
let s = "";

const r = (min = 10, max = 50, nag = false) => {
  let r;
  do {
    if (Math.random < 0.5 && nag) {
      r = Math.random() * min * -10;
    } else {
      r = Math.random() * min * 10;
    }
  } while (r > max || r < min || parseInt(r) === 0);
  return parseInt(r);
};
a.map((e, i) => {
  // const wh = r(15, 25);
  // const WH = `width: ${wh}px; height: ${wh}px; `;
  // const p = `top: calc(50% - ${wh / 2}px); left: calc(50% - ${wh / 2}px); `;
  let rr = "";
  if (e === 0) rr = "rotate: 0deg";
  if (e === 100) rr = "rotate: 360deg";
  s += `${e}%{border-radius: ${r()}% ${r()}% ${r()}% ${r()}%; transform: skewX(${r(
    -20,
    20,
    true
  )}deg) skewY(${r(-20, 20, true)}deg); ${rr}}`;
});
console.log(s);
