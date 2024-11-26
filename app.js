let num1 = ""
let operator 
let num2 = ""
let totalNum 
const numberButtons = document.querySelectorAll('.number');

const operatorButton = document.querySelectorAll('.operator');

const equalButton = document.querySelector('.equals')

const display = document.querySelector('.display')

numberButtons.forEach((button)=> {
  button.addEventListener("click",(event) => {
    if(display.innerText === "" && !operator){
      num1 = event.target.innerText
      display.innerText = event.target.innerText
    }
    else if(display.innerText !== "" && !operator){
      num1 = num1 + event.target.innerText
      display.innerText = num1
      console.log(num1)
    }
    else if(num1 === "" && operator){
      num2 = event.target.innerText
      display.innerText= num2
      console.log(num2)
    }
    else if(num1 !== "" && operator){
      num2 = num2 + event.target.innerText
      display.innerText = num2
    }
  })
})


operatorButton.forEach((button) => {
  button.addEventListener("click",(event) => {
    if(display.innerText && display.innerText !== "C"){
      operator = event.target.innerText
      display.innerText = operator
      console.log(operator)
    }
    else if(event.target.innerText === "C"){
       display.innerText = ""
       num1 = ""
       num2 = ""
       totalNum = 0    
    }
    else{
      return
    }
  })
})

equalButton.addEventListener("click",(event) => {
  num1 = Number(num1)
  num2 = Number(num2)
  if(operator === "*"){
    totalNum = num1 * num2
    display.innerText = totalNum
  }
  else if(operator === "/"){
    totalNum = num1 / num2
    display.innerText = totalNum
  }
  else if(operator === "+"){
    totalNum = num1 + num2
    display.innerText = totalNum
  }
  else if(operator === "-"){
    totalNum = num1 - num2
    display.innerText = totalNum
  }

})