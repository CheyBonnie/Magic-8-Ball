// Magic 8 Ball

var userName = ''
var userQuestion = ''
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ''

userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

console.log(`You asked me ${userQuestion}... Well ${userName}`);

if ( randomNumber <= 0) {
    console.log ('It is certian');
} else if (randomNumber === 1) {
    console.log('Its decidedly so');
} else if (randomNumber === 2) {
    console.log('Reply hazy try again');
} else if (randomNumber === 3) {
    console.log('connot predict now');
} else if (randomNumber === 4) {
    console.log('Do not count on it');
} else if (randomNumber === 5) {
    console.log('My sources say no');
} else if (randomNumber === 6) {
    console.log('Outlook not so good');
} else if (randomNumber === 7) {
    console.log('Signs point to yes')
} else {
    console.log('Ask again');
}

console.log(eightBall);
console.log(randomNumber);
