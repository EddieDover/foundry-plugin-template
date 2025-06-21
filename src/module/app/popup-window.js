/* eslint-disable no-undef */
// @ts-ignore
const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;
import { addOneOrTwo } from "./core";

// @ts-ignore
export class MyPopupWindow extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    tag: "form",
    form: {
      handler: MyPopupWindow.formHandler,
    },
    window: {
      title: "My Popup Window",
      id: "my-popup-window",
      width: "auto",
      height: "auto",
      zIndex: 1000,
    },
    actions: {
      onSubmit: MyPopupWindow.doSubmit,
      onReset: MyPopupWindow.doReset,
    },
  };

  static PARTS = {
    form: {
      template: "modules/your-module-name/templates/popup-window.hbs",
    },
  };

  constructor(overrides) {
    super();
    this.overrides = overrides || {};
  }

  _prepareContext(options) {
    return {
      // @ts-ignore
      myoption: game.settings.get("your-module-name", "yourOptionName"),
      mynumber: addOneOrTwo(1),
      overrides: this.overrides,
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
  }

  static doSubmit() {
    // @ts-ignore
    const closefunc = this.overrides?.onexit;
    if (closefunc) {
      closefunc();
    }
    // @ts-ignore
    this.close();
  }

  static doReset() {
    // @ts-ignore
    this.refresh();
  }

  static async formHandler(event, form, formData) {
    event.preventDefault();
    event.stopPropagation();

    // Handle form submission logic here
    // For example, you can process the formData and update the application state
    // console.log("Form submitted with data:", formData);

    // Optionally, you can close the form after submission
    // this.close();
  }
}
