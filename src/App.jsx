import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TwitterIcon from "@mui/icons-material/Twitter";
import Quotes from "./quotes-api";


function App() {
  const [state, setState] = useState({ // set state
    quote: "",
    author: "",
    topic: ""
  });


  // get new quotes
  function NewQuote() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomIndex];
    const topic = randomQuote.topics[0];

    setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
      topic: randomQuote.topics[0]
    });

    // play sound
    /*

    let playlist = [
      {'Inspirational' : './audio/Inspirational.mp3'},
      {'Philosophy' : './audio/Philosophy.mp3'},
      {'Religion' : './audio/Religion.mp3'},
      {'Wisdom' : './audio/Wisdom.mp3'},
      {'People' : './audio/People.mp3'},
      {'Life' : './audio/Life.mp3'},
      {'Love' : './audio/Love.mp3'},
      {'Friends' : './audio/Friends.mp3'},
      {'Faith' : './audio/Faith.mp3'},
      {'Innovation' : './audio/Innovation.mp3'},
      {'Art' : './audio/Art.mp3'},
      {'Achievement' : './audio/Achievement.mp3'},
      {'Business' : './audio/Business.mp3'},
      {'Giving' : './audio/Giving.mp3'},
      {'Advice' : './audio/Advice.mp3'},
      {'Motivational' : './audio/Motivational.mp3'},
      {'Fear' : './audio/Fear.mp3'},
      {'Humor' : './audio/Humor.mp3'}
    ]
    
    function PlaySound(topic){
      switch(topic) {
        case "Achievement":
          playlist.Achievement.play();
          break;
        case "Advice":
          playlist.Advice.play();
          break;
        case "Art":
          playlist.Art.play();
          break;
        case "Business":
          playlist.Business.play();
          break;
        case "Faith":
          playlist.Faith.play();
          break;
        case "Friends":
          playlist.Friends.play();
          break;
        case "Giving":
          playlist.Giving.play();
          break;
        case "Humor":
          playlist.Humor.play();
          break;
        case "Innovation":
          playlist.Innovation.play();
          break;
        case "Inspirational":
          playlist.Inspirational.play();
          break;
        case "Life":
          playlist.Life.play();
          break;
        case "Love":
          playlist.Love.play();
          break;
        case "Motivational":
          playlist.Motivational.play();
          break;
        case "People":
          playlist.People.play();
          break;
        case "Philosophy":
          playlist.Philosophy.play();
          break;
        case "Religion":
          playlist.Religion.play();
          break;
        case "Wisdom":
          playlist.Wisdom.play();
          break;
      }
    }




    // There has to be way to make this more of a topic.play situation
    */
  }

  // load quote on first load
  if (state.quote == "") { 
    return NewQuote();
  }
  


  // begin markup
  return (
    <div className="App">
    { /* <h1>Pick a quote, any quote.</h1> */}
      

      <div id="quote-box">
        <p id="text" className="text">
          "{state.quote}"
        </p>
        <p id="author" className="text">
          - {state.author}
        </p>
        <p id="topic" className="subtext"> {state.topic} </p>

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
            href="http://twitter.com/intent/tweet?text={state.quote} + {state.author}"
            target="_blank"
          >
            Tweet Quote
          </a>
        </Button>
      </div>
    </div>
  );
}

export default App;
