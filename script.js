let numberHeads = 0;
let numberTails = 0;
let percentHeads = 0;
let percentTails = 0;
let result = 0;
let totalFlips = 0;
let image = document.querySelector("img")
let message = document.querySelector("#result") //getElementbyId("result")
let flipButton = document.querySelector("#flip")
let headsArea = document.querySelector("#heads")
let headsPercentArea = document.querySelector("#heads-percent")
let tailsArea = document.querySelector("#tails")
let tailsPercentArea = document.querySelector("#tails-percent")
let clearButton = document.querySelector("#clear")
​
document.addEventListener('DOMContentLoaded', function (e) {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')
​
    // TODO: Add event listener and handler for flip and clear buttons
​
    // Flip Button Click Handler
    flipButton.addEventListener("click", function(e) {
        // TODO: Calculate the total number of rolls/flips
        totalFlips ++
​
        // TODO: Determine flip outcome
        let result = Math.round(Math.random() * 100);
        //decide the range for both heads and tails
        //let heads 0 - 50
        //let tails 51 - 99
        console.log(result);
​
        // TODO: Update image and status message in the DOM
        if (result <= 50) { //heads
          numberHeads ++
          console.log("numberHeads", numberHeads)
          image.src = "../images/penny-heads.jpg"; //fix image ref
          message.textContent = "You Flipped Heads!";
        } else if (result > 50) { //tails
          numberTails ++
          console.log("numberTails", numberTails)
          image.src = "/Users/missjeni/coin-flip-game/assets/images/penny-tails.jpg";
          message.textContent = "You Flipped Tails!";
        }
        
        percentHeads = (numberHeads/totalFlips) * 100
        percentTails = (numberTails/totalFlips) * 100
        console.log("percentHeads", percentHeads)
        console.log("percentTails", percentTails)
​
        headsArea.textContent = `${numberHeads}`
        headsPercentArea.textContent = `${percentHeads}%`
        tailsArea.textContent = `${numberTails}`
        tailsPercentArea.textContent = `${percentTails}%`
    })
​
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    clearButton.addEventListener("click", function(e) {
      image.src = "/Users/missjeni/coin-flip-game/assets/images/penny-heads.jpg"; //fix image ref
      message.textContent = "Let's Get Rolling!"
      numberHeads = 0
      numberTails = 0
      percentHeads = 0
      percentTails = 0
      totalFlips = 0
    })
})