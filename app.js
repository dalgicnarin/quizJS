function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}





Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}




function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}




Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}




Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}




Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


var q1 = new Question("4+4 ?",["1","8","2","3"],"8");

var q2 = new Question("5+1 ?",["1","2","3","6"],"6");

var q3 = new Question("1+1 ?",["5","2","4","3"],"2");

var q4 = new Question("6+2 ?",["9","8","7","6"],"8");

var questions = [q1,q2,q3,q4];




var quiz = new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.score)
console.log(quiz.isFinish());
