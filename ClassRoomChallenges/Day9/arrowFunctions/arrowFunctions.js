//ARROW FUNCTIONS


//Normal Function Syntax
function hello(){
    console.log('hello');
}



//Arrow Function Syntax --> Introduced in ES6
// CANNOT BE HOISTE
let hi = () => {
    console.log('hi');
}

hi();

/*
1. Set arrow function to variable 
2. Use my arrow to signify it is a function.
*/

//CONCISE BODY
let holla = () => console.log('holla');

holla();

//BLOCK BODY
let hi = () =>{
    console.log('hi');
}

hi();


let apples = (x) => console.log(`There are ${x} apples`);
apples(15);

let pears = (x,y)=> {
    console.log(`Ther are ${x} apples and ${y} pears`);
};
pears(15,3);