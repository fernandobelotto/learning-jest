import { describe, jest, test, expect } from "@jest/globals";
import { sumAndMultiply } from "./multiply";
import { sum } from "./sum";

jest.mock("./sum.ts");

describe("multiply module", () => {
  test("multiplies 2 * 2 to equal 4", () => {
    (sum as jest.Mock).mockReturnValue(4);

    const result = sumAndMultiply(2, 2);

    expect(sum).toBeCalledTimes(2);

    expect(result).toBe(16);
  });
});
