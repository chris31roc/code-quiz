var questions = document.querySelector("questions");
var choices = Array.from(document.querySelectorAll("choice-text"));
var scoreText = document.querySelector("questions");
var questions = document.querySelector("questions");
var questions = document.querySelector("questions");


var currentQuestion = {};
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "What Year Was Christopher Born In?",
        choice1: "1979",
        choice2: "1990",
        choice3: "2000",
        choice4: "1987",
        answer: 2,

    },
    {
        question: "What College Did Christopher Attend?",
        choice1: "Oregon State University",
        choice2: "Howard University",
        choice3: "Winston-Salem State University",
        choice4: "University of North Carolina Chapel Hill",
        answer: 3,

    },
    {
        question: "Christopher's Favorite NFL Team?",
        choice1: "Chicago Bears",
        choice2: "Washington Football Team",
        choice3: "New England Patriots",
        choice4: "Dallas Cowboys",
        answer: 4,

    },
    {
        question: "What is Christopher's Favorite Movie?",
        choice1: "Pulp Fiction",
        choice2: "Interstellar",
        choice3: "Scarface",
        choice4: "Friday Night Lights",
        answer: 1,

    },
    {
        question: "What City Was Christopher Born In?",
        choice1: "Atlanta",
        choice2: "Tokyo",
        choice3: "Washington D.C.",
        choice4: "Los Angeles",
        answer: 3,

    },
];

var scorePoints = 100;
var maxQuestions = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0
    availableQuestions = [ questions]
    NewQuestion()
}

newQueestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > maxQuestions) {
        localStorage.setItem("recentScore", score)
        return window.location.assign("/end.html")

        questionCounter++
        var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestions = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question
    }
}