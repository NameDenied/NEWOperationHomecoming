let currentBox = "None"
let currentOperation = "None"
let puzzleNum = 1; //1-3

let puzzle = [[1,2,3,3], [6,6,6,6], [3,4,5,6]]

let lastOperation = 'operator'

function select(symbol){
    const equationElement = document.getElementById('equation')
    const error = document.getElementById('error')
    let equation = equationElement.innerHTML

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
                equation += '-'
            } else {
                error.classList.remove('hidden')
                error.innerHTML = 'You cannot add an operator after another operator'
            }
            break
        default:
            if (lastOperation === 'operator') {
                error.classList.add('hidden')
                lastOperation = 'number'
                equation += symbol
            } else {
                error.classList.remove('hidden')
                error.innerHTML = 'You cannot add a number after another number'
            }
    }
    equationElement.innerText = equation
}

function reset(puzzleNum){
    document.getElementById.SOMETHING = puzzle[puzzleNum-1][0]
    document.getElementById.SOMETHING = puzzle[puzzleNum-1][1]
    document.getElementById.SOMETHING = puzzle[puzzleNum-1][2]
    document.getElementById.SOMETHING = puzzle[puzzleNum-1][3]
}