// /*-------------------------------- Constants --------------------------------*/
// let num1 = 0
// let num2 = 0
// let totalNum = 0
// operator;
// /*-------------------------------- Variables --------------------------------*/

// /*------------------------ Cached Element References ------------------------*/

// /*----------------------------- Event Listeners -----------------------------*/

// /*-------------------------------- Functions --------------------------------*/

// const buttons = document.querySelectorAll('.button');

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//       if(event.target.innerText === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0"){
//         num1 = Number(event.target.innerText)
//         console.log(num1)
//       }
//       if(Number(event.target.innerText) === NaN){

//       }
//     });
//   });
  
// //   const calculator = document.querySelector('#calculator');

// //   calculator.addEventListener('click', (event) => {
// //     // This log is for testing purposes to verify we're getting the correct value
// //     // You have to click a button to see this log
// //     console.log(event.target.innerText);
  
// //     // Example
// //     if (event.target.classList.contains('number')) {
// //       // Do something with a number
// //       num1 = Number(event.target.classList.contains("number"))
// //       console.log(num1)
// //     }
  
// //     // Example
// //     if (event.target.innerText === '*') {
// //       // Do something with this operator
// //       if(event.target.classList.contains('s')){
// //         num2 = Number(event.target.classList.contains("s"))
// //       }
// //       totalNum = num1 * num2
// //         }
// //     if(event.target.innerText === '='){
// //             console.log(totalNum)
            
// //         }
        
// //   });
  
let num1 = 0
let num2 = 0
let totalNum = 0
let operatorNum // 1 if *, 2 if /, 3 if +, 4 if -


const buttonsElement = document.querySelectorAll(".button")

const calc1 = (element1) => {
  if(Number(element1.target.innerText) != NaN){    
    operatorNum = 0
    num1 = element1.target.innerText
    console.log(num1)
  }
  else{
    num1 = 0
    num2 = 0
    totalNum = 0
  } 
}

const calc2 = (element2) => {
  // if(Number(element2.target.innerText) != NaN){    
  //   operatorNum = 0
  //   num1 = num1 + num1
  //   console.log(num1)
  // }
  // else 
  if(Number(element2.target.innerText) === NaN){
    if(element.target.innerText === "*"){
      operatorNum = 1
    }
    else if(element2.target.innerText === "/"){
      operatorNum = 2
    }
    else if(element2.target.innerText === "+"){
      operatorNum = 3
    }
    else if(element2.target.innerText === "-"){
      operatorNum = 4
    }
    else{
      operatorNum = 0
    }
}
}

const calc3 = (element3) => {
  // if(operatorNum === 0){
  //   num1 = num1 + num1
  //   console.log(num1)
  // }
  // else{
    num2 = number(element3.target.innerText)
  // }
}

const calc4 = (element4) => {
  if(element4.target.innerText === "="){
    if(operatorNum = 1){
      totalNum = num1 * num2
      console,log(totalNum)
    }
    else if(operatorNum = 2){
      totalNum = num1 / num2
      console,log(totalNum)
  }
    else if(operatorNum = 3){
    totalNum = num1 + num2
    console,log(totalNum)
  }
   else if(operatorNum = 4){
    totalNum = num1 - num2
    console,log(totalNum)
    }
  else{
    // num2 = num2 + element4.target.innerText
  }
  }
}

buttonsElement.forEach((firstButton) => {
  firstButton.addEventListener("click", calc1)});

buttonsElement.forEach((secondButton) => {
  secondButton.addEventListener("click", calc2)});

buttonsElement.forEach((thirdButton) => {
  thirdButton.addEventListener("click", calc3)
})

buttonsElement.forEach((fourthButton) => {
  fourthButton.addEventListener("click", calc4)})