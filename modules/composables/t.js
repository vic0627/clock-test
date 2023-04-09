const cc = (cc = 0) => {
  const str = (percentage, x, y) =>
    `${percentage}% {transform: translateY(${y}px) translateX(${x}px);} `;
  const ran = (n = 1) => Math.random() * n;
  let percentage = 0;
  let finStr = "";
  let temp = 0;
  let switching = true;
  do {
    if (percentage === 0) {
      temp = parseInt(ran(cc));
      finStr += str(percentage, cc, 0);
    } else if (percentage % 2 === 0) {
      let newTemp;
      do {
        if (ran() > 0.1) {
          newTemp = parseInt(temp * 1.618033);
        } else {
          newTemp = parseInt(temp * ran());
        }
      } while (newTemp > 4000 || newTemp < 1000 || newTemp === temp);
      switching
        ? (finStr += str(percentage, newTemp, temp))
        : (finStr += str(percentage, temp, newTemp));
      switching ? (switching = false) : (switching = true);
      temp = newTemp;
    }
    percentage += 1;
  } while (percentage <= 50);
  console.log(finStr);
};
cc(2500);
