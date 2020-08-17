import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="nasa-div">
        <p>Search results</p>
        <div className="all-images">
          {results.map((image) => (
            <img
              className="card-image"
              src={image}
              alt="space-images"
              data-testid="img-test"
            ></img>
          ))}
        </div>
      </div>
    );
  }
};

SearchResults.prototype = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
