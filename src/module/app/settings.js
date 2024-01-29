export const registerSettings = () => {
  // @ts-ignore
  game.settings.register("your-module-name", "yourOptionName", {
    //Use these two if config is true (so it shows up in the module settings)
    "name": "your-module-name.settings.your-option-name.name",
    "hint": "your-module-name.settings.your-option-name.hint",

    "scope": "world",
    "config": true, // Determines if it shows in module settings or not
    "default": false, // [],
    "type": Boolean, //Array,
  });
};
