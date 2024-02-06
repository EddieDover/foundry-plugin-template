/* eslint-disable no-undef */

import { addOneOrTwo } from "./core";

// @ts-ignore
export class MyPopupWindow extends FormApplication {
  constructor(overrides) {
    super();
    this.overrides = overrides || {};
  }

  getData(options) {
    // @ts-ignore
    return mergeObject(super.getData(options), {
      // @ts-ignore
      myoption: game.settings.get("your-module-name", "yourOptionName"),
      mynumber: addOneOrTwo(1),
      overrides: this.overrides,
    });
  }

  static get defaultOptions() {
    // @ts-ignore
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "my-popup-window",
      classes: ["form"],
      title: "My Popup Window",
      // resizable: true,
      template: "modules/your-module-name/templates/popup-window.hbs",
      // @ts-ignore
      width: "auto", // $(window).width() > 960 ? 960 : $(window).width() - 100,
      height: "auto",
    });
  }

  doSubmit() {
    const closefunc = this.overrides?.onexit;
    if (closefunc) {
      closefunc();
    }
    super.close();
  }

  doReset() {
    // @ts-ignore
    this.refresh();
  }

  activateListeners(html) {
    super.activateListeners(html);
    // @ts-ignore
    $('button[name="submit"]', html).click(this.doSubmit.bind(this));
    // @ts-ignore
    $('button[name="reset"]', html).click(this.doReset.bind(this));
  }
}
