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
        event.target.classList.add("correct")
        //event.target.classList.remove("correct")
        incrementScore(quiz.SCORE_POINTS)
        // Usar o quiz.questionCount para aumentar a progressBar    
        btnOk.classList.toggle("no-show")
        btnOk.classList.toggle("show")

    } else{
      /*   event.path[1].classList.remove("alternatives-container") */
        event.target.classList.add("incorrect")
       // event.target.classList.remove("incorrect")
        incrementScore(quiz.SCORE_POINTS - 100)
        btnOk.classList.toggle("no-show")
        btnOk.classList.toggle("show")

    }

})

btnOk.addEventListener("click", () => {
    btnOk.classList.toggle("no-show")
    btnOk.classList.toggle("show")
    console.log(quiz.questionCount++)
    quiz.getNewQuestion()

question.innerText = quiz.currentQuestion.text

    // Pega um array com as alternativas
    alternativas = quiz.currentQuestion.alternative
    console.log(alternativas)
    // Pega a resposta certa
    resposta = quiz.currentQuestion.answer
    // Pega o id da pergunta
    idPergunta = quiz.currentQuestion.id

for(let i = 0; i < alternativeContainer.length; i++){
    const span = ` <p class = "alternative-option">${i + 1}</p>
    <span class="alternative-text" id="option">${alternativas[i]}</span>`

    alternativeContainer[i].innerHTML = span
}


}) 


const incrementScore = (numScore) => {
    quiz.score += numScore
    scoreText.innerText = quiz.score
}

/* btnOk.onclick = progress(quiz.questionCount)

const progress = (count) => {
    quiz.questionCount += count
    progressText.innerText = `${quiz.questionCount}`

} */


progressText.innerText = `Pergunta ${quiz.questionCount} of ${quiz.MAX_QUESTIONS}`;
progressBarFull.style.width = `${(quiz.questionCount/quiz.MAX_QUESTIONS)*100}%`; 


    
endQuiz()

/* MODAL */

              // vai retornar um modal com o personagem
            /* 
            
    <div id="modalPersonagem" class="modalBackground">     <!--  tela preta fundo -->
        <div class="displayModal">  <!--  aparecer imagem ou botao  -->
            <img src="images/win.png" alt="Voce [e tal personagem"/>
        </div> 
    </div>
            
            */




    // Pega as alternativas, cria o html e as coloca em ordem
/* const response = alternativas.map((alternativa, index) => {
    

    const span = ` <p class = "alternative-option">${index + 1}</p>
    <span class="alternative-text" id="option">${alternativa}</span>`

    return choice.insertAdjacentHTML("beforeend", span)

    // colocar um if que não permita que outra alternativa seja escolhida    
})
 */