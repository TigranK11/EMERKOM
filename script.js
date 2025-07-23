let score = 0;
let clickPower = 1;

function loadData() {
	const savedScore = localStorage.getItem("score");

	if (savedScore) score = parseInt(savedScore);

	document.getElementById("score").innerHTML = score;
}

function saveData() {
	localStorage.setItem("score", score);
}

let cl = document.getElementById("objectPanel");
function clickk() {
	score += clickPower;
	document.getElementById("score").innerHTML = score;

	const animtext = document.createElement("div");
	animtext.innerHTML = `+${clickPower}₿`;
	animtext.className = "animText";
	animtext.style.top = `${cl.clientHeight}px`;
	animtext.style.left = `${cl.clientWidth / 2}px`;
	cl.appendChild(animtext);
	setTimeout(() => animtext.remove(), 1000);
	saveData();
}
