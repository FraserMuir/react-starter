import { render } from "@testing-library/react";

import { Counter } from "./counter";

describe("Counter", () => {
  test("should render successfully", () => {
    expect(() => {
      render(<Counter />);
    }).not.toThrow();
  });
});
