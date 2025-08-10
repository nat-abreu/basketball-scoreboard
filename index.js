let homeScorePlaceholder = document.getElementById("home-score");
let guestScorePlaceholder = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function add1home() {
    homeScore += 1;
    homeScorePlaceholder.textContent = homeScore;
    updateLeader();
}

function add2home() {
    homeScore += 2;
    homeScorePlaceholder.textContent = homeScore;
    updateLeader();
}

function add3home() {
    homeScore += 3;
    homeScorePlaceholder.textContent = homeScore;
    updateLeader();
}

function add1guest() {
    guestScore += 1;
    guestScorePlaceholder.textContent = guestScore;
    updateLeader();
}

function add2guest() {
    guestScore += 2;
    guestScorePlaceholder.textContent = guestScore;
    updateLeader();
}

function add3guest() {
    guestScore += 3;
    guestScorePlaceholder.textContent = guestScore;
    updateLeader();
}

function newgame() {
    homeScore = 0;
    guestScore = 0;
    homeScorePlaceholder.textContent = homeScore;
    guestScorePlaceholder.textContent = guestScore;
    updateLeader();
}

function updateLeader() {
  let homeScoreNumber = document.getElementById("home-scorenumber");
  let guestScoreNumber = document.getElementById("guest-scorenumber");
  const homeWins  = homeScore > guestScore;
  const guestWins = guestScore > homeScore;

  homeScoreNumber.classList.toggle("winning-team", homeWins);
  guestScoreNumber.classList.toggle("winning-team", guestWins);
}
