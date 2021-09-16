console.log('connected')

const questionsArray = [ "Which is a Beatles song?", "Which is a movie?", "Which is a vegetable?", "Which is a news source?"]
const answersArray = ["Glass Onion", "The Onion Field", "Onion", "The Onion"]
console.log(answersArray)

let playerName

document.getElementById("question").innerHTML = questionsArray[0]
// document.getElementById("answerA").innerHTML = answersArray[2]
// document.getElementById("answerB").innerHTML = answersArray[0]
// document.getElementById("answerC").innerHTML = answersArray[1]
// document.getElementById("answerD").innerHTML = answersArray[3]

document.querySelector("#submitAnswer").addEventListener("click", function getPlayerName() {
    console.log('answer button');
})