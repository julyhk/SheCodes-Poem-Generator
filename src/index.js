function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "87eaa30fb4o042at3da0a2f40a3bffb4";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four-line poem in French. Please do not include anything in your response apart from the poem itself and basic HTML formatting including line breaks. Make sure to follow the instructions. After the end of the poem, please include a line break and then 'SheCodes AI' in an HTML strong tag.";
  let prompt = `The user instructions are to generate a French poem about ${instructionsInput.value}.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">⏳</span> Generating a French poem about ${instructionsInput.value}...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
