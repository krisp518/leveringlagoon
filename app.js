let profit = 0;
const profitElement = document.getElementById('profit');

let number = 50 + profit*51;
const numberElement = document.getElementById('number');

let num = 1000; 

let LevStock = 0; 
const LevStockElement = document.getElementById('LevStock');


function updateNumber() {
  number++;
  numberElement.textContent = number;
}
setInterval(updateNumber, num); // Updates every second at base (1000 milliseconds)


function updateLevStock() {
    profit = LevStock; 
    profitElement.textContent = profit;  
}

function onLeveringClick() {
    if (number > 0){
        number -= 50; 
        LevStock++; 
        console.log(LevStock); 
        updateLevStock(); 

        num = num/(1+(LevStock))
    }
    numberElement.textContent = number;
}

function onRewardClick() {
    if (number > 10000000){
        number -= 10000000; 
        document.body.style.backgroundColor = "red"; 
    }
}


  