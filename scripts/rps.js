function playRound(e) {
	let playerChoice = convertPlayerChoiceToNum(e.target.innerHTML);
	let computerChoice = computerPlay();
	document.getElementById("rounds").innerHTML = round;
	convertComputerChoiceToString(computerChoice);
	playRPS(playerChoice, computerChoice);
	updateScore();
}

function getRandomInt(num) {
	return Math.floor(Math.random() * num);
}

function computerPlay() {
	return getRandomInt(3);
}

function playRPS(playerSelection, computerSelection ) {
	let results = "";
	switch(playerSelection) {
		case 0:
			switch(computerSelection) {
				case 0:
					results = 'Draw!';
					break;
				case 1:
					computerScore++;
					results = lose + ' ' + paper + ' covers ' + rock;
					break;
				case 2:
					playerScore++;
					results = win + ' ' + rock + ' breaks ' + scissors;
					break;
			}
			break;
		case 1:
			switch(computerSelection) {
				case 0:
					playerScore++;
					results = win + ' ' + paper + ' covers ' + rock;
					break;
				case 1:
					results = 'Draw!';
					break;
				case 2:
					computerScore++;
					results = lose + ' ' + scissors + ' cut ' + paper;
					break;
			}
			break;
		case 2:
			switch(computerSelection) {
				case 0:
					computerScore++;
					results = lose + ' ' + rock + ' breaks ' + scissors;
					break;
				case 1:
					playerScore++;
					results = win + ' ' + scissors + ' cut ' + paper;
					break;
				case 2:
					results = 'Draw!';
					break;
			}
			break;
	}
	document.getElementById("resultsDisplay").innerHTML = results;
}

function max(num1, num2) {
	return (num1 > num2) ? num1 : num2;
}

function convertPlayerChoiceToNum(choice) {
		document.getElementById("playerChoice").innerHTML = 'Player chose <strong>' + choice + '</strong>';
		return (choice.toLowerCase() === rock.toLowerCase()) ? 0 : 
		(choice.toLowerCase() === paper.toLowerCase()) ? 1 : 2;
}

function convertComputerChoiceToString(computerChoice) {
	switch(computerChoice) {
		case 0:
			document.getElementById("computerChoice").innerHTML = 'Computer chose <strong>ROCK</strong>';
			break;
		case 1:
			document.getElementById("computerChoice").innerHTML = 'Computer chose <strong>PAPER</strong>';
			break;
		case 2:
			document.getElementById("computerChoice").innerHTML = 'Computer chose <strong>SCISSORS</strong>';
			break;
	}
}

function updateScore() {
	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("computerScore").innerHTML = computerScore;
}