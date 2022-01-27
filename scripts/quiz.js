// Fazer um classe que vai inserir as alternativas das perguntas e os métodos que vamos aplicar para o jogo 
//import questions from "./data";


class Quiz {

    constructor(){
        
     
        this.score = 0;
        this.questionCount = 0;
        this.availableQuestion = [...questions]
        this.currentQuestion = {}
       this.MAX_QUESTIONS = 10;
       this.SCORE_POINTS = 100;

        
    }

    start(){
    
       this.getNewQuestion();

    }

    
    getNewQuestion(){
        if(this.availableQuestion.length === 0 || this.questionCount.length >= this.MAX_QUESTIONS){
            return false       
   }

        this.questionCount++
         const questionIndex = Math.floor(Math.random() * this.availableQuestion.length);
        this.currentQuestion = this.availableQuestion[questionIndex];
  
    }

/*     getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
      } */
   /*  isCorrectAnswer(alternative){
        return this.alternative === alternative;
    } */

 /*    getRightAlternatives(answer){
        if(this.currentQuestion().isCorrectAnswer(answer)){
            this.score++
        }
        this.questionCount++
    } */


/*     incrementScore(score){
        // Aqui vou mostrar uma mensagem com o personagem de acordo com o número de alternativas no range 1 - 10 
        getRightAlternatives(score)
       
        // entender como eu posso inputar o progresso aqui dentro
        // fazer uma lógica para incrementar o score aqui
    } */

    endQuiz(){
        return this.currentQuestion >= this.questions.length
        // preciso retornar o questionCount
    }

    
}

//export {Quiz}