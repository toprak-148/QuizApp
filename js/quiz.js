class Quiz{
    constructor(quenstions) { 
        this.quizIndex = 0;
        this.quenstions = quenstions;
    }
}

Quiz.prototype.getQuiz = function()
{
    return this.quenstions[this.quizIndex];
}
export default Quiz;