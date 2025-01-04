// Get references to the form elements
const form = document.querySelector("#new-game-form");
const numPlayersInput = document.querySelector("#num-players");
const turnTimeLimitInput = document.querySelector("#turn-time-limit");
const enableBluffInput = document.querySelector("#enable-bluff");
const roundsPerGameInput = document.querySelector("#rounds-per-game");
const gameTimeLimitInput = document.querySelector("#game-time-limit");
const noTimeLimitInput = document.querySelector("#no-time-limit");
const playerRulesInput = document.querySelector("#player-rules");

// No Time Limit checkbox logic to disable relevant inputs
noTimeLimitInput.addEventListener("change", () => {
    if (noTimeLimitInput.checked) {
        turnTimeLimitInput.disabled = true;
        gameTimeLimitInput.disabled = true;
    } else {
        turnTimeLimitInput.disabled = false;
        gameTimeLimitInput.disabled = false;
    }
});

// Submit handler for the form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the values of the form inputs
    const numPlayers = numPlayersInput.value;
    const turnTimeLimit = turnTimeLimitInput.disabled ? 0 : turnTimeLimitInput.value;
    const enableBluff = enableBluffInput.checked;
    const roundsPerGame = roundsPerGameInput.value;
    const gameTimeLimit = gameTimeLimitInput.disabled ? 0 : gameTimeLimitInput.value;
    const noTimeLimit = noTimeLimitInput.checked;
    const playerRules = playerRulesInput.value;

    // Create a URL with the query parameters
    const url = `game_screen.html?numPlayers=${numPlayers}&turnTimeLimit=${turnTimeLimit}&enableBluff=${enableBluff}&numRounds=${roundsPerGame}&gameTimeLimit=${gameTimeLimit}&noTimeLimit=${noTimeLimit}&playerRules=${encodeURIComponent(playerRules)}&timer=${encodeURIComponent(turnTimeLimit)}`;

    // Redirect to the game screen
    window.location.href = url;
});
