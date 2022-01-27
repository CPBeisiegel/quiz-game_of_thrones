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
        if(this.availableQuestion.length === 0 ){
          this.endQuiz()      
   }

        this.questionCount++
         const questionIndex = Math.floor(Math.random() * this.availableQuestion.length);
        this.currentQuestion = this.availableQuestion[questionIndex];
        this.availableQuestion.splice(questionIndex, 1);
  
    }

    nextQuestion(){
        settimeout(() => {
            this.getNewQuestion()
         },3000)
    }


    endQuiz(){
        window.alert("Acabou")
    }

    
}

//export {Quiz}