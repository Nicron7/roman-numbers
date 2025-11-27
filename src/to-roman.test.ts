import { expect, test, describe } from "vitest";
import { toRoman } from "./to-roman";

describe("Convert integer to roman numbers", () => {
  test("Must return a string", () => {
    const result = toRoman(25);
    expect(result).toBeTypeOf("string");
  });
});
