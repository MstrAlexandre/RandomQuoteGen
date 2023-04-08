import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TwitterIcon from "@mui/icons-material/Twitter";
import Quotes from "./quotes-api";

function App() {
  const [state, setState] = useState({
    quote: "",
    author: "",
  });

  // get new quotes
  function NewQuote() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomIndex];

    setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
    });
  }

  // load quote on first load
  if (state.quote == "") {
    return NewQuote();
  }

  // begin markup
  return (
    <div className="App">
      <h1>Pick a quote, any quote.</h1>

      <div id="quote-box">
        <p id="text" className="text">
          "{state.quote}"
        </p>
        <p id="author" className="text">
          - {state.author}
        </p>

        <Button
          variant="contained"
          endIcon={<FormatQuoteIcon />}
          id="new-quote"
          className="buttons"
          onClick={NewQuote}
        >
          New Quote
        </Button>

        <Button
          variant="contained"
          endIcon={<TwitterIcon />}
          className="buttons"
        >
          <a
            id="tweet-quote"
            target="_blank"
            href="twitter.com/intent/tweet?text={state.quote}{state.author}"
          >
            Tweet Quote
          </a>
        </Button>
      </div>
    </div>
  );
}

export default App;
