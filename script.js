//console.log('connected')

const questionsArray = [ ["Which is a Beatles song?", "Glass Onion"], 
["A book by Joseph Wambaugh.", "The Onion Field"], 
["Which is a soup?", "French Onion"], 
["Which is a news source?", "The Onion"], 
["A song by Booker T and the MGs?", "Green Onions"], 
["Supergroup with members from The Hollies, The Byrds, and Buffalo Springfield", "CSNY"], 
["Supergroup with members from Mott The Hoople, King Crimson, and Free", "Bad Company"], ["Supergroup with Peter Frampton and that guy from the Small Faces.", "Humble Pie"], 
["First known as The Jefferson Airplane", "Starship"], 
["Supergroup with members from Cream and Traffic", "Blind Faith"],
["Which is a movie starring Gene Hackman?", "The French Connection"], 
["Incense and Peppermints", "Strawberry Alarm Clock"], 
["How can I live without you? If it means a gotta get a job?", "Cracker"], 
["Apple Records band, formerly known as the Iveys", "Badfinger"], 
["Previous band of BTO founder.", "The Guess Who"]]

//const 10_questionsArrayTemplate = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]]
const answersArray = ["", "", "",""]
const questionTrackerArray = ["", "", "", "", "", "", "", "", "",""]
const questionArrayLength = 10

let playerName
let playerScore = 0
let questionCount = 0
let maxQuestions = 5
let rQ
let currentQuestion
let correctAnswer

function fillQuestionTrackerArray() {
    let i = 0
    rQ = parseInt(Math.floor(Math.random()*questionArrayLength))
    while (i < 10) {
        if (!questionTrackerArray.includes(rQ)) {
            questionTrackerArray[i] = rQ
            i ++
            rQ = parseInt(Math.floor(Math.random()*questionArrayLength))
        } else {
            rQ = parseInt(Math.floor(Math.random()*questionArrayLength))
        }
    }
    console.log('loding question tracker: ', questionTrackerArray)
}

// choose random question
function chooseQuestion() {
    currentQuestion = questionTrackerArray.pop();
    console.log(currentQuestion)
    document.getElementById("question").innerHTML = questionsArray[currentQuestion][0]
    console.log("after pop", questionTrackerArray)
}

// randomly place correct answer
function placeCorrectAnswer() {
    correctAnswer = parseInt(Math.floor(Math.random()*4))
    answersArray[correctAnswer] = questionsArray[currentQuestion][1]
}

function addBogusAnswers() {
    for (let i = 0; i < 4; i++) {  
        // check for available ("") elements
        if (answersArray[i] === "") {
            let randomAnswer = parseInt(Math.floor(Math.random()*questionArrayLength))
            // check to make sure answer is unique
            while (answersArray[i] === "") {
                if ((answersArray[0] !== questionsArray[randomAnswer][1]) 
                    && (answersArray[1] !== questionsArray[randomAnswer][1])
                    && (answersArray[2] !== questionsArray[randomAnswer][1])
                    && (answersArray[3] !== questionsArray[randomAnswer][1])) {
                    answersArray[i] = questionsArray[randomAnswer][1]
                }
                randomAnswer = parseInt(Math.floor(Math.random()*questionArrayLength))
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

function initializeAnswers() {
    // clear answersArray
    for (let i = 0; i < 4; i++) {
        answersArray[i] = ""
    }
    // uncheck radio button
    let radio = document.querySelector('input[type=radio][name=answer]:checked');
    radio.checked = false;
}

function updateScoreboard() {
    document.getElementById("currentScore").innerHTML = "Current score: "+playerScore
    document.getElementById("currentQuestionCount").innerHTML = " out of: "+questionCount
}

function gameOver() {
    questionCount ++
    updateScoreboard()
    document.querySelector("#submitAnswer").removeEventListener("click", getPlayerAnswer);
    console.log('game over')
}

function nextQuestion() {
    if (questionCount < maxQuestions-1) {
    initializeAnswers()
    chooseQuestion()
    placeCorrectAnswer()
    addBogusAnswers()
    loadAnswers()
    questionCount ++
    updateScoreboard()
    } else {
        updateScoreboard()
        gameOver()
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
        playerScore ++
        console.log('player score in compareRadioValue function: ',playerScore)
        nextQuestion() 
        } else {
            console.log('Try again.')
            nextQuestion()
    }
}

document.querySelector("#newGame").addEventListener("click", function newGame() {
    console.log("function newGame")
    document.getElementById("submitAnswer").addEventListener("click", getPlayerAnswer);
    initializeAnswers()
    fillQuestionTrackerArray()
    chooseQuestion()
    placeCorrectAnswer()
    addBogusAnswers()
    loadAnswers()
    playerScore = 0
    questionCount = 0
    updateScoreboard()
})

function getPlayerAnswer() {
    console.log("Question count at start submit answer listener: ", questionCount)
    compareRadioValue()
    console.log("Question count at end submit answer listener: ", questionCount)
}

document.getElementById("submitAnswer").addEventListener("click", getPlayerAnswer);

// document.querySelector("#submitAnswer").addEventListener("click", function getPlayerAnswer() {
//     console.log("Question count at start submit answer listener: ", questionCount)
//    // displayRadioValue()
//     compareRadioValue()
//     console.log("Question count at end submit answer listener: ", questionCount)
// })

fillQuestionTrackerArray();
chooseQuestion()
placeCorrectAnswer()
addBogusAnswers()
loadAnswers()
