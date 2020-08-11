import React, { useState } from "react";
import "../styles/Search.css";

const Search = (props) => {
  return (
    <>
      <input
        className="search-bar"
        type="text"
        data-testid="search-test"
      ></input>
    </>
  );
};

export default Search;
