const questions = document.getElementsByClassName('text-question');
const answers = document.getElementsByClassName('text-answer'); 
    
for(let i = 0; i < questions.length; i++ ){
    questions[i].addEventListener("click", function(){
      if(answers[i].style.display = "none"){
          answers[i].style.display = "block";
      }else if (answers[i].style.display = "block"){
          answers[i].style.display = "none";
      };
    })}
