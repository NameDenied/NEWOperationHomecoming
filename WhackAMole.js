listOfNumber = [["B1", 0],["B2", 0],["B3", 0],["B4", 0],["B5", 0],["B6", 0],["B7", 0],["B8", 0],["B9", 0],["B10", 0],["B11", 0],["B12", 0],["B13", 0],["B14", 0],["B15", 0],["B16", 0],["B17", 0],["B18", 0],["B19", 0],["B20", 0],["B21", 0],["B22", 0],["B23", 0],["B24", 0],["B25", 0]]
let gameRunning = false;

function gameStart(){
    document.getElementById("StartButton").style.visibility = "hidden"
    gameRunning = true;
    runGame()
    CountDown()
    
}

async function runGame(){
    while (gameRunning == true){
        await new Promise(resolve => setTimeout(resolve, (Math.floor(Math.random() * 3)+1)/10*1000));
        let index = Math.floor(Math.random() * 25)
        listOfNumber[index][1] = listOfNumber[index][1] + Math.floor(Math.random()*2)+1
        let ElementId = listOfNumber[index][0];

        document.getElementById(ElementId).innerText = listOfNumber[index][1]
    }
    
}

async function CountDown(){
    let TimeLeft = 35
    document.getElementById("TLabel").innerText = "Time Left: " + TimeLeft;
    while(TimeLeft > 0){
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        TimeLeft = TimeLeft-1;
        document.getElementById("TLabel").innerText = "Time Left: " + TimeLeft;
    }
    gameRunning = false;
}


function select(ElemId){
    if(listOfNumber[ElemId-1][1] > 0){
        listOfNumber[ElemId-1][1] = listOfNumber[ElemId-1][1] - 1
    }
    
    document.getElementById("B"+(ElemId)).innerText = listOfNumber[ElemId-1][1];
}