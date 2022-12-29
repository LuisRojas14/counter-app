

let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")



let count = 0 

function increment(){
    count += 1
    countEL.textContent = count
}


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0
    // console.log(count)
}








//////////////////////////////////////////////////

// let firstBatch = 20
// let secondBatch = 20

// let count = firstBatch +secondBatch

// console.log (count)


// let myAge = 36
// let humanDogAge = 7

// let myDogAge = myAge * humanDogAge
// console.log(myDogAge)



///////////////////////////////////////////////////
// let bonusPoints = 50
// console.log(bonusPoints)

//  bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints
// )

// function increment(){
//     console.log('The button was clicked')
// }

/////////////////////////////////////////////////


// function count(){
//     console.log(42)
// }
// count()


////////////////////////////
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime(){
//     console.log(lap1 + lap2 + lap3)
// }
// logLapTime()




/////////////////////////
// let lapsCompleted = 0

// function incrementLaps (){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLaps ()
// incrementLaps ()
// incrementLaps ()
// console.log(lapsCompleted)



///////////////////////////////////////////
// create  a variables . message, that stores the strings " you have tree new notifications"
// let username = 'per'
// let message = "You have tree new notifications"
// console.log(message + ", " + username + "!")

// // Create a variable , messageToUser, that contains the message we have logged

// let messageToUser = message + ","+ username +"!"

// console.log (messageToUser)

// create two variables , name and greeting. The name variable should store your name, and greeting should store e.g. "Hi , my name is"

// Create a third variable, my Greetings, that concatenates the two strings
// Log myGreetings to hte console

// let name = "Luis"
// let greeting = "Hi, my name is"
// let myGreetings = greeting + " " + name

// console.log(myGreetings)

 
