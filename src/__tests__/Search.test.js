import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const { asFragment } = render(<Search />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("ensures the component mounts", () => {
    const { getAllByTestId } = render(<Search />);

    expect(getAllByTestId("search-test")).toBeTruthy();
  });
});
