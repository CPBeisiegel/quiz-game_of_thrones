// Lógica do DOM 
//import {Quiz} from "./quiz";
// Instanciando a classe
const quiz = new Quiz();


// Pegando os elementos que vamos usar para criar a lógica do DOM

const question = document.getElementById("question");
// Será que eu posso usar o Array.from
const alternatives = document.querySelectorAll(".alternative-text");
const option = document.querySelectorAll(".alternative-option")
const progressText = document.getElementById("textProgress");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressFull");
const game = document.getElementById("quiz");
const choice = document.getElementById("choices")



quiz.start();

question.innerText = quiz.currentQuestion.text

let alternativas = quiz.currentQuestion.alternative
let resposta = quiz.currentQuestion.answer

const response = alternativas.map((alternativa, index) => {
    

    const span = ` <div class = "alternatives-container">
    <p class = "alternative-option">${index + 1}</p>
    <span class="alternative-text" id="option">${alternativa}</span>
     </div>`

    return choice.insertAdjacentHTML("beforeend", span)
})


choice.addEventListener("click", (event) => {
    const responseGame = event.target.innerText;
    if(responseGame === resposta){
       
        event.path[1].classList.remove("alternatives-container")
        event.path[1].classList.add("correct")
    } else{
        event.path[1].classList.remove("alternatives-container")
        event.path[1].classList.add("incorrect")
        // fazer o settimeout para terminar
        settimeout()
    }

})

progressText.innerText = `Pergunta ${quiz.questionCount} of ${quiz.MAX_QUESTIONS}`;
progressBarFull.style.width = `${(quiz.questionCount/quiz.MAX_QUESTIONS) * 100}%`; 




    // adicionar um addEventListener para chamar o getRightAlternatives e mostrar a alterntiva correta e a alternativa errada caso a pessoa erre usando um if/ else 
    // usar o toggle para mostrar o local com a cor
    // usar settimeout para termos chance de mostrar antes de mudar para a proximma pergunta
    // usar o appendChild para colocar o quiz 
/*      alternatives.forEach((currentAlternative) => {
        // aqui dentro eu preciso fazer uma lógica para pegar as alternativas 
        currentAlternative.addEventListener("click",() => {
            if(alternatives.isCorrectAnswer)
            currentAlternative.classList.toggle("correct");
            currentAlternative.classList.toggle("incorrect");
        })
    }) */
 

/* function endGame(){
    quiz.endQuiz()
    // usar um modal para pegar os personagens de acordo com a pontuação e usar um if else if
} */


