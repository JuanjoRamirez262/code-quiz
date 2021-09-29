var questionDisplay = document.querySelector("#question");
var answer1Display = document.querySelector("#answer1");
var answer2Display = document.querySelector("#answer2");
var answer3Display = document.querySelector("#answer3");
var answer4Display = document.querySelector("#answer4");
var quizBox = document.querySelector(".quiz");
var quizTimer = document.querySelector(".timer");
var startBtn = document.querySelector(".start")
var yourScore = document.querySelector("#your-score");
var saveScore = document.querySelector(".save-score");
var submitScore = document.querySelector("#submit-score");
var scoreInitials = document.querySelector("#score-initials");
var scoreForm = document.querySelector("#scoreForm")
var highScoreBoard = document.querySelector(".score-board");
var top1 = document.querySelector("#top1");
var top2 = document.querySelector("#top2");
var top3 = document.querySelector("#top3");
var score = 0;
var timerCountdown = 60;
var actualQuizQuestion = 0;
var highScores = JSON.parse(localStorage.getItem("highscore")); // highScores = {highscores=[{h1={name:name, score:score}}, {h2}, {h3}, {AS}]}


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

quizBox.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches(".answerBox")) {
        var answerNumber = element.getAttribute("answer-number")
        var answerChecked = checkAnswer(answerNumber, actualQuizQuestion);
        if (answerChecked) {
            score++
        } else {
            timerCountdown -= 5
        }
        nextQuestion();
    }
});

scoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var actualScore = {
        name: scoreInitials.value,
        score: score
    }
    highScores.scoreBoard.push(actualScore);
    sortAndDeleteLowerScore();
    hideSaveScore();
    showStartBtn();
    showScoreBoard();
});

function sortAndDeleteLowerScore() {
    highScores.scoreBoard.sort((a, b) => {
        return new Date(b.score) - new Date(a.score);
    })
    highScores.scoreBoard.splice(highScores.scoreBoard.length - 1, 1)
    localStorage.setItem("highscore", JSON.stringify(highScores));
};

function checkAnswer(answerElement, questionJSON) {
    if (answerElement == questionJSON.correctAnswerIndex) {
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

function showQuizAndTimer() {
    quizBox.style.display = "block";
    quizTimer.style.display = "block";
};

function hideQuizAndTimer() {
    quizBox.style.display = "none";
    quizTimer.style.display = "none";
};

function showStartBtn() {
    startBtn.style.display = "block";
};

function hideStarBtn() {
    startBtn.style.display = "none";
};

function showSaveScore() {
    saveScore.style.display = "block";
};

function hideSaveScore() {
    saveScore.style.display = "none";
};

function startQuiz() {
    score = 0;
    actualQuizQuestion = randomQuestion();
    displayRandomQuestion(actualQuizQuestion);
    showQuizAndTimer();
    hideStarBtn();
    hideScoreBoard();
    hideSaveScore();
    setTimer();
};

function nextQuestion() {
    actualQuizQuestion = randomQuestion();
    displayRandomQuestion(actualQuizQuestion);
};

function setTimer() {
    timerCountdown = 60;

    var timerInterval = setInterval(function () {
        timerCountdown--;
        quizTimer.textContent = timerCountdown + " seconds"

        if (timerCountdown < 0) {
            clearInterval(timerInterval)

            hideQuizAndTimer();
            showStartBtn();
            showSaveScore();
            //TODO: stop quiz
            showActualScore();
        }
    }, 1000);
};

function showActualScore() {
    yourScore.textContent = "Your score: " + score
};

function showScoreBoard() {
    highScoreBoard.style.display = "block";
    if (highScores.scoreBoard.length > 0) {
        top1.textContent = "Top 1: " + highScores.scoreBoard[0].name + " with " + highScores.scoreBoard[0].score + " points";
    }
    if (highScores.scoreBoard.length > 1) {
        top2.textContent = "Top 2: " + highScores.scoreBoard[1].name + " with " + highScores.scoreBoard[1].score + " points";
    }
    if (highScores.scoreBoard.length > 2) {
        top3.textContent = "Top 3: " + highScores.scoreBoard[2].name + " with " + highScores.scoreBoard[2].score + " points";
    }
}
function hideScoreBoard() {
    highScoreBoard.style.display = "none"
}