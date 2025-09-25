const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");


//Track attendance 
let count = 0;
const maxCount = 50;

//Handle form submission
form.addEventListener("submit", function (e) {
  event.preventDefault();

  //Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  //Increment const
  count++
  console.log("Total check-ins: ", count);

  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  //Update the team counter 
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show welcome messade 
  const message = `🎉Welcome, ${name} from ${teamName} 🎈🎉`;
  console.log(message);

  //Update the Attendance counter
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  //Updates the Progress Bar 
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  //Update Greeting
  const greetingMessage = document.getElementById("greeting");
  greetingMessage.textContent = message;
  greetingMessage.style.display = 'block';

  //Reach goal Message
const congratsMessage = document.getElementById("congrats");
const teamMessage = document.getElementById("winningTeam");
const teamWater = document.getElementById("waterCount");
const teamZero = document.getElementById("zeroCount");
const teamPower = document.getElementById("powerCount");

var winner = "none";

// Parse the counts (assumes textContent contains a number like "12")
const waterCount = parseInt(teamWater.textContent, 10);
const zeroCount = parseInt(teamZero.textContent, 10);
const powerCount = parseInt(teamPower.textContent, 10);

if (count === 50) {
  // Show congrats message
  congratsMessage.style.display = "block";
  congratsMessage.setAttribute("aria-hidden", "false");

  // Determine winner
  if (waterCount > zeroCount && waterCount > powerCount) {
  winner = "is Team Water Wise";
} else if (zeroCount > powerCount && zeroCount > waterCount) {
  winner = "is Team Net Zero";
} else if (powerCount > waterCount && powerCount > zeroCount) {
  winner = "is Team Renewables";
} else if (zeroCount === powerCount && zeroCount > waterCount) {
  winner = "are Team Net Zero & Team Renewables";
} else if (powerCount === waterCount && powerCount > zeroCount) {
  winner = "are Team Renewables & Team Water Wise";
} else if (waterCount === zeroCount && waterCount > powerCount) {
  winner = "are Team Net Zero & Team Water Wise";
} else {
  winner = "It's a tie!";
}
  // Display winner
  teamMessage.textContent = `Winning team ${winner}`;
}

//Attendee List 
const attendeeList = document.getElementById("attendee-list");

attendeeList.innerHTML += `<tr><td>${name}</td><td>${teamName}</td></tr>`;



  form.reset();
  
})