import Questions from './soru.js';
import Quiz  from './quiz.js';
import UI  from './UserInterface.js';


const quenstions= [
    new Questions("1-Hangisi Js paket yönetimi uygulamasıdır ? ",{a:"Node.js",b:"Typescript",c:"Nuget",d:"Npm"},"d"),
    new Questions("2-Hangisi frontend kapsamında değerlendirilmez ? ",{a:"css",b:"html",c:"javascript",d:"sql"},"d"),
    new Questions("3-Hangisi backend kapsamında değerlendirilir? ",{a:"java",b:"javascript",c:"angular",d:"sql"},"a"),
    new Questions("4-Hangisi Js programlama dilini kullanmaz ?",{a:"react",b:"angular",c:"asp.Net",d:"vuejs"},"c")

];


const quiz = new Quiz(quenstions);
const ui = new UI();


ui.btnStart.addEventListener("click",function(){
    startTimer(10);
    startTimerLine();
    ui.quizBox.classList.add('active');
    ui.btnBox.classList.remove('active');
    ui.quizShow(quiz.getQuiz());
    ui.showNumberOfQuestions(quiz.quizIndex + 1 ,quiz.quenstions.length);
    ui.btnNext.classList.remove("show");


})

ui.btnNext.addEventListener("click",function(){
     if(quiz.quenstions.length != quiz.quizIndex)
    {   
        startTimer(10);
        startTimerLine();
        ui.quizShow(quiz.getQuiz());
        ui.showNumberOfQuestions(quiz.quizIndex + 1 ,quiz.quenstions.length);
        ui.btnNext.classList.remove("show");
    }
    else{
        ui.scoreBox.classList.add("active");
        ui.quizBox.classList.remove("active");
        ui.showScore(quiz.numberCorrectAnswer,quiz.quenstions.length)
    }

})


function optionSelected(e)
{
    clearInterval(counter);  
    clearInterval(counterLine);
    
    let selectedElement = e.target;
    if(selectedElement.nodeName=="SPAN");
    {
        selectedElement = selectedElement.parentElement;
    }


    const cevap = e.target.textContent[0];
    const soru = quiz.getQuiz();
    if(soru.checkAnswer(cevap))
    {
        ui.numberCorrectAnswer += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);

    }

    else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }

    quiz.quizIndex += 1;
    ui.disableAllOption();
    ui.btnNext.classList.add('show');


}


ui.btnQuit.addEventListener("click",function(){
    window.location.reload();
})

ui.btnQuit.addEventListener("click",function(){
    quiz.quizIndex = 0;
    quiz.numberCorrectAnswer = 0;
    //start button
    ui.btnStart.click();
    ui.scoreBox.classList.remove("active");


})
let counter;
function startTimer(time)
{
    counter = setInterval(timer,1000);
    function timer()
    {
        ui.timeSecond.textContent = time;
        time--;
        if(time < 0)
        {
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti";
            ui.disableAllOption();
            quiz.quizIndex += 1;
            ui.btnNext.classList.add('show');


        }
    }
}


let counterLine;
function startTimerLine()
{
    let line_width = 0;

    counterLine = setInterval(timer,20);

    function timer()
    {
        line_width += 1;
        ui.timeLine.computedStyleMap.window = line_width + "px";

        if(line_width > 549)
        {
            clearInterval(counterLine);
        }
    }
}

export { optionSelected }; // Fonksiyonu dışa aktarıyoruz