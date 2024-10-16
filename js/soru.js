class Questions{
    constructor(questionText,answerOptions,trueAnswer)
    {
        this.questionText = questionText;
        this.answerOptions = answerOptions;
        this.trueAnswer = trueAnswer;
    }

}

Questions.prototype.checkAnswer = function(answer)
{
    return answer === this.trueAnswer;
}

export default Questions;