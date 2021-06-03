/*
CONDITIONALS - Conditional statements control behaviors in JavaScript and determine whether or not pieces of code can run. Conditionals will check if an experession is true. IF the expression is true, a block of code will run.
*/

/*
Falsy Values - considered false.

1) false 
2) null
3) undefined
4) 0
5) NaN (Not a Number)
6) " " (empty string)
*/

/*
Truthy Values - Is considered true 
1) true
2) 42, -42
3) "0"
*/

let snowing = true;

if(snowing == true){
    console.log('It is snowing outside');
}else{
    console.log('It is NOT snowing outside');
}

//SHORT HAND IF STATEMENT
if(snowing){
    console.log('It is snowing outside');
}else{
    console.log('It is NOT snowing outside');
}

let snowing = false;
if(snowing){
console.log('It is snowing outside');
}else{
    console.log(`It is NOT snowing outside`);
}

/*
IF ELSE - If the expression is false, it will run the next block of code. The else statement specifies a bloack of code to be executed if the condition is false
*/

let puppies = 3;
if(puppies < 1){
    console.log('I need more puppies.');
}else{
    console.log('I have enough puppies.');    
}


let myName = 'Katie';

if(myName == 'Katie'){
    console.log(`Hello! My name is ${myName}.`);
}else{
    console.log(`Hello! Is your name ${myName}?`);
}


/*
Challenge! 
BRONZE
Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.

SILVER
Expand on what you have already done and write a conditional to see who has 
the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

GOLD
In the console log include how many letters difference there are between the 
names.Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been 
mentioned so far. See if you can add that to your conditional!
*/

let myFirstName = 'Courtney';
let myFriendName = 'Logan';

//MY ORIGINAL ANSWERS ===================================================================

console.log(myFirstName.length);
console.log(myFriendName.length);

//---------------------------------------------------------------------------------------

if(myFriendName.length > myFirstName.length){
    console.log(`${myFriendName}'s name is longer than ${myFirstName}'s`);
}else{
    console.log(`${myFirstName}'s name is longer than ${myFriendName}'s`); 
}

//---------------------------------------------------------------------------------------

let diff = myFirstName.length - myFriendName.length;

let diffAbsolute = Math.abs(diff);


if(myFriendName.length > myFirstName.length){
    console.log(`${myFriendName}'s name is longer than ${myFirstName}'s by ${diffAbsolute}`);
}else{
    console.log(`${myFirstName}'s name is longer than ${myFriendName}'s by ${diffAbsolute}`); 
}

//=====================================================================================


//The Right way to do it

//BRONZE-------------

let myFirstName = 'David';
let myFriendName = 'Katherine';

console.log(myFirstName.length);
console.log(myFriendName.length);

//--------------------
//SILVER--------------

if(myFriendName.length > myFirstName.length){
    console.log(`${myFriendName}'s name is longer than ${myFirstName}'s`);
}else{
    console.log(`${myFirstName}'s name is longer than ${myFriendName}'s`); 
}

//--------------------
//GOLD----------------

if(myFirstName.length > myFriendName.length){
    console.log(`My name is longer than ${myFriendName}'s by ${myFirstName.length - myFriendName.length} letter`)
}else{
    console.log(`${myFriendName}'s name is longer than ${myFirstName}'s by ${myFriendName.length - myFirstName.length} letter`)
}

//--------------------
//PLATINUM (Short-hand)------------

let myName = "Jake";
let friend = "Katherine";
let nameDebate = (myName.length > friend.length) ? (`${myName} is bigger by ${myName.length - friend.length} letters`) : 
(friend.length > myName.length) ? (`${friend} is bigger by ${friend.length - myName.length} letters`) : 
("Our names are the same length")
console.log(nameDebate);

//--------------------