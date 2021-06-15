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