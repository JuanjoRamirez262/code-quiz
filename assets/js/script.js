var questionDisplay = document.querySelector("#question");
var answer1Display = document.querySelector("#answer1");
var answer2Display = document.querySelector("#answer2");
var answer3Display = document.querySelector("#answer3");
var answer4Display = document.querySelector("#answer4");
var quizBox = document.querySelector(".quiz");
var quizTimer = document.querySelector("#timerCountdown");
var startBtn = document.querySelector("#start-btn")
var score = 0;
var timerCountdown = 60;
var actualQuizQuestion = 0;

var questionsArray = [
    {
        question: "Question #1",
        answer1: "Good anwer",
        answer2: "Bad answer",
        answer3: "Bad answer",
        answer4: "Bad answer",
        correctAnswerIndex: "1"
    }, {
        question: "Question #2",
        answer1: "Bad answer",
        answer2: "Good anwer",
        answer3: "Bad answer",
        answer4: "Bad answer",
        correctAnswerIndex: "2"
    }, {
        question: "Question #3",
        answer1: "Bad answer",
        answer2: "Bad answer",
        answer3: "Good anwer",
        answer4: "Bad answer",
        correctAnswerIndex: "3"
    }, {
        question: "Question #4",
        answer1: "Bad answer",
        answer2: "Bad answer",
        answer3: "Bad answer",
        answer4: "Good anwer",
        correctAnswerIndex: "4"
    }, {
        question: "Question #5",
        answer1: "Good anwer",
        answer2: "Bad answer",
        answer3: "Bad answer",
        answer4: "Bad answer",
        correctAnswerIndex: "1"
    }];

var questionArrayLenght = questionsArray.length

startBtn.addEventListener("click", startQuiz)

quizBox.addEventListener("click", function(event){
    var element = event.target;
    

    if (element.matches(".answerBox")){
        var answerNumber = element.getAttribute("answer-number")
        // console.log(answerNumber);
         var answerChecked = checkAnswer(answerNumber, actualQuizQuestion);
         if(answerChecked){
             score++
         } else {
            timerCountdown -= 5
         }
        nextQuestion();
    }
});

function checkAnswer(answerElement, questionJSON){
    if (answerElement == questionJSON.correctAnswerIndex ){
        return true
    } else {
        return false
    }
};

function randomQuestion() {
    var randomQuestionJSON = questionsArray[Math.floor(Math.random() * questionArrayLenght)];
    return randomQuestionJSON; // Q, A1, A2, A3, A4, CA
};

function displayRandomQuestion(questionJSON) {
    questionDisplay.textContent = questionJSON.question;
    answer1Display.textContent = "1. " + questionJSON.answer1;
    answer2Display.textContent = "2. " + questionJSON.answer2;
    answer3Display.textContent = "3. " + questionJSON.answer3;
    answer4Display.textContent = "4. " + questionJSON.answer4;
};

function changeState() {
    quizBoxState = quizBox.getAttribute("data-state");
    if (quizBoxState == "hidden"){
        quizBox.setAttribute("data-state", "shown")
        quizBox.style.display = "block";
        
        quizTimer.setAttribute("data-state", "shown")
        quizTimer.style.display = "block";

    } else if (quizBoxState == "shown"){
        quizBox.setAttribute("data-state", "hidden");
        quizBox.style.display = "none";

        quizTimer.setAttribute("data-state", "hidden");
        quizTimer.style.display = "none";
    }
};

function changeStartBtnState() {
    startBtnState = startBtn.getAttribute("data-state");
    if (startBtnState == "hidden"){
        startBtn.setAttribute("data-state", "shown")
        startBtn.style.display = "block";
    } else if (startBtnState == "shown"){
        startBtn.setAttribute("data-state", "hidden");
        startBtn.style.display = "none";
    }
}

function startQuiz(){
    actualQuizQuestion = randomQuestion();
    displayRandomQuestion(actualQuizQuestion);
    changeState();
    changeStartBtnState();
    setTimer();
};

function nextQuestion(){
    actualQuizQuestion = randomQuestion();
    displayRandomQuestion(actualQuizQuestion);
};

function setTimer(){
    timerCountdown = 20;

    var timerInterval = setInterval(function() {
        timerCountdown--;
        quizTimer.textContent = timerCountdown + " secs"

        if(timerCountdown < 0){
            clearInterval(timerInterval)

            changeState();
            //TODO: stop quiz
        }
    }, 1000);
}
