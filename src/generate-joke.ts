import axios from "axios";
const generateJoke = async (): Promise<void> => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  const jokeEl = document.getElementById("joke");
  jokeEl.innerHTML = res.data.joke;
};

export default generateJoke;
