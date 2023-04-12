import { delay } from "../composables/logic.js";

export default class $$ {
  constructor(el = "div", attrs = {}, events = []) {
    this.element;
    this.child = [];
    this.vNode = { el, attrs };
    this.events = events;
    return this;
  }
  log() {
    console.log(this);
    return this;
  }
  setupcallback = null;
  onBeforeMountcallback = null;
  onMountedcallback = null;
  setup(callback = () => {}) {
    this.setupcallback = callback;
    return this;
  }
  onBeforeMount(callback = () => {}) {
    this.onBeforeMountcallback = callback;
    return this;
  }
  onMounted(callback = () => {}) {
    this.onMountedcallback = callback;
    return this;
  }
  mount(parent) {
    const { el, attrs } = this.vNode;
    const isSelector = el.includes("#") || el.includes(".");
    isSelector
      ? (this.element = document.querySelector(el))
      : (this.element = document.createElement(el));
    if (attrs)
      Object.keys(attrs).forEach((key) => {
        this.element.setAttribute(key, attrs[key]);
      });
    if (this.events) {
      this.events.map((e) => {
        this.element.addEventListener(e.type, e.callback);
      });
    }
    if (this.setupcallback) this.setupcallback();
    if (parent instanceof $$) parent.element.appendChild(this.element);
    if (this.child)
      this.child.map((el) => {
        el.mount(this);
      });
    if (this.onBeforeMountcallback) this.onBeforeMountcallback();
    if (this.onMountedcallback) delay(this.onMountedcallback, 10);
    return this;
  }
  add(child) {
    if (child instanceof $$) {
      this.child.push(child);
    } else if (child instanceof Array) {
      child.forEach((el) => {
        this.child.push(el);
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
  class(className, add = true) {
    add
      ? this.element.classList.add(className)
      : this.element.classList.remove(className);
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
