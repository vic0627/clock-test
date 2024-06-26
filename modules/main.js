import $$ from "./$$/$$.js";
import {
  month,
  menuOptions,
  btn,
  date,
  dayOptions,
} from "./composables/objects.js";
import { layer3D, position } from "./composables/transform.js";
import { delay, reCall, toRoman, promise } from "./composables/logic.js";
import { digiNumUnit, digiNumGroupRun } from "../components/DigiNum.js";

const app = new $$("#app", false);

const CLOCK = {
  $$,
  app,
  month,
  menuOptions,
  dayOptions,
  btn,
  date,
  layer3D,
  position,
  delay,
  reCall,
  toRoman,
  promise,
  digiNumUnit,
  digiNumGroupRun,
};

export default CLOCK;
