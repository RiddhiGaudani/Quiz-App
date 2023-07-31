const questions = [{
  'question':'Which of the following is Mark-up Language ?',
  'a':'HTML',
  'b':'CSS',
  'c':'JAVASCRIPT',
  'd':'PHP',
  'correct':'a',
},
{
  'question':'in Which year JavaScript was Launched ?',
  'a':'1996',
  'b':'1995',
  'c':'1994',
  'd':'None of Above',
  'correct':'b',

},
{
  'question':' In which year was the ‘C’ programming language developed?',
  'a':'1988',
  'b':'1991',
  'c':'1972',
  'd':'None of Above',
  'correct':'c',
}]

let index = 0;
let total = questions.length;
let right =0;
let wrong = 0;
const queBox= document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
function loadQuestion() {
  if(index===total) {
      return endQuiz()
    }
  reset()
  const data = questions[index]
  queBox.innerText = ` ${index+1}) ${data.question}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}

function SubmitQuiz() {
  const data = questions[index];
  const ans =  getAnswer();
  console.log(ans,data.correct);
  if(ans ==     data.correct) {
        right++;
  }
  else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

function getAnswer() {
  let answer;
    optionInputs.forEach(
      (input) => {
      if(input.checked) {
        answer = input.value;
         }
       }
     )
 return answer;
}

function reset() {
  optionInputs.forEach(
    (input) => {
    input.checked=false

  })

}

const endQuiz = ()=> {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
      <h3>Thank you for playing Quiz</h3>
      <h2>  ${right} / ${total} are correct</h2>
  </div> `


}



loadQuestion();
