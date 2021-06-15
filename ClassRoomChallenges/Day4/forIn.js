let student = {
    name: "Amruta",
    awesome: true,
    certification: 'javaScript',
    week: 1,
};

//Properties : Values

//For in loops are great for iterating over values in an object.
//For in loops count the enumerabl (countable) properities in an object.

//Objects contain properties that ar enumerable. Properties in an object don't container an index like arrays. But they can be counted.

for(item in student) {
   console.log(item);
    //console.log(student[item]);
}


//Properties are keys. Keys go IN objects(lock)


//BRONZE===========================================
/* Using a for in loop, console.log the name of each character from the 
members key in the fellowshipOfTheRing object.
*/


let fellowshipOfTheRing = {
members: {
    Gandalf: 'Staff',
    Frodo: 'Sting',
    Sam: 'Lembas Bread',
    Aragorn: 'Anduril',
    Legolas: 'Bow of the Galadhrim',
    Gimli: 'Walking Axe',
    Pippin: 'Barrow Blades',
    Merry: 'Barrow Blades',
    Boromir: 'Horn of Gondor'
},
purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
formed: '25 October, 3018',
dissolved: '26 February, 3019'
}


for(item in fellowshipOfTheRing.members) {
     console.log(item);
 }



 /* SILVER
    - Add a conditional to the for in loop that checks if the characters 
    name does NOT begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.
*/


let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
    }

for(item in fellowshipOfTheRing.members) {
    if(item[0] !== "A" && item[0] !== "E" && item[0] !== "I" && item[0] !== "O" && item[0] !== "U"){
        console.log(`${item}'s name does not begin with a vowel.`);
    }else{
        console.log(`${item}'s name does begin with a vowel.`);
    }
}

/* GOLD

    - Declare a globally scoped variable of arr that is initialized as 
    an empty array. If the characters name does not begin with a vowel, 
    add that character to the new array, and then console.log the array.

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
    }

let arr = [];

for(item in fellowshipOfTheRing.members) {
    if(item.charAt(0) == "A" || item.charAt(0) == "E" || item.charAt(0) == "I" || item.charAt(0) == "O" || item.charAt(0) == "U" ){
        console.log(`${item}'s name does begin with a vowel.`);
    }else{
        arr.push(`${item}`);
    }
}
console.log(arr);