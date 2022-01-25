// Fazer um classe que vai inserir as alternativas das perguntas e os métodos que vamos aplicar para o jogo 

class Question{
    constructor(text, alternatives, options){
        this.text = text;
        this.alternatives = alternatives;
        this.options = options;
    }

    isCorrectAnswer(alternative){
        return this.alternative === alternative;
    }

}

class Quiz extends Question{

    constructor(text, alternatives, options){
        super(text, alternatives, options);
        this.score = 0;
        this.currentQuestionIndex = 0;
        
    }

    start(){
        getCurrentQuestion(questions);
        showScore()

    }

    // Isso vai ser um callback para quando formos pegar as perguntas no arquivo data
    getCurrentQuestion(questions){
        return this.questions[this.currentQuestionIndex]
    }

    getRightAlternatives(answer){
        if(this.currentQuestion().isCorrectAnswer(answer)){
            this.score++
        }
        this.currentQuestionIndex++
    }


    showScore(score,progress){
        // Aqui vou mostrar uma mensagem com o personagem de acordo com o número de alternativas no range 1 - 10 
        getRightAlternatives(score)
        this.progress = this.currentQuestionIndex++
        // entender como eu posso inputar o progresso aqui dentro
    }

    endQuiz(){
        return this.currentQuestion >= this.questions.length
    }

    
}