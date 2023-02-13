import { sum } from "./sum";

export function sumAndMultiply(a, b) {
  return sum(a, b) * sum(a, b);
}
