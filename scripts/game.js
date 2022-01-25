// Lógica do DOM 

// Instanciando a classe
const quiz = new Quiz();


// Pegando os elementos que vamos usar para criar a lógica do DOM

const question = document.getElementById("question");
// Será que eu posso usar o Array.from
const alternatives = document.querySelectorAll(".alternative-text");
const progressText = document.getElementById("textProgress");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressFull");
const game = document.getElementById("quiz");
const MAX_QUESTIONS = 10;
const SCORE_POINTS = 100;




function startGame(){
    start();
}

function endGame(){
    endQuiz()
    // usar um modal para pegar os personagens de acordo com a pontuação e usar um if else if
}