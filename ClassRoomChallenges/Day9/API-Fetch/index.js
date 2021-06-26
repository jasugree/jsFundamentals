let button1 = document.getElementById('button-fetch');
    console.log(button1);
    button1.addEventListener('click', handleClick);

function getJoke() {
    let apiUL = `https://api.chucknorris.io/jokes/random`;
    fetch(apiUL)
    //changes API's JSON format to JavaScript --> Object Literal
    .then((response)=>response.json())
    .then((result)=>displayJoke(result.value));
    console.log('This did not wait')
}

function displayJoke(joke){
    console.log(joke);
    //What are we attaching to inorder to display the fetched results?
    //Create a P tag
     //Set the Inner-text
    //Append the P tag that was just created in 3 lines above
    let displayFetch = document.getElementById('display-fetch');
    displayFetch.innerText = "";//Reset the value of the joke to nothing everytime before pulling from the API
    let para = document.createElement("p");
    para.innerText = (joke);
    displayFetch.appendChild(para);
    
    /*My original answer ===============================================
    
    let display = document.getElementById('display-fetch')
    let para = document.createElement("p")
    para.append(joke)
    display.append(para)
    
    ==================================================================*/

    }
    function handleClick(){
            getJoke();
}




//ASYNCRONOUS 
// async function getJokeAsync(){
//     let apiUL = `https://api.chucknorris.io/jokes/random`;
// try{
//     const response = await fetch(apiUL) //JSON FORMAT
//     const result = await response.json() // Converts JSON to Object Literal (JavaScript)
//     console.log(result)
//     console.log('This waited 1')
//     } catch (error) {
//         console.log(error);
//     }
//     console.log('This waited 2');
// }

// getJokeAsync();

