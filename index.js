const questions = document.getElementsByClassName('text-question');
const answers = document.getElementsByClassName('text-answer'); 


for(let i = 0; i < questions.length; i++ ){
    questions[i].addEventListener("click", function(){
      console.log("salut");
      console.log(i);
    if(answers[i].style.display == "none"){
          questions[i].style.fontWeight="bold";
          answers[i].style.display = "block";
      }else{
          answers[i].style.display = "none";
          questions[i].style.fontWeight= "normal";
      };
    })}
