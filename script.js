//console.log('connected')

const questionsArray = [ ["Which is a Beatles song?", "Glass Onion"], ["Which is a movie?", "The Onion Field"], ["Which is a vegetable?", "Onion"], ["Which is a news source?", "The Onion"], ["A song by Booker T and the MGs?", "Green Onions"]]
const answersArray = ["", "", "",""]

let playerName
let rQ
let correctAnswer

// choose random question
function chooseQuestion() {
    rQ = parseInt(Math.floor(Math.random()*4))
    document.getElementById("question").innerHTML = questionsArray[rQ][0]
}

// randomly place correct answer
function placeCorrectAnswer() {
    correctAnswer = parseInt(Math.floor(Math.random()*4))
    answersArray[correctAnswer] = questionsArray[rQ][1]
}

function addBogusAnswers() {
    for (let i = 0; i < 4; i++) {  
        // check for available ("") elements
        if (answersArray[i] === "") {
            let randomAnswer = parseInt(Math.floor(Math.random()*5))
            // check to make sure answer is unique
            while (answersArray[i] === "") {
                if ((answersArray[0] !== questionsArray[randomAnswer][1]) 
                    && (answersArray[1] !== questionsArray[randomAnswer][1])
                    && (answersArray[2] !== questionsArray[randomAnswer][1])
                    && (answersArray[3] !== questionsArray[randomAnswer][1])) {
                    answersArray[i] = questionsArray[randomAnswer][1]
                }
                randomAnswer = parseInt(Math.floor(Math.random()*5))
            }
        }
    }
}

function loadAnswers() {
    document.querySelector("#ansA").innerHTML = answersArray[0];
    document.querySelector("#ansB").innerHTML = answersArray[1];
    document.querySelector("#ansC").innerHTML = answersArray[2];
    document.querySelector("#ansD").innerHTML = answersArray[3];
}

function displayRadioValue() {
    var ele = document.getElementsByName('answer');
      
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Your answer: "+ele[i].value;
    }
}

function compareRadioValue() {
    let ele = document.getElementsByName('answer');
    let buttonSelection;

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
          buttonSelection = ele[i].value
    }
    if (buttonSelection == correctAnswer) {
        console.log('You are correct!') 
        } else {
            console.log('Try again.')
    }
}

document.querySelector("#submitAnswer").addEventListener("click", function getPlayerAnswer() {
    displayRadioValue()
    compareRadioValue()
})


chooseQuestion()
placeCorrectAnswer()
addBogusAnswers()
loadAnswers()
