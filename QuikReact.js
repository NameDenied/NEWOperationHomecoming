let numberSent = 0;

function gameStart(){
    document.getElementById("StartButton").style.visibility = "hidden"
    gameRunning = true;
    SendRxn()
    
    
}


async function SendRxn(){
    await new Promise(resolve => setTimeout(resolve, (Math.floor(Math.random() * 30)+1)*100+500));
    document.getElementById("Rxn").innerText = "YES"
}