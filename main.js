
function createGame(player1, hour, player2) {
  return `
   <li>
      <img
        src="./assets/icon-${player1}.svg"
        alt="Bandeira de ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}"/>
    </li>
  `
}

let delay = -0.4 ;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card1" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}


document.querySelector("#cards").innerHTML = 
    createCard("20/11", "Domingo", createGame("qatar", "17:00", "ecuator")) +

    createCard("21/11", "Segunda", createGame("england", "14:00", "iran") + createGame("netherlands", "17:00", "senegal") + createGame("unitedstates", "20:00", "wales")) +

    createCard("22/11", "Terça", createGame("argentina", "11:00", "saudi-arabia") + createGame("qatar", "14:00", "ecuator") + createGame("qatar", "17:00", "ecuator") + createGame("qatar", "20:00", "ecuator"))

