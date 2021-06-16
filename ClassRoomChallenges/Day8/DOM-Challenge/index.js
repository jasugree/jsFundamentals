/* 
BRONZE - 
Connect your js file to your html file.
In your html file, create an h1 element with an id of "title".
In your js file, grab your h1 element by its id. 
In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".
Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/

let title = document.getElementById('title');

function changeTitle(){
    title.innerText = "This is my Todo List:";
    title.style.color = "#A9A9A9";
}

changeTitle();

/* 
SILVER - 
In your html file, create a div element underneath your h1 element
with an id of "div".
In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph
text to: "#6495ED". Nest the paragraph element inside the div
element.
*/
let div = document.getElementById('div');
let para = document.createElement('p');

para.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
para.style.color = "#6495ED";
div.append(para);


/* 
GOLD - 
In your html file underneath your div element, create an unorganized list
element with an id of "list".
In your js file, grab your ul element by its id. 
Create an array in your js file with 4 different items for your to-do
list. 
Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append 
the li element to the ul element of "list".
*/


let list = document.getElementById('list');

let arr = ['1 thing', '2 thing', '3 thing', '4 thing'];

let li = document.createElement('li');


arr.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item;
    list.append(li);
});
