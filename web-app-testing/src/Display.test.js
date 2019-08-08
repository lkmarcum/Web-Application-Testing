import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
// import "jest-dom/extend-expect";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });

  it("displays the strikes", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("strikes").textContent).toBe("0");
  });
});
