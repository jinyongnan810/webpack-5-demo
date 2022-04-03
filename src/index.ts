import generateJoke from "./generate-joke";
import "./styles/main.scss";
const laughing = require("./assets/laughing.svg");
const laughImg = document.getElementById("laughImg") as HTMLImageElement;
laughImg.src = laughing;
const nextJokeBtn = document.getElementById("jokeBtn");
nextJokeBtn.addEventListener("click", generateJoke);
generateJoke();
