import React from "react";
import Display from "./Display";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { cyanBright } from "ansi-colors";
// import "jest-dom/extend-expect";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });

  it("displays the strikes", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("strikes").textContent).toBe("0");
  });

  describe("button function calls in <Dashboard />", () => {
    it("increments the strike display correctly when strike button is clicked", () => {
      const comp = render(<Display />);
      const strikeButton = comp.getByTestId("strike-button");
      fireEvent.click(strikeButton);
      expect(comp.getByTestId("strikes").textContent).toBe("1");
      fireEvent.click(strikeButton);
      expect(comp.getByTestId("strikes").textContent).toBe("2");
      fireEvent.click(strikeButton);
      expect(comp.getByTestId("strikes").textContent).toBe("0");
    });

    it("increments the ball display correctly when ball button is clicked", () => {
      const comp = render(<Display />);
      const ballButton = comp.getByTestId("ball-button");
      fireEvent.click(ballButton);
      expect(comp.getByTestId("balls").textContent).toBe("1");
      fireEvent.click(ballButton);
      expect(comp.getByTestId("balls").textContent).toBe("2");
      fireEvent.click(ballButton);
      expect(comp.getByTestId("balls").textContent).toBe("3");
      fireEvent.click(ballButton);
      expect(comp.getByTestId("balls").textContent).toBe("0");
    });

    it("increments the strike display correctly when foul ball button is clicked", () => {
      const comp = render(<Display />);
      const foulButton = comp.getByTestId("foul-button");
      fireEvent.click(foulButton);
      expect(comp.getByTestId("strikes").textContent).toBe("1");
      fireEvent.click(foulButton);
      expect(comp.getByTestId("strikes").textContent).toBe("2");
      fireEvent.click(foulButton);
      expect(comp.getByTestId("strikes").textContent).toBe("2");
      fireEvent.click(foulButton);
      expect(comp.getByTestId("strikes").textContent).toBe("2");
    });
  });
});
