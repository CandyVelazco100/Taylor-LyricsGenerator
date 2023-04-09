import React, { useState, useEffect } from "react";
import allQuotes from "./allQuotes";
import "./styles/style.css";

const Quotes = ({ quote, song, album, handleClick }) => {
  return (
    <div className="quote-box" style={{ animation: "blink 2s ease" }}>
      <div id="text" style={{ animation: "blink 1.4s ease" }}>
        <p>{quote}</p>
      </div>
      <div id="song" style={{ animation: "blink 1.4s ease" }}>
        <p>
          {"- "}
          {song}
        </p>
      </div>
      <div id="album" style={{ animation: "blink 1.4s ease" }}>
        <p>{album}</p>
      </div>

      <div className="icon-box" style={{ animation: "blink 1.4s ease" }}>
        <div className="social-media">
          <a
            href={`https:/twitter.com/intent/tweet?text=${quote}`}
            target="_blank"
            reel="noopener noreferrer"
            id="twet-quote"
          >
            <i className="fa-brands fa-twitter"></i>{" "}
          </a>
          <a
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            target="_blank"
            rel="noopener noreferrer"
            id="tumblr-quote"
          >
            <i className="fa-brands fa-tumblr"></i>{" "}
          </a>
        </div>

        <button onClick={handleClick} id="new-quote">
          {" "}
          New Quote{" "}
        </button>
      </div>
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
        <h2>Taylor Swift Random Lyrics Generator</h2>
        <p>Click the button and get a random quote</p>
      </div>
      <Quotes
        quote={quote}
        song={song}
        album={album}
        handleClick={handleClick}
      />

      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="smiling face with heart-eyes">
            ❤️
          </span>{" "}
          by Candy
        </p>
      </footer>
    </div>
  );
};

export default App;
