var myFirstVariable = 'Jake';
var mySecondVariable = 'Greene';
var myThirdVariable = 'Rue';

console.log('My name is', myFirstVariable, mySecondVariable,"and this is my dog,", myThirdVariable);

myFirstVariable = 'Sullivan';

console.log(myFirstVariable);


const weatherToday = 'Cloudy';
console.log(weatherToday);


let phrase = "Good Morning";

console.log(phrase, myFirstVariable);
console.log(phrase + ' ' + myFirstVariable);
console.log(`${phrase } ${myFirstVariable}, how are you?`);


let example = "ThE FoX JUmpeD OveR the Turtle";
console.log(example.toLowerCase());

let name1 = "Marco";
let name2 = "MaRcO";

//Comparison of two vareiables
let match = name1.toLocaleLowerCase() === name2.toLowerCase()

console.log('Do names match:',match);
console.log('Does example have this word in it?:', example.toLowerCase().includes('fox'));

console.log("Length of Example:", example.length);