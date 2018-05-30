function playRound(e) {
	let playerChoice = convertPlayerChoiceToNum(e.target.innerHTML);
	let computerChoice = computerPlay();
	convertComputerChoiceToString(computerChoice);
	playRPS(playerChoice, computerChoice);
	updateScore();
	if(isGameOver()) {
		toggleButtons(true);
		toggleMessageBox();
	}
}

function getRandomInt(num) {
	return Math.floor(Math.random() * num);
}

function computerPlay() {
	return getRandomInt(3);
}

function playRPS(playerSelection, computerSelection ) {
	let results = "";
	let boldStart = "<span class='bold'>";
	let boldEnd = "</span>";
	round++;
	switch(playerSelection) {
		case 0:
			switch(computerSelection) {
				case 0:
					results = 'Draw!';
					break;
				case 1:
					computerScore++;
					results = lose + ' ' + boldStart + paper + boldEnd + ' covers ' + boldStart + rock + boldEnd;
					break;
				case 2:
					playerScore++;
					results = win + ' ' + boldStart + rock + boldEnd + ' breaks ' + boldStart + scissors + boldEnd;
					break;
			}
			break;
		case 1:
			switch(computerSelection) {
				case 0:
					playerScore++;
					results = win + ' ' + boldStart + paper + boldEnd + ' covers ' + boldStart + rock + boldEnd;
					break;
				case 1:
					results = 'Draw!';
					break;
				case 2:
					computerScore++;
					results = lose + ' ' + boldStart + scissors + boldEnd + ' cut ' + boldStart + paper + boldEnd;
					break;
			}
			break;
		case 2:
			switch(computerSelection) {
				case 0:
					computerScore++;
					results = lose + ' ' + boldStart + rock + boldEnd + ' breaks ' + boldStart + scissors + boldEnd;
					break;
				case 1:
					playerScore++;
					results = win + ' ' + boldStart + scissors + boldEnd + ' cut ' + boldStart + paper + boldEnd;
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
		document.getElementById("playerChoice").innerHTML = 'Player chose <span class="bold">' + choice + '</span>';
		return (choice.toLowerCase() === rock.toLowerCase()) ? 0 : 
		(choice.toLowerCase() === paper.toLowerCase()) ? 1 : 2;
}

function convertComputerChoiceToString(computerChoice) {
	switch(computerChoice) {
		case 0:
			document.getElementById("computerChoice").innerHTML = 'Computer chose <span class="bold">' + rock + '</span>';
			break;
		case 1:
			document.getElementById("computerChoice").innerHTML = 'Computer chose <span class="bold">' + paper + '</span>';
			break;
		case 2:
			document.getElementById("computerChoice").innerHTML = 'Computer chose <span class="bold">' + scissors + '</span>';
			break;
	}
}

function updateScore() {
	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("computerScore").innerHTML = computerScore;
	document.getElementById("rounds").innerHTML = round;
}

function isGameOver() {
	if(playerScore === 5 || computerScore === 5) {
		document.getElementById("reset").innerHTML = "Play Again?";
		if(playerScore === 5) {
			document.getElementById("message").innerHTML = "Game Over! You Win!!!!";
		} else {
			document.getElementById("message").innerHTML = "Game Over! You Lose! Try again.";	
		}
		return true;
	}
	return false;
}

function toggleMessageBox() {
	let box = document.getElementById('messageBox');
	if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

function toggleButtons(disable) {
	let buttons = document.getElementsByClassName("btn");
	for(let i = 0;i<buttons.length;i++) {
		buttons[i].disabled = disable;
	}
}

function reset(e) {
	playerScore = computerScore = round = 0;
	updateScore();
	document.getElementById("computerChoice").innerHTML = "";
	document.getElementById("playerChoice").innerHTML = "";
	document.getElementById("resultsDisplay").innerHTML = "";
	document.getElementById("messageBox").style.animation = "messageBoxAnimation 0.5s ease-out";
	toggleMessageBox();
	toggleButtons(false);
}