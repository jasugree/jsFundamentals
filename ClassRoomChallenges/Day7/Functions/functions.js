//Functions that are named are HOISTED to the top priority --> Order doesn't matter
greeting();
function greeting(){
    console.log('Hello World!');
}




//Anonymous function --> Order matters if you are using an expression for a function, 'hello' MUST be intialized before calling it

let hello = function(){
    console.log('Hey anonymous function');
}

hello();


//Creat a function that when invoked lists out numbers 1-10

function counter(){
    for(i = 1; i < 11; i++){
        console.log(i);
    }
}

counter();


//PARAMETERS
function greetingStudent(name){
    console.log(`Good Morning, ${name}.`);
}
greetingStudent('Jake');

/*
                        (1)
function greetingStudent(name){
                                (2)
    console.log(`Good Morning, ${name}.`);
}
greetingStudent('Jake');

- 1 The parameters(s) that a function is accepting
- 2 Using the string interpolation, we can refer to the parameter that was given to the function 
*/

function area(length, width){
    let calcArea = length * width;
    return calcArea;
}

let rectangle = area(3,5);
console.log(rectangle);



function volume(length, width, height){
    let calcArea = length * width * height;
    return calcArea;
}
let cube = volume(3,5,10);
console.log(cube);


function convertDogAgeToHuman(dogAge){
    let humanAge = (dogAge - 2) * 4 + 21;
    return humanAge;
}

let Rue = convertDogAgeToHuman(3)
console.log(Rue);