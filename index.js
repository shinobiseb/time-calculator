const startTime = document.getElementById('Start')
const endTime = document.getElementById('End')
const value = document.getElementById('value')
const output = document.getElementById('Output')
const timeListGet = document.getElementById('timeList')

let timeList = []

function addToList(item) {
    let li = document.createElement('LI')
    li.textContent = item
    timeListGet.append()
}

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