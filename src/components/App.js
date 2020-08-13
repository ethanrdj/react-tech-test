import React from "react";
import "../styles/App.css";
import Search from "./Search";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState("");
  return (
    <div className="App" data-testid="App-test">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="logo"
        data-testid="image-test"
      ></img>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
