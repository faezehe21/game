// const randomNum = Math.random();
// console.log (Math.round(randomNum * 1000));
// console.log(randomNum*100) 
const randomNum = Math.round(Math.random()*100)
const userGuess = prompt('Enter your guess the number between 10 to 99')
console.log(randomNum , userGuess)
// if(parseInt(userGuess) ===randomNum){
//     alert('congrate!')
// } else {
//     alert(`The random number was ${randomNum} and your guess was ${userGuess} `) ;
//     // alert( 'the random number was $ {randomNum} ')
// }
if(userGuess) {
    const intUserGuess = parseInt(userGuess)
    if(intUserGuess >= 10 && intUserGuess <= 99) {
if(intUserGuess === randomNum) {
alert('congate!')} else {
    alert(`The random number was ${randomNum} and your guess was ${userGuess} `) ;
}

} else {
    alert('you didnt guess guess between 10-99')
}
    } else{
        alert('You didnt guess!!!')
    }