//console.log('connected')

const questionsArray = [ ["Which is a Beatles song?", "Glass Onion"], ["Which is a movie?", "The Onion Field"], ["Which is a vegetable?", "Onion"], ["Which is a news source?", "The Onion"]]
const answersArray = []
console.log(answersArray)

let playerName
let rQ = parseInt(Math.floor(Math.random()*4))
document.getElementById("question").innerHTML = questionsArray[rQ][0]
console.log(rQ)

document.querySelector("#ansA").innerHTML = questionsArray[2][1];
document.querySelector("#ansB").innerHTML = questionsArray[1][1];
document.querySelector("#ansC").innerHTML = questionsArray[0][1];
document.querySelector("#ansD").innerHTML = questionsArray[3][1];

// document.getElementById("AnswerA > label").innerHTML = answersArray[1]


document.querySelector("#submitAnswer").addEventListener("click", function getPlayerAnswer() {
    // if (document.getElementById("answerA").checked) {
    //    // console.log(document.querySelector("#answerA").input.value)
    //     console.log('answer A chosen');
    // }
    // if (document.getElementById("answerB").checked) {
    //  //   console.log(document.querySelector("#ansB").label.value)
    //     console.log('answer B chosen');
    // }
    // if (document.getElementById("answerC").checked) {
    //     console.log('answer C chosen');
    // }
    // if (document.getElementById("answerD").checked) {
    //     console.log('answer D chosen');
    // } 
    displayRadioValue()
})


function displayRadioValue() {
    var ele = document.getElementsByName('answer');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Answer: "+ele[i].value;
    }
    // if (ele[i].value === rQ) {
    //     console.log("You are correct!")
    // }
}





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
