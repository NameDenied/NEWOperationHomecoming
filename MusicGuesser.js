window.onload = function(){
    initialize();
}

let songName = "love is just a word";

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
    
    if (document.getElementById("EnterGuess").value.toLowerCase() == songName){
        alert("YAYYA");
    }else{
        let incmessages = ["NUH-UH", "NOPE", "you thought?", "some random text in string."];
        alert(incmessages[Math.floor(Math.random()*incmessages.length)]);
    }
}