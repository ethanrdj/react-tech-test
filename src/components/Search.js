import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <form>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          data-testid="search-test"
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

Search.prototype = {
  setSearchValue: PropTypes.string.isRequired,
};

export default Search;
