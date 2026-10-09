
const footballTeam = {
  team: "Argentina",
  year: 2022,
  headCoach: "Lionel Scaloni",
  players: [
    {
      name: "Lionel Messi",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Ángel Di María",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Rodrigo De Paul",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Enzo Fernández",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Nicolás Otamendi",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Cristian Romero",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Emiliano Martínez",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

// Select the HTML elements
const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

// Display team information
teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

// Display player cards
function displayPlayers(players) {
  playerCards.innerHTML = "";

  players.forEach(function(player) {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const playerName = document.createElement("h2");

    if (player.isCaptain) {
      playerName.textContent = `(Captain) ${player.name}`;
    } else {
      playerName.textContent = player.name;
    }

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    card.appendChild(playerName);
    card.appendChild(playerPosition);

    playerCards.appendChild(card);
  });
}

// Show all players when the page loads
displayPlayers(footballTeam.players);

// Filter players based on the selected position
playersDropdown.addEventListener("change", function() {
  const selectedPosition = playersDropdown.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(function(player) {
      return player.position === selectedPosition;
    });

    displayPlayers(filteredPlayers);
  }
});
