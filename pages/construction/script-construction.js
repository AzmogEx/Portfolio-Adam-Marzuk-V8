var typed = new Typed(".type", {
	strings: [">gcc -o site main.c ^1000 <br> .^500.^500.^500.^500..................<br>>Compiled without error<br>>^2000run ./site.out ^500 <br> ^1000 <br>>error segmentation fault<br>>"],
	typeSpeed: 70,
	showCursor: true,
	cursorChar: "<b>_</br>",
	loop: false,
});

// Séquence de touches pour l'easter egg (Konami Code)
const easterEggSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let currentSequence = [];

// Écouter les événements de touche
document.addEventListener("keydown", function (event) {
	console.log("Touche pressée : ", event.key); // Log pour vérifier les touches pressées
	currentSequence.push(event.key);
	if (currentSequence.length > easterEggSequence.length) {
		currentSequence.shift();
	}
	console.log("Séquence actuelle : ", currentSequence.join("")); // Log pour vérifier la séquence actuelle
	if (currentSequence.join("") === easterEggSequence.join("")) {
		console.log("Konami Code détecté !"); // Log pour vérifier si le Konami Code est détecté
		window.location.href = "../easter-egg/easter.html";
	}
});
