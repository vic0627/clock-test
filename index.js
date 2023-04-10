import { EnterUI } from "./components/EnterUI.js";
import BackingLayer from "./components/BackingLayer.js";
import BottomLayer from "./components/BottomLayer.js";
import YearLayer from "./components/YearLayer.js";
import MonthInnerLayer from "./components/MonthInnerLayer.js";
import MonthCenterLayer from "./components/MonthCenterLayer.js";
import MonthOuterLayer from "./components/MonthOuterLayer.js";
import RingLayer from "./components/RingLayer.js";
import SecondInnerLayer from "./components/SecondInnerLayer.js";
import SecondOuterLayer from "./components/SecondOuterLayer.js";
import WaveLayer from "./components/WaveLayer.js";
import HourLayer from "./components/HourLayer.js";
// import { windowCallback } from "./handlers/window.js";

const Layers = {
  BackingLayer,
  BottomLayer,
  YearLayer,
  RingLayer,
  MonthInnerLayer,
  MonthCenterLayer,
  MonthOuterLayer,
  SecondInnerLayer,
  SecondOuterLayer,
  WaveLayer,
  HourLayer,
};

EnterUI(Layers);
// windowCallback(Layers);
