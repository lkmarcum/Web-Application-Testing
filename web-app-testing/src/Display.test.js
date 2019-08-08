import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
});
