let startTime = document.getElementById('Start')
let endTime = document.getElementById('End')
let value = document.getElementById('value')

let output = document.getElementById('Output')

function calculateDecimals() {
    let start = startTime.value.slice(3, 5)
    let end = endTime.value.slice(3, 5)

    return [start/60, end/60]
}

function calculateTime() { 

    let startDec = calculateDecimals()[0]
    let endDec = calculateDecimals()[1]

    let start = parseInt(startTime.value) + startDec
    let end = parseInt(endTime.value) + endDec

    let hourDiff = end - start

    output.innerHTML = hourDiff + " hours"
}