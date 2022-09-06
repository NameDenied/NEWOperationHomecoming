window.onload = function(){
    initialize();
}

let symbol = "<3";

function initialize(){
    document.getElementById('EnterGuess').onkeydown = function(e){
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter'){
            // Enter pressed
            //alert(i);
            checkAnswer();
        }
    }
    
}

function checkAnswer(){
    //alert("You got it!")
    if(document.getElementById("EnterGuess").value == symbol){
        alert("You got it!")
    }else if(document.getElementById("EnterGuess").value.toLowerCase() == "love"){
        alert("True, but not a symbol!")
    }else{
        alert("Nahhhhh")
    }
}