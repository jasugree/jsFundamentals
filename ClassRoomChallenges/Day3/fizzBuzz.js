// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/


//ELSEIF============================================================
let FB = 6;

if(FB % 5 === 0 && FB % 3 == 0){
    console.log('Fizz Buzz');
}else if (FB % 5){
    console.log('Buzz'); 
}else if (FB % 3){
    console.log('Fizz'); 
}



//SWITCH============================================================
let FB = 9;

switch(true){
    case FB % 5 === 0 && FB % 3 === 0:
        console.log('Fizz Buzz')
        break;
    case (FB % 5 === 0):
        console.log(' Buzz')
        break;
    case (FB % 3 === 0):
        console.log(' Buzz')
        break;
    default:
        console.log('No Fizz or Buzz');
}



//TERNARY==========================================================
let FB = 21316;

let ternary = (FB % 5 === 0 && FB % 3 === 0) ? ('Fizz Buzz') 
:(FB % 5 === 0) ? ('Buzz') 
:(FB % 3 === 0) ? ('Fizz') 
:('No Buzz or Fizz')
console.log(ternary);







