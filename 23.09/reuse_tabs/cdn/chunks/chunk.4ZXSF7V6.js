import {
  SlButton
} from "./chunk.SIRID5O6.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
import "@lit-labs/react";
var tagName = "sl-button";
SlButton.define("sl-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: SlButton,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlButton"
});
var button_default = reactWrapper;

export {
  button_default
};
