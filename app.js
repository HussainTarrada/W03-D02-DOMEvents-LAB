let num1 = 0
let num2 = 0
let num3 = 0
let totalNum = 0
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
    let firstButton = event.target.innerText
    if(Number(firstButton) !== NaN){
      num1 = Number(firstButton)
    }
    else{
      num1 = 0
    }
  });
  button.addEventListener('click', (event) => {
    let secondButton = event.target.innerText
    if(Number(secondButton) === NaN){
      if(secondButton === "*"){
        num2 = 1
      }
      else if(secondButton === "/"){
        num2 = 2
      }
      else if(secondButton === "+"){
        num2 = 3
      }
      else if(secondButton === "-"){
        num2 = 4
      }
      else{
        num2 = 0
      }
    }
    else{
      num2 = 0
    }
  })
  button.addEventListener('click', (event) => {
  let thirdButton = event.target.innerText
    if(Number(thirdButton) !== NaN){
      num3 = Number(thirdButton)
    }
    else{
      num3 = 0
    }
  })
  button.addEventListener('click', (event) => {
    let fourthButton = event.target.innerText
    if(fourthButton === "="){
      if(num2 = 1){
        totalNum = num1 * num3
        console.log(totalNum)
      }
      else if(num2 = 2){
        totalNum = num1 / num3
        console.log(totalNum)
      }
      else if(num2 = 3){
        totalNum = num1 + num3
        console.log(totalNum)
      }
      else if(num2 = 2){
        totalNum = num1 - num3
        console.log(totalNum)
      }
    }
    else{
      num1 = 0
      totalNum = 0
    }
  })
});

