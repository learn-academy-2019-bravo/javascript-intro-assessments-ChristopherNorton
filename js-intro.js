// // Intro to Javascript Assessments
//
// // Consider this variable:
//
var mantra = "Be the dev";
//
// // 1. Write the code that returns 'B' from mantra.
// function returnB (str){
//   return str.charAt(str[0])
// } console.log(returnB(mantra));
// // 2. Write the code that determines if there is a 'x' in mantra.

function checkX(str){
return str.includes("x")
}
console.log(checkX(mantra))
// 3. Write the code that determines if there is a 'v' in mantra.
function checkV(str){
return str.includes("v")
}
console.log(checkV(mantra))
// // Stretch: Write the code that returns the position of 'v' in mantra.
function positionOfV(str) {
  return str.indexOf("v")
}console.log(positionOfV(mantra));

// // Consider the following statement:
//
var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored === true) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// // 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
//
// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated === true) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
//
// // 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
function eachLetter(str) {
  let newArr = str.split()
      for(let i = 0; i < newArr.length; i++){
        return newArr[i]
}
}
console.log(eachLetter(mantra));
// // Stretch: Using a while loop.
// function whileLog(str){
//   while(i < str.length){
//     return str.charAt(str.indexOf(i))
//   }
// }
//   console.log(whileLog(mantra));;

// // Super Stretch: Using forEach().
//
// // Consider the following variable:
//
// var message = "thisisateststring"
//
// // 7. Write a function that takes a string like message as an argument and returns the string without vowels.
var sentence = "Hi this is a test"
var vowels = ['a', 'e', 'i' , 'o', 'u']
// let newSentence = str.split()

function noVowels (str){
  var vowels = ['a', 'e', 'i' , 'o', 'u']
  let newSentence = str.split('')

  let voweless = []
  for(let i = 0; i < newSentence.length; i++) {
    if(vowels.includes(newSentence[i]) === false) {
      voweless.push(newSentence[i])
    }
  }return voweless.join('')
}console.log(noVowels(sentence));
// // Stretch: Update your function to throw an exception if the argument is not a string.
//
// // Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
//
// // Consider the following variable:
//
var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
//
// // 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

// const onlyCat = arr => {
//     let cats = arr.reduce((catNames, value) => {
//         if (value.type === 'cat') {
//             let catNames = []
//             //console.log(value.name)
//             catNames.push(value.name)
//             return catNames
// })
// }return cats
// }

const onlyCat = arr => {
let cats2 = []
  for(let j = 0; j < arr.length; j++){
  if(arr[j].animal === 'cat'){
      cats2.push(arr[j].name)
  }
}return cats2
}
console.log(onlyCat(toonimals))
