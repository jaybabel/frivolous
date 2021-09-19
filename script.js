//console.log('connected')

//const musicArray
questionsArray = [ ["Which is a Beatles song?", "Glass Onion"], 
["A song by Booker T and the MGs?", "Green Onions"], 
["Supergroup with members from The Hollies, The Byrds, and Buffalo Springfield", "CSNY"], 
["Supergroup with members from Mott The Hoople, King Crimson, and Free", "Bad Company"], ["Supergroup with Peter Frampton and that guy from the Small Faces.", "Humble Pie"], 
["First known as The Jefferson Airplane", "Starship"], 
["Supergroup with members from Cream and Traffic", "Blind Faith"],
["Incense and Peppermints", "Strawberry Alarm Clock"], 
["How can I live without you? If it means a gotta get a job?", "Cracker"], 
["Apple Records band, formerly known as the Iveys", "Badfinger"], 
["Band that had Clapton, Page, and Beck", "The Yardbirds"],
["Song written by Bob Dylan", "Quinn the Eskimo"],
["Number one single of all time.", "White Christmas"],
["q1", "q1"],
["q2", "q2"],
["Previous band of BTO founder.", "The Guess Who"]]

const movieQuotesArray = [["Well doc, I imagine you wanna know what makes ol' Jack tick.", "One Flew Over The Cuckoo's Nest"], 
["Pull yourself together man. You're going into the forest afterall. You've got to keep your wits about you", "Harry Potter and the Sorcerer's Stone"], 
["This town needs an enema!", "Batman"], 
["I know you. You're Dillon. The famous bouncer.", "Roadhouse"], 
["quote a", "movie a"],
["quote b", "movie b"],
["quote c", "movie c"],
["quote d", "movie d"],
["quote e", "movie e"],
["quote f", "movie f"],
["quote g", "movie g"],
["quote h", "movie h"],
["quote i", "movie i"],
["quote j", "movie j"],
["They're all gone. Lucky Ned Pepper. Gone. Your fifty dollar gold piece. Gone. Bottle of whickey taken in as evidence. Gone. All gone.", "True Grit"]] 
//["", ""], 

const authorsArray = [["Pride and Prejudice", "Jane Austen"], 
["A book by Joseph Wambaugh.", "The Onion Field"], 
["The Screwtape Letters", "C. S. Lewis"], 
["Second Treatise on Government", "John Locke"], 
["Politics", "Aristotle"], 
["Republic", "Plato"], 
["Free to Choose", "Milton Friedman"], 
["The Time Machine", "H.G. Wells"], 
["Wuthering Heights", "Emily Bronte"], 
["Jane Eyre", "Charlotte Bronte"], 
["Book a", "Author a"],
["Book b", "Author b"],
["Book c", "Author c"],
["Book d", "Author d"],
["Great Expectations", "Charles Dickens"]]

//const 10_questionsArrayTemplate = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]]
const answersArray = ["", "", "",""]
const questionTrackerArray = ["", "", "", "", "", "", "", "", "",""]
const questionArrayLength = 15

  // leaderBoardArray of arrays [playerName, correct answers, total questions]
const leaderBoardArray = []
const currentPlayer = ["", "", ""]

let playerName
let playerScore = 0
let questionCount = 0
let maxQuestions = 5
let rQ
let currentQuestion
let correctAnswer
let categoryChoice

// select 10 random question indexes - just numbers, doesn't matter what question category
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
}

// pop question from the list of 10 random questions
function chooseQuestion() {
    currentQuestion = questionTrackerArray.pop();
    document.getElementById("question").innerHTML = questionsArray[currentQuestion][0]
}

// randomly place correct answer
function placeCorrectAnswer() {
    correctAnswer = parseInt(Math.floor(Math.random()*4))
    // switch () {
    //     case music:
    //         answersArray[correctAnswer] = questionsArray[currentQuestion][1];
 //              console.log("music")
    //         break;
    //      case movieQuotes;
    //         answersArray[correctAnswer] = movieQuotesArray[currentQuestion][1];
 //              console.log("movieQuotes")
    //         break;
    //      case authors;
    //         answersArray[correctAnswer] = authorsArray[currentQuestion][1];
 //              console.log("authors")
    //         break;
    //  }
    answersArray[correctAnswer] = questionsArray[currentQuestion][1]
}

function addBogusAnswers() {
    for (let i = 0; i < 4; i++) {  
        // check for available ("") elements
        if (answersArray[i] === "") {
            let randomAnswer = parseInt(Math.floor(Math.random()*questionArrayLength))
            // check to make sure answer is unique

            // while (i < 4) {
            //     if (!answersArray.includes(questionsArray[randomAnswer][1])) {
            //         answersArray[i] = questionsArray[randomAnswer][1]
            //         i ++
            //         answersArray[i] = questionsArray[randomAnswer][1]
            //     } else {
            //         randomAnswer = parseInt(Math.floor(Math.random()*questionArrayLength))
            //     }
            // }

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

function updateTheLeaderBoard() {
    if (leaderBoardArray.length == 0) {
        leaderBoardArray.push(currentPlayer)
    } else {
        for(i = 0; i < leaderBoardArray.length; i++) {
            if (leaderBoardArray[i, 0] === currentPlayer[0]) {
                leaderBoardArray[i, 1] = currentPlayer[1] + + leaderBoardArray[i, 1] 
                leaderBoardArray[i, 2] = currentPlayer[2] + + leaderBoardArray[i, 2] 
            }
        }
    }
    // leaderBoardArray.push(currentPlayer)
    console.log(currentPlayer)
    console.log('leader board length', leaderBoardArray.length)
    let x = document.createElement("LI")
    let t = document.createTextNode(leaderBoardArray[0])
    x.appendChild(t);
    document.getElementById("leaderList").appendChild(x)
}

function gameOver() {
    questionCount ++
    updateScoreboard()
    document.querySelector("#btnSubmitAnswer").removeEventListener("click", getPlayerAnswer);
    currentPlayer[1] = playerScore + + currentPlayer[1] 
    currentPlayer[2] = questionCount + + currentPlayer[2]
    updateTheLeaderBoard()
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
        playerScore ++
        nextQuestion() 
        } else {
            nextQuestion()
    }
}

function changePlayer (){
//    console.log("Change Player")
    currentPlayer[0] = document.getElementById("playerNameList").value
    console.log(currentPlayer[0])
}

function getPlayerAnswer() {
    compareRadioValue()
}

function gameStart () {
    let text1
    currentPlayer[0] = prompt("Enter player name:", "Name")
    if (currentPlayer[0] == null || currentPlayer == ""){
        text1 = "User cancelled";
    } else {
        document.getElementById("playerName").innerHTML = "Player Name: "+currentPlayer[0]
        document.getElementById("questionPrompt").innerHTML = "Here's your question "+currentPlayer[0]+":"
        // populate playerNameList
            let selectList = document.getElementById("playerNameList")
            let option = document.createElement("option")
            option.value = currentPlayer[0]
            option.text = currentPlayer[0]
            selectList.appendChild(option)
        fillQuestionTrackerArray()
        chooseQuestion()
        placeCorrectAnswer()
        addBogusAnswers()
        loadAnswers()
    }
}

// =============== NEW GAME BUTTON =============== 
document.querySelector("#btnNewGame").addEventListener("click", function newGame() {
    document.getElementById("playerName").innerHTML = "Player Name: "+currentPlayer[0]
    document.getElementById("questionPrompt").innerHTML = "Here's your question "+currentPlayer[0]+":"
    document.getElementById("btnSubmitAnswer").addEventListener("click", getPlayerAnswer);
    initializeAnswers()
    fillQuestionTrackerArray()
    chooseQuestion()
    placeCorrectAnswer()
    addBogusAnswers()
    loadAnswers()
    playerScore = 0
    questionCount = 0
    currentPlayer[1] = 0
    currentPlayer[2] = 0
    updateScoreboard()
})

// =============== NEW PLAYER BUTTON =============== 
document.querySelector("#btnNewPlayer").addEventListener("click", gameStart)

// =============== CHANGE PLAYER BUTTON =============== 
document.querySelector("#btnChangePlayer").addEventListener("click", changePlayer)

// =============== SUBMIT ANSWER BUTTON =============== 
document.getElementById("btnSubmitAnswer").addEventListener("click", getPlayerAnswer);

gameStart()


