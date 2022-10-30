var readlineSync = require('readline-sync');
var score = 0;
var highScore = [{
  first : "Anon1",
  score : 5
}, {
  second : "Anon2",
  score : 4
}, {
  third : "Anon3",
  score: 3
}
]

var optionsOne = ["Earth ", "Venus ", "Pluto ", "Jupiter "]
var optionsTwo = ["12% ", "0.5% ", "100% ", "71% "]
var optionsThree = ["Sperm whale ", "Human ", "Dolphin ", "Dog "]
var optionsFour = ["Quartz ", "Mica ", "Red Beryl ", "Jadeite "]
var optionsFive = ["Air pressure ", "Mass Fart ", "Trees have lungs too ", "Fans "]

var options = [optionsOne, optionsTwo, optionsThree, optionsFour, optionsFive];
var correctOptions = [1, 4, 1, 4, 1];

var questions = [{
  question : "Which planet do you live on? ",
}, {
  question : "What percentage of the Earth's surface is covered by water? ",
}, {
  question : "Which animal has the biggest sized brain? ",
}, {
  question : "Which, among the following, is the rarest mineral found on Earth? ",
}, {
  question : "Why does wind flow? ",
}]

console.log("Welcome to " + "KON BANEGA PLANET-PATI")
console.log("-----")
var userName = readlineSync.question("What is your name? ")
console.log("-----")
if (readlineSync.keyInYN("Welcome " + userName.toUpperCase() + ". Dharti mata hopes you are well. Press Y to begin!")) {
  console.log("-----");
  console.log("Let's begin");
  for (var i = 0; i < questions.length; i++){
  function play(question, answer){
    var question = questions[i].question;
    console.log(question);
    userAnswer = readlineSync.keyInSelect(options[i])
    if (userAnswer === answer) {
      console.log("You are right");
      score = score + 1;
    } else {
      console.log("You're wrong")
    }
  }
play(questions[i].question, correctOptions[i]-1);
console.log("Current score: " + score);
console.log("-----")

}
} else {
  console.log("Farewell, alien!")
}
console.log("-----");


if (score >= highScore[2].score){
    console.log("You have broken a record! Contact Karan to see where you rank!")
  } else {
    //do nothing
  }

console.log("Previous highscores: ")
console.log(highScore);
