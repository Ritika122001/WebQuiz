const quizdata=[
   {  question: "The default value will be consider in switch statement  when",
        a:"Multiple Cases are right",
         b:"No case is right",
         c: " Single case is right",
         d:" All cases are right",
         correct:"c"


   },

   

{


    question: "What does CSS stand for?",
    a:"Colorful Style Sheets",
     b:"Cascading Style Sheets",
     c: "Creative Style Sheets",
     d:"Computer Style Sheets",
     correct:"b"

},


{
    question: "Third Component in algorithms is classified as",
    a:"Data repetition",
     b:"statement repetition",
     c: "Selection",
     d:" Stating order of operations",
     correct:"c"

   },
  

{


    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    a:"In the <body> section",
     b:"In the <head> section",
     c: "At the end of the document",
     d:"None of these",
     correct:"b"

},

{


    
    question: "Inside which HTML element do we put the JavaScript?",
    a:"<script>",
     b:"<scripting>",
     c: "<javascript>",
     d:"<js>",
     correct:"a"
}




]

const questionel= document.getElementById("question");
const quiz = document.getElementById("quiz");
const answereles = document.querySelectorAll(".answer");
let score=0;

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbutton = document.getElementById("submit");       
let currentquiz = 0;


loadquestion();

function loadquestion()
{ deselect();
   
    const currentquizdata = quizdata[currentquiz];
    questionel.innerText = currentquizdata.question;
   
    a_text.innerText= currentquizdata.a;
    b_text.innerText= currentquizdata.b;
    c_text.innerText= currentquizdata.c;
    d_text.innerText= currentquizdata.d;


   
}


function getselected()
{

    let answer =  undefined;

    answereles.forEach((answerEl)=>{

        if(answerEl.checked)
        {

            answer =  answerEl.id;
        
    }
});

    return answer;
}

function deselect()
{

    answereles.forEach((answerEl)=>{

        {
            answerEl.checked=false;
        }
    });
  

}






submitbutton.addEventListener("click", () => {
   

    const answer= getselected();
    
    if(answer)

    {
        
        if(answer==quizdata[currentquiz].correct)
        {
          
          score++;
         
         
         
          if(score==1)
          {
             var emoji= "🙁 (You can do better!)";
          }

          if(score==2)
          {
             var emoji= "😕(You can do better!)";
          }

          if(score==3)
          {
             var emoji= "🙂 (Keep it Up!)";
          }

          if(score==4)
          {
             var emoji= "😁 (Great!)";
          }
          if(score==5)
          {
             var emoji= "🎉😄 (Excellent!)";
          }




          }


          currentquiz++;
        if(currentquiz < quizdata.length)
        {
            loadquestion();
        }
         else{
           
             quiz.innerHTML= `<h1> Your score is : ${score}/ ${quizdata.length}  ${emoji} </h1>  
             <button onclick="location.reload()">Reload</button>`;
             
         }
    }

   
});