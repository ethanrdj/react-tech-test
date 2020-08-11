import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("ensures the component mounts", () => {
    const { getAllByTestId } = render(<App />);

    expect(getAllByTestId("App-test")).toBeTruthy();
    expect(getAllByTestId("image-test")).toBeTruthy();
  });
});
