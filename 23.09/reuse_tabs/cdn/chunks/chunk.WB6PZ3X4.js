import {
  details_styles_default
} from "./chunk.67HE6XBT.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.OAQT3AUQ.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
  stopAnimations
} from "./chunk.65AZ2BGN.js";
import {
  LocalizeController
} from "./chunk.LZA5Z3YQ.js";
import {
  o
} from "./chunk.F3GQIC3Z.js";
import {
  SlIcon
} from "./chunk.HAUXDFZJ.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
import {
  ShoelaceElement,
  e,
  i
} from "./chunk.OEOITZKB.js";
import {
  x
} from "./chunk.CYORH2MW.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/details/details.component.ts
var SlDetails = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.open = false;
    this.disabled = false;
  }
  firstUpdated() {
    this.body.style.height = this.open ? "auto" : "0";
    if (this.open) {
      this.details.open = true;
    }
    this.detailsObserver = new MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName === "open") {
          if (this.details.open) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    });
    this.detailsObserver.observe(this.details, { attributes: true });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.detailsObserver.disconnect();
  }
  handleSummaryClick(event) {
    event.preventDefault();
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      this.details.open = true;
      const slShow = this.emit("sl-show", { cancelable: true });
      if (slShow.defaultPrevented) {
        this.open = false;
        this.details.open = false;
        return;
      }
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "details.show", { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      this.emit("sl-after-show");
    } else {
      const slHide = this.emit("sl-hide", { cancelable: true });
      if (slHide.defaultPrevented) {
        this.details.open = true;
        this.open = true;
        return;
      }
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "details.hide", { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      this.details.open = false;
      this.emit("sl-after-hide");
    }
  }
  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    return x`
      <details
        part="base"
        class=${o({
      details: true,
      "details--open": this.open,
      "details--disabled": this.disabled,
      "details--rtl": isRtl
    })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
};
SlDetails.styles = details_styles_default;
SlDetails.dependencies = {
  "sl-icon": SlIcon
};
__decorateClass([
  i(".details")
], SlDetails.prototype, "details", 2);
__decorateClass([
  i(".details__header")
], SlDetails.prototype, "header", 2);
__decorateClass([
  i(".details__body")
], SlDetails.prototype, "body", 2);
__decorateClass([
  i(".details__expand-icon-slot")
], SlDetails.prototype, "expandIconSlot", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlDetails.prototype, "open", 2);
__decorateClass([
  e()
], SlDetails.prototype, "summary", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlDetails.prototype, "disabled", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDetails.prototype, "handleOpenChange", 1);
setDefaultAnimation("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
setDefaultAnimation("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});

export {
  SlDetails
};
