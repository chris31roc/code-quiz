const question = document.querySelector("#questions");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score-text");
const scoreValue = document.querySelector("#score-value")
// var questions = document.querySelector("questions");


let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
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

const scorePoints = 100;
const maxQuestions = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    newQuestion()
}

newQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem("recentScore", score)
        return window.location.assign("/end.html")
    }    

        questionCounter++
        
        const questionIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]
        questions.innerText = currentQuestion.question

        choices.forEach(choice => {
            const number = choice.dataset["number"]
            choice.innerText = currentQuestion["choice" + number]
        })


    
    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = "True"
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return
    

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset("number")

        let classToApply = selectedAnswer === currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            newQuestion()
        }, 1000)
    })    
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz()