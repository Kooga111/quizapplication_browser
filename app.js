const quiz = [
  {
    question : 'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
    answers : [
      'スーパーファミコン', 
      'プライステーション2', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  }, {
    question : '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers : [
      'Mother2', 
      'スーパーマリオブラザーズ3', 
      'スーパードンキーコング', 
      '星のカービィ'
    ],
    correct:'Mother2'

  }, {
    question : 'ファイナルファンタジー４の主人公の名前は？',
    answers : [
      'フリオニール', 
      'クラウド', 
      'ティーダ', 
      'セシル'
    ],
    correct:'セシル',
  }
];

const quizLength = quiz.length;
let quizIndex = 0;


const $button = document.getElementsByTagName('button');  
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  }

setupQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
  }else{
    window.alert('不正解!');
  }
  quizIndex++;

  if (quizIndex < quizLength){
    setupQuiz();
  }else{

    window.alert('完了');

  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
   });
  handlerIndex++;
};