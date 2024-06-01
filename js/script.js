//Active menu of navbar

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// Listening range, volume and total inputs

let slider = document.getElementById('time')
let output = document.getElementById('volume')
const inputRange = document.querySelectorAll('.range-input')
const total = document.querySelector('#total')
const ChairOption = document.querySelector('input[name="option1"]')
const AirportOption = document.querySelector('input[name="option2"]')

//Array for cars and option

const cars = [
    { name: 'DUTSUN-ON-DO-2013', bpone: 1450, bptwo: 1400, bpthree: 1350, bpfour: 1300 },
    { name: 'HYUNDAI-SOLARIS-2012', bpone: 1500, bptwo: 1450, bpthree: 1400, bpfour: 1400 },
    { name: 'HYUNDAI-SOLARIS-2011', bpone: 1500, bptwo: 1450, bpthree: 1400, bpfour: 1400 },
    { name: 'FORD-FOCUS-2011', bpone: 1500, bptwo: 1450, bpthree: 1400, bpfour: 1400 },
    { name: 'KIA-CERATO-2009', bpone: 1800, bptwo: 1750, bpthree: 1700, bpfour: 1650 },
    { name: 'KIA-RIO-2016', bpone: 1800, bptwo: 1750, bpthree: 1700, bpfour: 1650 },
    { name: 'KIA-OPTIMA-2012', bpone: 2000, bptwo: 1950, bpthree: 1900, bpfour: 1800 }
]

//Range volume selector color and value

output.innerHTML = slider.value

slider.oninput = function () {
    output.innerHTML = this.value
}

// slider.addEventListener('mousemove', function () {
//     let x = slider.value
//     let color = 'linear-gradient(90deg, rgb(248, 1, 26)' + x + '%, rgb(238, 238, 238)' + x + '%)'
//     slider.style.background = color
//     sliderAndSelector()    
// })
slider.oninput = function() {
    let x = slider.value
    let color = 'linear-gradient(90deg, rgb(248, 1, 26)' + x + '%, rgb(238, 238, 238)' + x + '%)'
    slider.style.background = color
    output.innerHTML = x
    sliderAndSelector()   
  }
//Calculation summ functional 
function sliderAndSelector() {
    let selectedValue = document.getElementById('selectcar').value
    let sliderValue = output.value
    
    let selectCar = cars.find(car => car.name === selectedValue)    
    let price1 = selectCar.bpone
    let price2 = selectCar.bptwo
    let price3 = selectCar.bpthree
    let price4 = selectCar.bpfour

     if (sliderValue < 8) {
         const sliderSum = price1 * sliderValue
         total_sum(sliderSum)       
     } else 
          if (sliderValue >= 8, sliderValue < 15) {
            let sliderSum = price2 * sliderValue
              total_sum(sliderSum)
        } else 
             if (sliderValue >= 15, sliderValue < 30) {
             let sliderSum = price3 * sliderValue
                 total_sum(sliderSum)
        } else {
            let sliderSum = price4 * sliderValue
                total_sum(sliderSum)    
        } 
}

//Options checkbox

function checkedSumChair(value) {
    let sliderValue = output.value
    let sliderSumСheckOne = document.querySelector('#total').value    
   if (ChairOption.checked) {
    let totalCheckSumOne = parseInt(sliderSumСheckOne) + (parseInt(sliderValue * value))
       total_sum(totalCheckSumOne) 
    } else {
         let totalCheckSumOne = parseInt(sliderSumСheckOne) - (parseInt(sliderValue * value))
       total_sum(totalCheckSumOne) 
    }
}
 function checkedSumAir(value) {    
     let sliderSumСheckTwo = document.querySelector('#total').value    
    if (AirportOption.checked) {
     let totalCheckSumTwo = parseInt(sliderSumСheckTwo) + parseInt(value)
        total_sum(totalCheckSumTwo) 
     } else {
          let totalCheckSumTwo = parseInt(sliderSumСheckTwo) - parseInt(value)
        total_sum(totalCheckSumTwo) 
     }
 }

//Total summ 

function total_sum(sliderSum) { 
    total.innerHTML = sliderSum
}


