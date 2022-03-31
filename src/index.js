import generateJoke from "./generate-joke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";
const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;
const nextJokeBtn = document.getElementById("jokeBtn");
nextJokeBtn.addEventListener("click", generateJoke);
generateJoke();
