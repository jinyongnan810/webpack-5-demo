import * as React from "react";
import * as ReactDOM from "react-dom";
import generateJoke from "./generate-joke";
import "./styles/main.scss";
const laughing = require("./assets/laughing.svg");

const App = () => {
  React.useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="container">
      <img id="laughImg" alt="" src={laughing} />
      <h3>Don't laugh challenge</h3>
      <div id="joke" className="joke"></div>
      <div id="jokeBtn" className="btn" onClick={generateJoke}>
        Next Joke
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
