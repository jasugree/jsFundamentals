// const header = document.getElementById('header');
// console.log(header);

// header.style.color = 'green';

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[0].innerText = "I changed error 1";
// //EXAMPLE 1 Looping
// for(let i = 0; i < errorList.length; i++){
//     errorList[i].style.color="red";
// }

// //EXAMPLE 2 Looping
// for(error of errorList){
//     error.style.color="green";
// }

// //EXAMPLE 3 Looping --> forEach !ERROR!

// //errorList.forEach((error => error.style.color="purple"));

// const tags = document.getElementsByTagName('p');
// console.log(tags);

// tags[0].innerText = "I changed the paragraph";


// const listItems = document.getElementsByTagName('li');
// console.log(listItems);


// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontStyle = 'italic';
// }
// /*
// for(item of listItems){
//     item.style.fontStyle = 'italic';
// }
// */

const header = document.querySelector('#header');
console.log(header);

const errorList= document.querySelector('.error-list');
console.log(errorList);

const errorList2 = document.querySelector('body > div > ul > li:nth-child(2)');
console.log(errorList2);


const headerTags = document.querySelectorAll('h1');
console.log(headerTags[1]);

headerTags.forEach((h => h.style.color="blue"));

const listItems = document.querySelectorAll('.error-list');
listItems.forEach((item => item.style.fontStyle='italic'));
console.log(listItems);