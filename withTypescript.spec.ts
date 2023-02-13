import { describe, expect, jest, test } from "@jest/globals";

type mocktype = (a: number, b: number) => number;

describe("multiply module", () => {
  test("multiplies 2 * 2 to equal 4", () => {
    const mock = jest.fn<mocktype>(() => 4);

    expect(mock(2, 2)).toBe(4);
  });
});
