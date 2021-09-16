//console.log('connected')

const questionsArray = [ "Which is a Beatles song?", "Which is a movie?", "Which is a vegetable?", "Which is a news source?"]
const answersArray = ["Glass Onion", "The Onion Field", "Onion", "The Onion"]
console.log(answersArray)

let playerName
let rQ = parseInt(Math.floor(Math.random()*4))
document.getElementById("question").innerHTML = questionsArray[rQ]
console.log(rQ)



document.querySelector("#submitAnswer").addEventListener("click", function getPlayerAnswer() {
    if (document.getElementById("answerA").checked) {
        console.log('answer A chosen');
    }
    if (document.getElementById("answerB").checked) {
        console.log('answer B chosen');
    }
    if (document.getElementById("answerC").checked) {
        console.log('answer C chosen');
    }
    if (document.getElementById("answerD").checked) {
        console.log('answer D chosen');
    } 
})








// document.getElementById("answerA").innerHTML = answersArray[2]
// document.getElementById("answerB").innerHTML = answersArray[0]
// document.getElementById("answerC").innerHTML = answersArray[1]
// document.getElementById("answerD").innerHTML = answersArray[3]

// ========= Adds Answer Choices (LI) to UL ========================
// function addAnswerItems(possibleAnswer) {
//     let li = document.createElement('li');
//     li.textContent = possibleAnswer;
//     return li;
// }

// const answers = document.querySelector('#answerList');

// for (let i = 0; i < 4; i++) {
//     answerList.appendChild(addAnswerItems(answersArray[i]));
// }
// ========= End add LI to UL

// answerList.appendChild(addAnswerItems(answersArray[0]));
// answerList.appendChild(addAnswerItems('test answer B'));
// answerList.appendChild(addAnswerItems('test answer C'));
// answerList.appendChild(addAnswerItems('test answer D'));


// Submit Answer Button
