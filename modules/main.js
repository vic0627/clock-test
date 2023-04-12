import $$ from "./$$/$$.js";
import {
  month,
  menuOptions,
  btn,
  date,
  dayOptions,
  testRes,
} from "./composables/objects.js";
import { layer3D, position } from "./composables/transform.js";
import { delay, reCall, toRoman, promise } from "./composables/logic.js";
import { digiNumUnit, digiNumGroupRun } from "../components/DigiNum.js";
import { fetchChat } from "./composables/chat.js";

const app = new $$("#app").mount();


const CLOCK = {
  $$,
  app,
  month,
  menuOptions,
  dayOptions,
  btn,
  date,
  testRes,
  layer3D,
  position,
  delay,
  reCall,
  toRoman,
  promise,
  digiNumUnit,
  digiNumGroupRun,
  fetchChat,
};

export default CLOCK;
