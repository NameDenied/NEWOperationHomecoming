let currentBox = "None"
let currentOperation = "None"
let puzzleNum = 0; //1-3

let puzzle = [[1,2,3,3], [6,6,6,6], [3,4,5,7]]

let lastOperation = 'operator'

function select(symbol, element){
    const equationElement = document.getElementById('equation')
    const error = document.getElementById('error')
    let equation = equationElement.innerHTML

    if (element?.classList.contains('picked')) {
        error.classList.remove('hidden')
        return error.innerHTML = 'You cannot reselect an item. You can reset to get it back.'
    }
    equationElement.classList.remove('hidden')

    switch(symbol) {
        case '+':
            if (lastOperation === 'number') {
                error.classList.add('hidden')
                lastOperation = 'operator'
                equation += '+'
            } else {
                error.classList.remove('hidden')
                lastOperation = 'operator'
                error.innerHTML = 'You cannot add an operator after another operator'
            }
            break
        case '-':
            if (lastOperation === 'number') {
                error.classList.add('hidden')
                lastOperation = 'operator'
                equation += '-'
            } else {
                error.classList.remove('hidden')
                lastOperation = 'operator'
                error.innerHTML = 'You cannot add an operator after another operator'
            }
            break
        case 'x':
            if (lastOperation === 'number') {
                error.classList.add('hidden')
                lastOperation = 'operator'
                equation += '*'
            } else {
                error.classList.remove('hidden')
                error.innerHTML = 'You cannot add an operator after another operator'
            }
            break
        case '/':
            if (lastOperation === 'number') {
                error.classList.add('hidden')
                lastOperation = 'operator'
                equation += '/'
            } else {
                error.classList.remove('hidden')
                error.innerHTML = 'You cannot add an operator after another operator'
            }
            break
        default:
            console.log(lastOperation)
            if (lastOperation === 'operator') {
                element?.classList.add('picked')
                error.classList.add('hidden')
                lastOperation = 'number'
                equation += element.innerText
            } else {
                error.classList.remove('hidden')
                error.innerHTML = 'You cannot add a number after another number'
            }
    }

    equationElement.innerText = equation
    try {
        if (eval(equation)) {
            document.getElementById('equal').innerText = `= ${eval(equation)}`
        }
    } catch(e) {
        console.log('nope' + e)
    }
    document.getElementById('equationDiv').classList.remove('hidden')
    got24()
}

function got24() {
    const equationElement = document.getElementById('equation')
    const error = document.getElementById('error')
    const equation = equationElement.innerHTML
    const selected = document.querySelectorAll('.picked')
    if (selected.length === 4) {
        if (eval(equation) === 24) {
            puzzleNum++
            if (puzzleNum === 3) {
                error.innerHTML = 'You got 24! You have won!'
                setTimeout(() => {
                    return alert('Passcode: "<3 Emily"')
                }, 10)
            }
            console.log(puzzleNum)
            document.querySelectorAll('.picked').forEach((element, index) => {
                element.classList.remove('picked')
                element.innerText = puzzle[puzzleNum][index]
            })
            reset()
            error.classList.remove('hidden')
            error.innerHTML = 'You got 24! You can now move on to the next part.'
        } else {
            error.classList.remove('hidden')
            error.innerHTML = 'You did not get 24! Press the reset button to try again.'
        }
    }
}

function reset(){
    document.querySelectorAll('.picked').forEach(element => {
        element.classList.remove('picked')
    })
    document.getElementById('equation').innerText = ''
    document.getElementById('equal').innerText = ''
    document.getElementById('equationDiv').classList.add('hidden')
    document.getElementById('error').classList.add('hidden')
    lastOperation = 'operator'
}