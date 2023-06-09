const toRoman = (num) => {
  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join("");
};
const dToR = (d) => (Math.PI / 180) * d;
const delay = (callback, delay = 10) => {
  const timer = setTimeout(() => {
    callback();
    clearTimeout(timer);
  }, delay);
};
const reCall = (callback, freq = 10) => {
  const timer = setInterval(() => {
    callback(timer);
  }, freq);
  return timer;
};
const promise = (callback, time, type = "reCall") => {
  let timerType = (type = "reCall" ? reCall : delay);
  return new Promise((resolve) => {
    timerType(callback, time);
    resolve();
  });
};
export { toRoman, dToR, delay, reCall, promise };
