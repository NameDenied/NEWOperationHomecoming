window.onload = function(){
    initialize();
}

let win = false;
let i = 1;
let dates = ["1492", "1776", "1941", "2023", "EMILYK"];
let gameStarted = false;
let solved = false;

function initialize(){
    document.getElementById('EnterGuess').onkeydown = function(e){
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter' && gameStarted == true){
            // Enter pressed
            //alert(i);
            checkAnswer(i);
        }
    }
    
}



async function gameStart(){
        // alert("WAT");
        console.log("WAT");
        gameStarted = true;
        document.getElementById("StartButton").style.visibility = "hidden";
        // await setTimeout(() => alert("YA"), 5000);
        document.getElementById("numberM").innerText = dates[0];
        document.getElementById("numberM").style.visibility = "visible"
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.getElementById("numberM").style.visibility = "hidden"
}

async function checkAnswer(iL){
    let text = "";
    for(let r = 0; r<iL; r++){
        text += dates[r];
    }
    // alert(text);
    // alert(document.getElementById("EnterGuess").value);
    if(text == document.getElementById("EnterGuess").value){
        let messages = ["Correctomundo", "YEEEEE", "YUP", "INSANE", "nice!", "<3", "<3", "!!1!"];
        document.getElementById("EnterGuess").value = "";
        alert(messages[Math.floor(Math.random() * messages.length)]);
        alert("Press ok when ready for the next number!");
        i=iL+1;
        
        if(i<=dates.length){
            nextNum();

        }else{
            solved = true;
            revealPasscode();
        }
        
    }else{
        let incmessages = ["Incorrect, try again! (If you forget, just refresh the page lol)", "</3 (If you forget, just refresh the page lol)"];
        alert(incmessages[Math.floor(Math.random() * incmessages.length)]);
    }
    
    //if(document.getElementById("EnterGuess").innerHTML ==)
}

async function nextNum(){
    
        let text = "";
        for(let r = 0; r<i; r++){
            text += dates[r];
        }


        document.getElementById("numberM").innerText = text;
        document.getElementById("numberM").style.visibility = "visible"
        
        await new Promise(resolve => setTimeout(resolve, i*1000));
        document.getElementById("numberM").style.visibility = "hidden"
}

async function revealPasscode(){
    //alert("MHM")
    document.getElementById("Passcode").style.visibility = "visible";
}