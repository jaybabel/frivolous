//console.log('connected')

const questionsArray = [ "Which is a Beatles song?", "Which is a movie?", "Which is a vegetable?", "Which is a news source?"]
const answersArray = ["Glass Onion", "The Onion Field", "Onion", "The Onion"]
console.log(answersArray)

let playerName
let a = parseInt(Math.floor(Math.random()*4))
document.getElementById("question").innerHTML = questionsArray[a]
console.log(a)
// document.getElementById("answerA").innerHTML = answersArray[2]
// document.getElementById("answerB").innerHTML = answersArray[0]
// document.getElementById("answerC").innerHTML = answersArray[1]
// document.getElementById("answerD").innerHTML = answersArray[3]


function addAnswerItems(possibleAnswer) {
    let li = document.createElement('li');
    li.textContent = possibleAnswer;
    return li;
}

const answers = document.querySelector('#answerList');

for (let i = 0; i < 4; i++) {
    answerList.appendChild(addAnswerItems(answersArray[i]));
}


// answerList.appendChild(addAnswerItems(answersArray[0]));
// answerList.appendChild(addAnswerItems('test answer B'));
// answerList.appendChild(addAnswerItems('test answer C'));
// answerList.appendChild(addAnswerItems('test answer D'));


// Submit Answer Button
document.querySelector("#submitAnswer").addEventListener("click", function getPlayerName() {
    console.log('answer button');
})