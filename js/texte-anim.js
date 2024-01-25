var typingtext = document.getElementById("typingtext");
var typewriter = new Typewriter(typingtext, {
	loop: true,
	delay: 75,
});
typewriter.typeString("Je suis étudiant en BTS SIO.").pauseFor(800).deleteChars(20).typeString("passionné par l'informatique.").pauseFor(800).deleteChars(15).typeString("le développement web.").pauseFor(800).deleteChars(4).typeString("logiciel.").pauseFor(800).deleteChars(40).typeString("développeur C#").pauseFor(800).deleteChars(2).typeString("HTML/CSS").pauseFor(800).deleteChars(8).typeString("Javascript").pauseFor(800).deleteChars(10).typeString("PHP").pauseFor(800).deleteChars(3).typeString("SQL").pauseFor(2000).start();
