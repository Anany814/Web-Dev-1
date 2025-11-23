
// Name: Aditya Arya
// Roll No: 2501350072
// Course: B.Tech CS (FSD)
// Section: B

// JavaScript Console Quiz Game

function startQuiz() {
    const questions = [
        { question: "What is the capital of France?", answer: "paris" },
        { question: "What planet do we live on?", answer: "earth" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the largest mammal?", answer: "blue whale" }
    ];

    let score = 0;

    alert("Welcome to the JavaScript Console Quiz!\nGood luck!");

    for (let i = 0; i < questions.length; i++) {
        let userInput = prompt(questions[i].question);

        // Check if the user cancels the input
        if (userInput === null) {
            alert("Quiz cancelled.");
            return;
        }

        userInput = userInput.toLowerCase().trim();

        if (userInput === questions[i].answer) {
            alert("Correct! ");
            score++;
        } else {
            alert(`Incorrect! The correct answer was: ${questions[i].answer}`);
        }
    }

    alert(`Quiz complete!\nYour final score: ${score} / ${questions.length}`);
}

startQuiz();
