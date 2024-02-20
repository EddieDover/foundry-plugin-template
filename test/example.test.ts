// eslint-disable-next-line no-shadow
import { jest } from "@jest/globals";
import { addOneOrTwo } from "../src/module/app/core";

describe("An example test", () => {
  // eslint-disable-next-line no-undef
  (global as any).game = {
    user: {
      isGM: false,
    },
    settings: {
      get: jest.fn().mockReturnValue(1),
    },
  };

  it("will add one to a number", () => {
    const number = 1;
    let result = addOneOrTwo(number);
    expect(result).toBe(2);
    result = addOneOrTwo(number);
    // eslint-disable-next-line no-undef
    (global as any).game.user.isGM = true;
    result = addOneOrTwo(number);
    expect(result).toBe(3);
  });
});
