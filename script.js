//console.log('connected')

//const  0 -musicArray, 1 - movieQuotesArray, 2 - authors array
questionsArray = [
    [
        ["Which is a Beatles song?", "Glass Onion"], 
        ["A song by Booker T and the MGs?", "Green Onions"], 
        ["Supergroup with members from The Hollies, The Byrds, and Buffalo Springfield", "CSNY"], 
        ["Supergroup with members from Mott The Hoople, King Crimson, and Free", "Bad Company"], 
        ["Supergroup with Peter Frampton and that guy from the Small Faces.", "Humble Pie"], 
        ["First known as The Jefferson Airplane", "Starship"], 
        ["Supergroup with members from Cream and Traffic", "Blind Faith"],
        ["Incense and Peppermints", "Strawberry Alarm Clock"], 
        ["How can I live without you? If it means a gotta get a job?", "Cracker"], 
        ["Apple Records band, formerly known as the Iveys", "Badfinger"], 
        ["Band that had Clapton, Page, and Beck", "The Yardbirds"],
        ["Song written by Bob Dylan", "Quinn the Eskimo"],
        ["Number one single of all time.", "White Christmas"],
        ["First hit by One Direction", "What Makes You Beautiful"],
        ["Previous band of BTO founder.", "The Guess Who"]
    ],
//movieQuotesArray
    [
        ["Well doc, I imagine you wanna know what makes ol' Jack tick.", "One Flew Over The Cuckoo's Nest"], 
        ["Pull yourself together man. You're going into the forest afterall. You've got to keep your wits about you.", "Harry Potter and the Sorcerer's Stone"], 
        ["This town needs an enema!", "Batman"], 
        ["I know you. You're Dillon. The famous bouncer.", "Roadhouse"], 
        ["I turn on the TV and you're robbing a bank? My god Sonny! I don't even know you anymore.", "Dog Day Afternoon"],
        ["You've got to ask yourself one question, do I feel lucky? Well, do you punk?", "Dirty Harry"],
        ["Go ahead. Make my day.", "Sudden Impact"],
        ["Hey! I'm walkin' here! I'm walkin' here!", "Midnight Cowboy"],
        ["We don't need no stinking badges!", "The Treasure of the Sierra Madre"],
        ["You're killing me Smalls!", "The Sandlot"],
        ["Straight up or draped over the saddle. Either one.", "Joe Kid"],
        ["What we've got here is a failure to communicate.", "Cool Hand Luke"],
        ["Morons. I've got morons on my team. Nobody is going to rob us going down the mountain. We have got no money going down the mountain.", "Butch Cassidy and the Sundance Kid"],
        ["Made it, Ma! Top of the world!", "White Heat"],
        ["They're all gone. Lucky Ned Pepper. Gone. Your fifty dollar gold piece. Gone. Bottle of whiskey taken in as evidence. Gone. All gone.", "True Grit"]
    ], 
//const authorsArray
    [
        ["Pride and Prejudice", "Jane Austen"], 
        ["A book by Joseph Wambaugh.", "The Onion Field"], 
        ["The Screwtape Letters", "C. S. Lewis"], 
        ["Second Treatise on Government", "John Locke"], 
        ["Politics", "Aristotle"], 
        ["Republic", "Plato"], 
        ["Free to Choose", "Milton Friedman"], 
        ["A Study in Scarlet", "Arthur Conan Doyle"], 
        ["Wuthering Heights", "Emily Bronte"],
        ["Jane Eyre", "Charlotte Bronte"], 
        ["We are kept keen on the grindstone of pain and necessity.", "H.G. Wells"],
        ["We must tend our garden.", "Voltaire"],
        ["Abandon all hope, ye who enter here.", "Dante Alighieri"],
        ["There is a luxury in self-reproach. When we blame ourselves we feel that no one else has a right to blame us.", "Oscar Wilde"],
        ["Great Expectations", "Charles Dickens"]
    ]
]

//const 10_questionsArrayTemplate = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]]

const answersArray = ["", "", "", ""]
const questionTrackerArray = ["", "", "", "", "", "", "", "", "", ""]
const questionArrayLength = 15

// leaderBoardArray of arrays [playerName, correct answers, total questions]
const leaderBoardArray = []
const currentPlayer = ["", "", "", ""]

let playerName
let playerScore = 0
let questionCount = 0
let maxQuestions = 10
let rQ
let currentQuestion
let correctAnswer
let categoryChoice = 0
console.log('category: ', categoryChoice)

// select 10 random question indexes - just numbers, doesn't matter what question category
function fillQuestionTrackerArray() {
    let i = 0
    rQ = Math.floor(Math.random()*questionArrayLength)
    while (i < 11) {
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
    document.getElementById("question").innerHTML = questionsArray[categoryChoice][currentQuestion][0]
}

// randomly place correct answer
function placeCorrectAnswer() {
    correctAnswer = Math.floor(Math.random()*4)
    answersArray[correctAnswer] = questionsArray[categoryChoice][currentQuestion][1]
}

function addBogusAnswers() {
    for (let i = 0; i < 4; i++) {  
        // check for available ("") elements
        if (answersArray[i] === "") {
            let randomAnswer = parseInt(Math.floor(Math.random()*questionArrayLength))
            while (answersArray[i] === "") {
                if ((answersArray[0] !== questionsArray[categoryChoice][randomAnswer][1]) 
                    && (answersArray[1] !== questionsArray[categoryChoice][randomAnswer][1])
                    && (answersArray[2] !== questionsArray[categoryChoice][randomAnswer][1])
                    && (answersArray[3] !== questionsArray[categoryChoice][randomAnswer][1])) {
                    answersArray[i] = questionsArray[categoryChoice][randomAnswer][1]
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
    //let radio = document.querySelector('input[type=radio][name=answer]:checked');
    let radio = document.querySelector('input[type=radio]:checked');
    radio.checked = false;
}

function updateScoreboard() {
    document.getElementById("currentScore").innerHTML = "Current score: "+playerScore
    document.getElementById("currentQuestionCount").innerHTML = " out of: "+questionCount
}

function gameFeedback() {
    //switch (playerScore / questionCount) {
    switch ((playerScore) / (questionCount)) {
        case 1:
            document.getElementById("question").innerHTML = "*** Wow! You sure do know a lot of unimportant stuff! ***"
            break
        case .9:
            document.getElementById("question").innerHTML = "*** Great Score! ***"
            break
        case .8:
            document.getElementById("question").innerHTML = "*** Hey! That's pretty good. ***"
            break
        case .7:
            document.getElementById("question").innerHTML = "*** Not bad. Not bad at all. ***"
            break
        case .6:
            document.getElementById("question").innerHTML = "*** Not that bad...I guess. ***"
            break
        case .5:
            document.getElementById("question").innerHTML = "*** Kind of mediocre. ***"
            break
        case .4:
            document.getElementById("question").innerHTML = "*** You can do better. ***"
            break        
        default:
            document.getElementById("question").innerHTML = "*** Ouch! ***"
            break
    }
//    
}

function displayLeaderBoard() {
        // ================= remove Leaders (from StackOverflow) ====================
        let c = document.getElementById("leaderList").childElementCount
        if (c) {
            let lis = document.querySelectorAll('#leaderList li')
            for (let i = 0; li=lis[i]; i++) {
                li.parentNode.removeChild(li)
            }
        }
        // =========================== Add Leaders to Ordered List ========================
        for (j = 0; j < leaderBoardArray.length; j++) {
            let x  = leaderBoardArray[j][1] / leaderBoardArray[j][2]
            leaderBoardArray[j][3] = Math.round(x * 100) / 100
        }
        for (let i = 0; i < leaderBoardArray.length; i++) {
            let x = document.createElement("LI")
            let t
            t = document.createTextNode(leaderBoardArray[i])
            x.appendChild(t);
            document.getElementById("leaderList").appendChild(x)
        }
}

function updateTheLeaderBoard() {
        let addToLeaderboard = [...currentPlayer];
        // IF LEADERBOARD IS EMPTY
        if (!leaderBoardArray.length) {
          leaderBoardArray.push(addToLeaderboard);
        } else {
            let y = 0
            while (leaderBoardArray.length > y) {
                // IF CURRENT PLAYER IS IN LEADERBOARD ALREADY
                if (leaderBoardArray[y][0] === addToLeaderboard[0]) {
                    leaderBoardArray[y][1] += addToLeaderboard[1];
                    leaderBoardArray[y][2] += addToLeaderboard[2];
                }
                y++
            }
            let x = leaderBoardArray.length
            for (j = 0; j < leaderBoardArray.length; j++){
                // IF CURRENT PLAYER IS NOT IN LEADERBOARD
                if (addToLeaderboard[0] != leaderBoardArray[j][0]) {               
                    x --
                } 
            } 
            if (x === 0){
                leaderBoardArray.push(addToLeaderboard);
            }
        }
    displayLeaderBoard()
}

function gameOver() {
    questionCount ++
    updateScoreboard()
    document.querySelector("#btnSubmitAnswer").removeEventListener("click", getPlayerAnswer);
    currentPlayer[1] = playerScore
    currentPlayer[2] = questionCount
    updateTheLeaderBoard()
    gameFeedback()
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

function getPlayerAnswer() {
    compareRadioValue()
}

function addNewPlayer() {
    let text1
    currentPlayer[0] = prompt("Enter player name:", "Name")
    if (currentPlayer[0] == null || currentPlayer == ""){
        text1 = "User cancelled";
    } else {
        document.getElementById("playerName").innerHTML = "Player Name: "+currentPlayer[0]
        document.getElementById("questionPrompt").innerHTML = "Here's your question "+currentPlayer[0]+":"
        // ====== populate playerNameList ======
            let selectList = document.getElementById("playerNameList")
            let option = document.createElement("option")
            option.value = currentPlayer[0]
            option.text = currentPlayer[0]
            selectList.appendChild(option)
    }
    newGame()
}

function newGame() {
    document.getElementById("playerName").innerHTML = "Player Name: "+currentPlayer[0]
    document.getElementById("questionPrompt").innerHTML = "Here's your question "+currentPlayer[0]+":"
    document.getElementById("btnSubmitAnswer").addEventListener("click", getPlayerAnswer);
    getCategory()
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
}

// =============== SELECT CATEGORY DROPDOWN =============== 
function getCategory() {
    selectElement = document.querySelector("#categoryList");          
    categoryChoice = selectElement.value;
}

// =============== SELECT PLAYER DROPDOWN =============== 
function changePlayer (){
    selectElement = document.querySelector("#playerNameList");          
    currentPlayer[0] = selectElement.value;
    newGame();
}

// =============== NEW GAME BUTTON =============== 
document.querySelector("#btnNewGame").addEventListener("click", newGame)

// =============== NEW PLAYER BUTTON =============== 
document.querySelector("#btnNewPlayer").addEventListener("click", function newPlayer(){
     addNewPlayer()
})

// =============== CHANGE PLAYER BUTTON =============== 
document.querySelector("#btnChangePlayer").addEventListener("click", changePlayer)

// =============== SUBMIT ANSWER BUTTON =============== 
document.getElementById("btnSubmitAnswer").addEventListener("click", getPlayerAnswer);


// =================== START THE GAME =================== 
function gameStart () {
    let text1
    currentPlayer[0] = prompt("Enter player name:", "Name")
    if (currentPlayer[0] == null || currentPlayer == ""){
        text1 = "User cancelled";
    } else {
        document.getElementById("playerName").innerHTML = "Player Name: "+currentPlayer[0]
        document.getElementById("questionPrompt").innerHTML = "Here's your question "+currentPlayer[0]+":"
        // ====== populate playerNameList ======
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

gameStart()
