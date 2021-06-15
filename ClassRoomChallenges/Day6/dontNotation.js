/****
First create an object about themselves call the variable myInformation. 
It will have the following properties: 
Name: String
Age: Number
numberOfSiblings: Number
Pets: Boolean
PetNames: Array
mostRecentMovieWatched: String
carsOwned: Array {make: String, model: String}
favoriteSinger: String
***/

let myInformation2 = {
    Name: 'Jake',
    Age: 25,
    numberOfSiblings: 1,
    Pets: true,
    PetNames: ['Rue', 'Phoebe', 'Ellie'],
    mostRecentMovieWatched: 'The Platform',
    carsOwned: [
        {make: 'Honda', model: 'Civic'},
        {make: 'Mazda', model: '3'}
    ],
    favoriteSinger: 'Lauren Mayberry',
}
console.log(myInformation);

/***
Next Challenge is to go into a group and have everyone share their object by 
sharing their screen. Anyone not currently sharing the screen will create a new 
variable called studentInformation1 and copy their object. Then so on and so 
forth, creating an object for each student in your group (studentInformation2, 
studentInformation3, etc.). You should have an object for each person in 
your group.
Create a new array with the variables that you created with your group.
***/
let myInformation1 = {
    name: "Ashes",
    age: 29,
    numberOfSiblings: 2,
    pets: false,
    petNames: [""],
    mostRecentMovieWatched: "Raya and the Last Dragon",
    carsOwned: [{make: "Toyota", model: "Camry"}],
    favoriteSinger: "Ashnikko",
};

let myInformation2 = {
    Name: 'Jake',
    Age: 25,
    numberOfSiblings: 1,
    Pets: true,
    PetNames: ['Rue', 'Phoebe', 'Ellie'],
    mostRecentMovieWatched: 'The Platform',
    carsOwned: [
        {make: 'Honda', model: 'Civic'},
        {make: 'Mazda', model: '3'}
    ],
    favoriteSinger: 'Lauren Mayberry',
}

let myInformation3 = {
    Name: "Marcus",
    Age: 29,
    numberOfSiblings: 0,
    Pets: true,
    PetNames: ["Sassy", "Buzz", "Tank", "Draco", "Spike"],
    mostRecentMovieWatched: "The Conjuring: The Devil Made Me do it",
    carsOwned: [
      {
        make: "pontiac",
        model: "Grand AM",
      },
      {
        make: "pontiac",
        model: "Grand Prix",
      },
      {
        make: "Chevy",
        model: "Impala",
      },
      {
        make: "Ford",
        model: "Edge",
      },
    ],
    favoriteSinger: "James Hetfield",
  };

let arr = [myInformation1, myInformation2, myInformation3];

/***
For the final part -  console log a few sentences from the newly created 
array with the information you've all shared. 
Example. "In our group we have Taylor, Tony, and Marco. Marco has a 
Honda Civic and 2 siblings. Taylor's favorite singer is Hozier and they watched
"The Woman in the Window" recently. Tony is 24 years old has a dog named Bo. 
***/

console.log(`In our group we have ${arr[0].name}, ${arr[1].Name}, and ${arr[2].Name}. ${arr[1].Name} has a dog named ${arr[1].PetNames[0]} who loves to bark on car rides in ${arr[1].Name}'s ${arr[1].carsOwned[0].make} ${arr[1].carsOwned[0].model}. ${myInformation1.name} watched ${myInformation1.mostRecentMovieWatched} the other day and liked it. ${arr[2].Name}'s favorite singer is ${arr[2].favoriteSinger}.`);