import { reCall } from "../composables/logic.js";

export default class $$ {
  constructor(el = "div", attrs = {}) {
    const isSelector = el.includes("#") || el.includes(".");
    isSelector
      ? (this.element = document.querySelector(el))
      : (this.element = document.createElement(el));
    Object.keys(attrs).forEach((key) => {
      this.element.setAttribute(key, attrs[key]);
    });
    this.events = [];
  }
  log() {
    console.log(this);
    return this;
  }
  class(className, add = true) {
    add
      ? this.element.classList.add(className)
      : this.element.classList.remove(className);
    return this;
  }
  add(child) {
    if (child instanceof $$) {
      this.element.appendChild(child.element);
    } else if (child instanceof Array) {
      child.forEach((el) => {
        this.element.appendChild(el.element);
      });
    } else {
      throw new Error("低能嗎?");
    }
    return this;
  }
  addTo(parent) {
    if (parent instanceof $$) {
      parent.add(this);
    } else {
      throw new Error("低能嗎?");
    }
    return this;
  }
  remove(child) {
    child ? this.element.removeChild(child) : this.element.remove();
    return this;
  }
  attr(attrs = {}) {
    Object.keys(attrs).forEach((key) => {
      this.element.setAttribute(key, attrs[key]);
    });
    return this;
  }
  text(para) {
    this.element.innerText = para;
    return this;
  }
  html(para) {
    this.element.innerHTML = para;
    return this;
  }
  style(attr, value) {
    this.element.style[attr] = value;
    return this;
  }
  transform(trans) {
    this.element.style.transform = trans;
    return this;
  }
  on(event, callback) {
    this.element.addEventListener(event, callback);
    this.events.push({ event, callback });
    return this;
  }
  off(event, callback) {
    if (this.events) {
      const cache = this.events;
      cache.map((val) => {
        this.element.removeEventListener(val.event, val.callback);
        this.events.shift();
      });
    } else if (event && callback) {
      this.element.removeEventListener(event, callback);
    } else {
      throw new Error("沒有註冊事件!");
    }
    return this;
  }
}
