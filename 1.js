class $new {
  constructor(el) {
    return document.createElement(el);
  }
  log = () => {
    console.log(this);
  };
}
const a = new $new("div");
console.log(a);
