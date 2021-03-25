const quiz = [
   {question:"みんなの忠昭の誕生日は次のうちどれ？？",
    answers : ["8月12日","8月13日","8月14日","8月15日"],
    correct :"8月14日"
   },
   {question:"みんなの忠昭の苦手な食べ物は次のうちどれ？？",
    answers : ["カリフラワー","粒あん","らっきょう","ライチ"],
    correct :"ライチ"
   },
   {question:"みんなの忠昭が一番得意だと思っているバスケの技は？？",
    answers : ["ダブルクラッチ","フェイダウェイシュート","スピンムーブ","ダンクシュート"],
    correct :"スピンムーブ"
   }
 ];

 const quizLength = quiz.length;
 let quizIndex = 0;
 let score = 0;
 
 const $button = document.getElementsByTagName("button");
 let buttonLength = $button.length;
 
 //クイズの問題文、選択肢を定義
 const setupQuiz = () => {
    document.getElementById("js-question") .textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers [buttonIndex];
      buttonIndex++;
    }
 }
 setupQuiz();
 
 //ボタンをクリックしたら正誤判定
 const clickHandler = (e) => {
   if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
   }else{
    window.alert("不正解！");
   }
   
   quizIndex++;
   
   if(quizIndex < quizLength){
   //問題があればこちらを実行
    
    setupQuiz();
    
   }else{
   //問題がなければこちらを実行
    window.alert("終了！！！あなたの正解数は" + score + "/" + quizLength + "です！");
   }
 };
 
 let handlerIndex = 0;
 while(handlerIndex < buttonLength){
   $button[handlerIndex].addEventListener("click",(e)=>{
     clickHandler(e);
  })
  handlerIndex++;
 }
 
 
 
