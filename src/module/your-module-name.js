/* eslint-disable no-undef */
import { MyPopupWindow } from "./app/popup-window";
import { registerSettings } from "./app/settings";

let currentPopupWindow = null;

/**
 * Checks if the current environment is ForgeVTT
 * @returns {boolean} True if the current environment is ForgeVTT
 */
// eslint-disable-next-line no-unused-vars
function isForgeVTT() {
  // @ts-ignore
  if (!(typeof ForgeVTT !== "undefined")) {
    return false;
  }
  // @ts-ignore
  return ForgeVTT.usingTheForge;
}

/**
 *
 */
function toggleMyPopupWindow() {
  if (currentPopupWindow?.rendered) {
    currentPopupWindow.close();
  } else {
    currentPopupWindow = new MyPopupWindow();
    // @ts-ignore
    currentPopupWindow.render(true);
  }
}

// @ts-ignore
Hooks.on("init", () => {
  console.log("Initalizing Your Module Name!");

  registerSettings();
});

// @ts-ignore
Hooks.on("ready", async () => {
  console.log("Your Module Name Is Ready");
  toggleMyPopupWindow();
});
