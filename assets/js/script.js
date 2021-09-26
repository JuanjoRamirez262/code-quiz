var questionDisplay = document.querySelector("#question")
var answer1Display = document.querySelector("#aswer1")
var answer2Display = document.querySelector("#aswer2")
var answer3Display = document.querySelector("#aswer3")
var answer4Display = document.querySelector("#aswer4")

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

function randomQuestion() {
    var randomQuestionJSON = questionsArray[Math.floor(Math.random() * questionArrayLenght)]
    return randomQuestionJSON // Q, A1, A2, A3, A4, CA
};

function displayRandomQuestion(questionJSON) {
    questionDisplay.textContent = questionJSON.question;
    answer1Display.textContent = "1. " + questionJSON.answer1;
    answer2Display.textContent = "2. " + questionJSON.answer2;
    answer3Display.textContent = "3. " + questionJSON.answer3;
    answer4Display.textContent = "4. " + questionJSON.answer4;
}

displayRandomQuestion(randomQuestion());