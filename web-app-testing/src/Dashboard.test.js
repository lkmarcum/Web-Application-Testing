import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });
});
