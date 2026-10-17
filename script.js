const themeButton = document.getElementById("theme-btn");
const bodyElement = document.body;

themeButton.addEventListener("click", function() {
    bodyElement.classList.toggle("light-mode");

    if (bodyElement.classList.contains("light-mode")) {
        themeButton.innerText = "Switch to Dark Mode 🌙";
    } else {
        themeButton.innerText = "Switch to Light Mode ☀️";
    }
});
// --- JOKE API LOGIC ---
const jokeButton = document.getElementById("joke-btn");
const jokeBox = document.getElementById("joke-box");

jokeButton.addEventListener("click", function() {
    // Change button text while loading
    jokeBox.innerText = "Fetching joke from the matrix...";

    // Fetch data from a free public joke API
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json()) // Convert the response into JSON data
        .then(data => {
            // Combine the setup and punchline from the API data
            jokeBox.innerText = `"${data.setup}" — ${data.punchline}`;
        })
        .catch(error => {
            // Handle errors if the internet is down
            jokeBox.innerText = "Oops! Couldn't fetch a joke right now.";
            console.error(error);
        });
});
