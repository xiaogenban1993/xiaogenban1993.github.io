import {
  SlSwitch
} from "./chunk.IWITRU34.js";

// src/react/switch/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import "@lit-labs/react";
var tagName = "sl-switch";
SlSwitch.define("sl-switch");
var reactWrapper = createComponent({
  tagName,
  elementClass: SlSwitch,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlSwitch"
});
var switch_default = reactWrapper;

export {
  switch_default
};
