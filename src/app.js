import React, { useState, useEffect } from "react";
import allQuotes from "./allQuotes";
import "./style.css";

const Quotes = ({ quote, song, album, handleClick }) => {
  return (
    <div className="card">
      <div id="text">
        <p>{quote}</p>
      </div>
      <div id="song">
        <p>{song}</p>
      </div>
      <div id="album">
        <p>{album}</p>
      </div>

      <div className="icon-box">
        <i className="fa-brands fa-twitter fa-bounce fa-sm"></i>
        <i className="fa-brands fa-tumblr fa-bounce fa-sm"></i>
      </div>
      <footer>
        <p>Made with ❤️ by Candy</p>
      </footer>
    </div>
  );
};

const App = () => {
  const [quote, setQuote] = useState("");
  const [song, setSong] = useState("");
  const [album, SetAlbum] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let randomNum = Math.floor(Math.random() * allQuotes.length);
    const randomQuote = allQuotes[randomNum];

    setQuote(randomQuote.quote);
    setSong(randomQuote.song);
    SetAlbum(randomQuote.album);
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="content">
      <div className="card">
        <h2>Random quote</h2>
        <p>Do you want a random quote?</p>
        <button onClick={handleClick} id="new-quote">
          New Quote
        </button>
      </div>
      <div id="quote">
        <Quotes quote={quote} song={song} album={album} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
