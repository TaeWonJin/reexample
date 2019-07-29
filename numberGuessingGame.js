var answerNumber = Math.floor(Math.random()*100)+1;
var guessHistory = document.querySelector('.guessHistory');
var YesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highOrLow');
var guessButton = document.querySelector('.guessButton');
var guessCount = 1;

function checkYourNumber(){

    var userGuess = Number(guessForm.value);

    
    if(guessCount ===1){
        guessHistory.textContent='입력한 숫자들:'
    }

    guessHistory.textContent += userGuess +',';
    
    if(userGuess == '' || userGuess == null){
        YesOrNo.textContent='1이상 100이하의 숫자를 입력해주세요!';
        YesOrNo.style.backgroundColor ='red';
        highOrLow.textContent='';
        guessHistory.textContent = '입력한 숫자:';
        guessForm.focus();
    }
    else if (isNaN(userGuess)==true){
        guessHistory.textContent = '입력한 숫자:';
        YesOrNo.textContent= '1이상 100이하의 숫자를 입력해주세요!';
        highOrLow.textContent='';
        guessForm.value='';
        guessForm.focus();
        YesOrNo.style.backgroundColor='red';
    }
    else if(userGuess<1 || userGuess>100){
        YesOrNo.textContent='1이상 100이하의 숫자를 입력해주세요!';
        YesOrNo.style.backgroundColor ='red';
        highOrLow.textContent='';
    }

    else if(userGuess === answerNumber){
        YesOrNo.textContent ='축하합니다! 정답입니다!';
        YesOrNo.style.backgroundColor = 'green';
        highOrLow.textContent = '';
        setGameOver();
       
    }
    else if (guessCount === 10){
        YesOrNo.textContent ='!~!~!게.임.오.버!~!~!';
        highOrLow.textContent ='';
        setGameOver();
    }
    
    else{
        YesOrNo.textContent='틀렸습니다!';
        YesOrNo.style.backgroundColor='red';
        if (userGuess<answerNumber){
            highOrLow.textContent ='정답은 더 큽니다!';
        }
        else if(userGuess>answerNumber){
            highOrLow.textContent='정답은 더 작습니다';
        }
    }
    guessCount ++;
    guessForm.value='';

}


guessButton.addEventListener('click',checkYourNumber)

var restartButton;

function setGameOver(){
    guessForm.disabled = true;
    guessButton.disabled = true;
    restartButton = document.createElement('button');
    restartButton.textContent ='새 게임 시작하기';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click',restartGame);
}

function restartGame(){
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultDiv p');
    for (var i=0; i<resetParas.length; i++){
        resetParas[i].textContent='';

    }
    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled = false;
    guessButton.disabled = false;
    guessForm.value='';
    guessForm.focus();
    YesOrNo.style.backgroundColor = 'white';
    answerNumber = Math.floor(Math.random()*100+1);
}