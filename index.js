let startTime = document.getElementById('Start')
let endTime = document.getElementById('End')
let value = document.getElementById('value')
let button = document.getElementById('Calculate-button')

let output = document.getElementById('Output')

function calculateDecimals() {
    let start = startTime.value.slice(3, 5)
    let end = endTime.value.slice(3, 5)

    return [start/60, end/60]
}

function round(dec) {
    let output = Math.round(dec * 100)/100
    return output
}

function calculateTime() { 

    let startDec = calculateDecimals()[0]
    let endDec = calculateDecimals()[1]

    let start = parseInt(startTime.value) + startDec
    let end = parseInt(endTime.value) + endDec

    let hourDiff = end - start

    if(hourDiff % 1 !== 0) {
        output.innerHTML = round(hourDiff) + " hours"
    } else {
        output.innerHTML = hourDiff + " hours"
    }
}

startTime.addEventListener('keydown', function(event)  {
    if(event.key === 'Enter') {
        button.click()
    }
})

endTime.addEventListener('keydown', function(event)  {
    if(event.key === 'Enter') {
        button.click()
    }
})
