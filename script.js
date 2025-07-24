let score = 0;
let clickPower = 1;
let energy = 500;
let fullEnergy = 500;
let percentEnergy;

let energyFillHTML = document.getElementById("energyFill");
let energyHTML = document.getElementById("energyText");

function loadData() {
	const savedScore = localStorage.getItem("score");

	if (savedScore) score = parseInt(savedScore);

	document.getElementById("score").innerHTML = score;
}

function saveData() {
	localStorage.setItem("score", score);
}

let cl = document.getElementById("objectPanel");
cl.addEventListener("touchstart", function (event) {
	//const animtext = document.createElement("div");
	//animtext.innerHTML = `+${clickPower}🧑🏻`;
	//animtext.className = "animText";
	//animtext.style.top = "20px";
	//animtext.style.left = "20px";
	//cl.appendChild(animtext);
	if (energy >= clickPower) {
		score += clickPower;
		energy -= clickPower;
		document.getElementById("score").innerHTML = score;
		document.getElementById("energyText").innerHTML = energy;
		fillEnergy();

		let img = event.currentTarget.querySelector("#img");
		img.style.transform = "scale(0.9)";
		setTimeout(() => {
			img.style.transform = "";
		}, 100);
		const plus = document.createElement("div");
		plus.className = "animText";
		plus.innerText = "+" + clickPower;
		const panel = event.currentTarget;
		const rect = panel.getBoundingClientRect();
		plus.style.left = `${event.clientX - rect.left}px`;
		plus.style.top = `${event.clientY - rect.top}px`;
		panel.appendChild(plus);
		img.style.transform = "scale(0.9)";
		setTimeout(() => {
			plus.remove();
		}, 2200);
	}
	saveData();
});

function fillEnergy() {
	percentEnergy = (energy * 100) / fullEnergy;
	energyFillHTML.style.width = percentEnergy + "%";
}

function regenerateEnergy() {
	if (energy < fullEnergy) {
		energy++;
		energyHTML.innerText = energy;
		fillEnergy();
	}
}
setInterval(regenerateEnergy, 1000);
