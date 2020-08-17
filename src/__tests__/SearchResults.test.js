import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const { asFragment } = render(<SearchResults results={[]} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders No results text", () => {
    const { getByText } = render(<SearchResults results={[]} />);

    expect(getByText("No results")).toBeInTheDocument();
  });

  it("renders the Search results: text", () => {
    const { getByText } = render(<SearchResults results={["one item"]} />);

    expect(getByText("Search results:")).toBeInTheDocument();
  });

  it("renders the images", () => {
    const { getAllByTestId } = render(
      <SearchResults results={["test results"]} />
    );

    expect(getAllByTestId("img-test")).toBeTruthy();
  });
});
