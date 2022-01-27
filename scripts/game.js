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


quiz.start();

// Pega a pergunta
question.innerText = quiz.currentQuestion.text

// Pega um array com as alternativas
let alternativas = quiz.currentQuestion.alternative
// Pega a resposta certa
let resposta = quiz.currentQuestion.answer
// Pega o id da pergunta
let idPergunta = quiz.currentQuestion.id


// Pega as alternativas, cria o html e as coloca em ordem
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
        incrementScore(quiz.SCORE_POINTS)
        // Usar o quiz.questionCount para aumentar a progressBar
        console.log(quiz.questionCount++)
       

    } else{
        event.path[1].classList.remove("alternatives-container")
        event.path[1].classList.add("incorrect")
        incrementScore(quiz.SCORE_POINTS - 80)
        // fazer o settimeout para terminar
        //settimeout(() => { })
    }

})

const incrementScore = (numScore) => {
    quiz.score += numScore
    scoreText.innerText = quiz.score
}

progressText.innerText = `Pergunta ${quiz.questionCount} of ${quiz.MAX_QUESTIONS}`;
progressBarFull.style.width = `${(quiz.questionCount/quiz.MAX_QUESTIONS) * 100}%`; 


    // adicionar um addEventListener para chamar o getRightAlternatives e mostrar a alterntiva correta e a alternativa errada caso a pessoa erre usando um if/ else 
    // usar o toggle para mostrar o local com a cor
    // usar settimeout para termos chance de mostrar antes de mudar para a proximma pergunta

/* 
 quiz.endQuiz()
 // usar um modal para pegar os personagens de acordo com a pontuação e usar um if else if
 */

/* MODAL */

              // vai retornar um modal com o personagem
            /* 
            
    <div id="modalPersonagem" class="modalBackground">     <!--  tela preta fundo -->
        <div class="displayModal">  <!--  aparecer imagem ou botao  -->
            <img src="images/win.png" alt="Voce [e tal personagem"/>
        </div> 
    </div>
            
            */