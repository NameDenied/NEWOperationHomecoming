window.onload = function(){
    initialize();
}

let gameOver = true;
let keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


let curKey = "NONE"

function initialize(){
    document.addEventListener("keyup", (e) => {
        if (gameOver){
            return;
        }
        // alert(e.code);
        if("KeyA" <= e.code && e.code <= "KeyZ"){
            checkAnswer(e.code[3])
            
        }
    })
}

let numberSent = 0;
let iteration = 0;
let time = 0;

let timeTalley = 0;


function gameStart(){
    gameOver = false;
    document.getElementById("StartButton").style.visibility = "hidden"
    gameRunning = true;
    SendRxn()
    
    
}


async function SendRxn(){
    await new Promise(resolve => setTimeout(resolve, (Math.floor(Math.random() * 30)+1)*100+500));
    
    curKey = keys[Math.floor(Math.random() * keys.length)]
    document.getElementById("Rxn").innerText = curKey.toLowerCase()
    time = Date.now()

}





async function checkAnswer(TheKey){
    if(TheKey != curKey){
        alert("Wrong key! Restart!!!!!")
    }

    let totalTime = Date.now() - time
    timeTalley += totalTime
    alert("Correct, "+totalTime+" miliseconds elapsed!")
    iteration = iteration + 1
    document.getElementById("Rxn").innerText = ""
    if(iteration < 7){
        SendRxn()
    }else{
        gameOver = true;
        alert('CONGRATZ!! You completed this "challenge" with an average reaction time of '+(timeTalley/7)+" miliseconds!")
        if(timeTalley/7 < 684.715){
            alert("The creator's average time was 684.715 ms his first try! Congratz on beating him!")
        }
        alert('Oh yeah, the password is "Thank you Charan C!" (case sensitive)')
    }
}

