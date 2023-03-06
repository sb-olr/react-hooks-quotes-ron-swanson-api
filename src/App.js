import React, { useState, useEffect } from "react";
import "./styles.css";
// import { useState } from "react";

const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

function App() {
  const [quote, setQuote] = useState("Loading...");

  const getData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setQuote(data[0]))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const timerId = setInterval(() => getData(), 4000);
    getData();
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>{quote}</p>
    </div>
  );
}

export default App;
