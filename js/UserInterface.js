import Quiz from "./quiz.js";
import { optionSelected } from './script.js'; // Fonksiyonu içe aktarıyoruz
class UI{

    constructor(){ 
        this.quizBox = document.querySelector("#quiz-box")
        this.body = document.querySelector("#quiz-box #body");
        this.correctIcon = '<i class="bi bi-check-circle"></i>';
        this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';
        this.btnStart = document.querySelector(".btn-start");
        this.btnBox = document.querySelector(".button-box");
        this.scoreBox = document.querySelector("#score-box")
        this.btnNext = document.querySelector(".btn-next");
        this.numberCorrectAnswer = 0;
        this.btnReplay = document.querySelector(".btn-replay");
        this.btnQuit = document.querySelector(".btn-quit");
        this.timeText = document.querySelector(".time-text");
        this.timeSecond = document.querySelector(".time-second");
        this.timeLine = document.querySelector(".time-line");
    }

}

UI.prototype.quizShow = function(question)
{
    this.body.innerHTML = "";
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title =document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = question.questionText;
    
    const optionList = document.createElement("div");
    optionList.classList.add("option-list");

    for(let [key,value] of Object.entries(question.answerOptions)){
        const option = document.createElement("div");
        option.classList.add("options");
        option.addEventListener("click", optionSelected);


        const span = document.createElement("span");
        span.textContent = key + ")" + value;

        option.appendChild(span);
        optionList.appendChild(option);

    }

    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

    this.body.appendChild(cardBody);
}



UI.prototype.disableAllOption = function() {
    const options = document.querySelectorAll(".options");
    for(let option of options) {
        option.classList.add("disabled");
    }
}

UI.prototype.showNumberOfQuestions = function(questionIndex,totalNumberQuestions)
{
    const tag = `<span class = 'badge text-bg-danger'>${questionIndex} / ${totalNumberQuestions} </span>`
    document.querySelector(".question-index").innerHTML = tag;


}


UI.prototype.showScore= function(numberOfAnswer,totalQuestion)
{
    const tag = `Toplam ${totalQuestion} soruda ${numberOfAnswer} doğru cevap verdiniz`;

    document.querySelector('.score-text').innerHTML = tag;


}
 

 

export default UI;
