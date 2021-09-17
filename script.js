//console.log('connected')

const questionsArray = [ ["Which is a Beatles song?", "Glass Onion"], ["Which is a movie?", "The Onion Field"], ["Which is a vegetable?", "Onion"], ["Which is a news source?", "The Onion"], ["A song by Booker T and the MGs?", "Green Onions"]]
const answersArray = ["", "", "",""]

let playerName

// choose random question
let rQ = parseInt(Math.floor(Math.random()*4))
document.getElementById("question").innerHTML = questionsArray[rQ][0]
console.log(rQ)

// randomly place correct answer
let correctAnswer = parseInt(Math.floor(Math.random()*4))
answersArray[correctAnswer] = questionsArray[rQ][1]
console.log('after correct answer added ', answersArray)

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
        console.log('add a wrong one', answersArray)
    }
}
console.log('after three wrong answers added ', answersArray)


document.querySelector("#ansA").innerHTML = answersArray[0];
document.querySelector("#ansB").innerHTML = answersArray[1];
document.querySelector("#ansC").innerHTML = answersArray[2];
document.querySelector("#ansD").innerHTML = answersArray[3];


document.querySelector("#submitAnswer").addEventListener("click", function getPlayerAnswer() {
      displayRadioValue()
})


function displayRadioValue() {
    var ele = document.getElementsByName('answer');
      
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Answer: "+ele[i].value;
    }
}

