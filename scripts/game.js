// Lógica do DOM 

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
const btnOk = document.getElementById("btnOk");
const btnWrong = document.getElementById("btnWrong")
const alternativeContainer = document.getElementsByClassName("alternatives-container")

const showModalVictory = document.getElementById("modalVictory") 
const showModalDefeat = document.getElementById("modalDefeat")
const soundVictory = new Audio("./audio/victory_sound.mp3")
const soundDefaut = new Audio("./audio/defeat_sound.mp3")


quiz.start();

// Pega a pergunta
question.innerText = quiz.currentQuestion.text

// Pega um array com as alternativas
let alternativas = quiz.currentQuestion.alternative
// Pega a resposta certa
let resposta = quiz.currentQuestion.answer
// Pega o id da pergunta
let idPergunta = quiz.currentQuestion.id

for(let i = 0; i < alternativeContainer.length; i++){
    const span = ` <p class = "alternative-option">${i + 1}</p>
    <span class="alternative-text" id="option">${alternativas[i]}</span>`

    alternativeContainer[i].innerHTML = span
    
}



choice.addEventListener("click", (event) => {
    const responseGame = event.target.innerText;
    if(responseGame === resposta){
    /* 
        event.path[1].classList.remove("alternatives-container") */

        const elemento = event.target

        elemento.classList.remove("alternatives-container")
        elemento.classList.add("correct")
        incrementScore(quiz.SCORE_POINTS)
        //event.target.classList.remove("correct")
        //incrementScore(quiz.SCORE_POINTS)
        // Usar o quiz.questionCount para aumentar a progressBar    
        /* btnOk.classList.toggle("no-show")
        btnOk.classList.toggle("show") */

    } else{
        event.target.classList.remove("alternatives-container")
        event.target.classList.add("incorrect")

       // event.target.classList.remove("incorrect")
        incrementScore(quiz.SCORE_POINTS - 100)
        /* btnOk.classList.toggle("no-show")
        btnOk.classList.toggle("show") */

    }

 })


 const qttQuestion = []

 


btnOk.addEventListener("click", () => {

    quiz.getNewQuestion()

question.innerText = quiz.currentQuestion.text

    // Pega um array com as alternativas
    alternativas = quiz.currentQuestion.alternative
 
    // Pega a resposta certa
    resposta = quiz.currentQuestion.answer

    idPergunta = quiz.currentQuestion.id
    qttQuestion.push(idPergunta)

for(let i = 0; i < alternativeContainer.length; i++){
    const span = `
    <p class = "alternative-option">${i + 1}</p>
    <span class="alternative-text" id="option">${alternativas[i]}</span>
   `

    alternativeContainer[i].innerHTML = span
}


progressText.innerText = `Pergunta ${qttQuestion === [] ? 0 : qttQuestion.length+1} of ${quiz.MAX_QUESTIONS}`;

progressBarFull.style.width = `${(qttQuestion.length /quiz.MAX_QUESTIONS)*100}%`; 

console.log("AQUIII",qttQuestion)

}) 


const incrementScore = (numScore) => {
    quiz.score += numScore
    scoreText.innerText = quiz.score
}








/* function checkGameResult() {
    // verifica se ganhou ou perdeu o jogo 
     if (quiz.isWonTheGame()) {
         showModalVictory.classList.add('show')
         soundVictory.play()
         showModalVictory.addEventListener('click',() => {
             showModalVictory.classList.remove("show")
             restart()
         })
     } else if (game.isLostTheGame()) {
         showModalDefeat.classList.add('show')
         soundDefaut.play()
         showModalDefeat.addEventListener('click',() => {
             console.log("Showing modal defeat")
             showModalDefeat.classList.remove("show")
             restart()
         })
     }
 } */



/* if(quiz.SCORE_POINTS >= 1000){
    const vitoria = `<div class="displayModal"> 
    <img src="" alt="Voce é tal personagem"/>
        </div>`
       return modal.insertAdjacentHTML("beforeend",vitoria)
} else {
    const perdeu = `<div class="displayModal"> 
    <img src="images/win.png" alt="Voce é tal personagem"/>
        </div>`
        return modal.insertAdjacentHTML("beforeend", perdeu)
} */


    // Pega as alternativas, cria o html e as coloca em ordem
/* const response = alternativas.map((alternativa, index) => {
    

    const span = ` <p class = "alternative-option">${index + 1}</p>
    <span class="alternative-text" id="option">${alternativa}</span>`

    return choice.insertAdjacentHTML("beforeend", span)

    // colocar um if que não permita que outra alternativa seja escolhida    
})
 */