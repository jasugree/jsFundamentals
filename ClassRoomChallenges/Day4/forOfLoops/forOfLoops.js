let animals = ['pig','cow','duck','horse'];

for(animal of animals){
    //code that gets executed
    console.log(animal);
}

let numbers = [4,5,10,20];
let sumOfAllNumber = 0;

for(number of numbers){
    sumOfAllNumber = sumOfAllNumber + number;
}

console.log(sumOfAllNumber);


/* BRONZE

    - Using a for of loop, console.log the name of each pie from the 
    pies array.

*/

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']


for(pie of pies){
    console.log(pie);
}


/* SILVER
    - Have the conditional check if EACH pie from the pies array is of the type 'apple'.
    - If it is of type apple console log ____ pie is of type apple otherwise
     console log  _____ pie is not of type apple

    - Use google to search for an array method that checks if an array includes a certain value

*/


let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']


for(pie of pies){
    if(pie == 'apple'){
        console.log(`${pie} pie is of type apple`);
    }else{
        console.log(`${pie} pie is NOT of type apple`);
    }
}


/* GOLD

 - Nest a conditonal inside of the for of loop that checks if a 
    single pie from the pies array is of the type 'fruit pie' - ie. 
    apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. 
    Then, using string interpolation, console.log either 
    'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('

   
*/

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']


for(pie of pies){
    if(pie == 'apple' || pie == 'blueberry' || pie == 'apple peach' || pie == 'cherry' || pie == 'cherry apple'){
        console.log(`${pie} pie is a fruit pie!`);
    }else{
        console.log(`${pie} pie is NOT a fruit pie :(`);
    }
}