/*-------------------------------- Constants --------------------------------*/
let num1 = 0
let num2 = 0
let totalNum = 0
operator = 0;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
      if(event.target.innerText === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0"){
        num1 = Number(event.target.innerText)
        console.log(num1)
      }
      if(Number(event.target.innerText) === NaN){

      }
    });
  });
  
//   const calculator = document.querySelector('#calculator');

//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//       num1 = Number(event.target.classList.contains("number"))
//       console.log(num1)
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//       if(event.target.classList.contains('s')){
//         num2 = Number(event.target.classList.contains("s"))
//       }
//       totalNum = num1 * num2
//         }
//     if(event.target.innerText === '='){
//             console.log(totalNum)
            
//         }
        
//   });
  


