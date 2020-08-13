import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = (props) => {
  const { setSearchResults } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  };
  return (
    <>
      <form className="search-form " onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          data-testid="search-test"
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

Search.prototype = {};

export default Search;
