// let team1points = document.getElementById('team1points');

// console.log(team1points.innerText);
// console.log(typeof team1points.innerText);

// function initializePoints(){
//     team1points.innerText = '0';

// }

// initializePoints();

// function team1Add(){
//     let points = team1points.innerText
//     points = +points + 1
//     team1points.innerText = points
// }


// function team1Subtract(){
//     let points = team1points.innerText
//     if(points !== '0'){
//     points = +points - 1
//     team1points.innerText = points
//     }else{alert(`Don't go negative`)}
// }


let teamName = document.querySelectorAll('.teamName');
let points = document.querySelectorAll('.teamPoints')

function calculatePoints(teamName, points){
    if(teamName = 'Team 1'){
        function team1Add(){
            let points = team1points.innerText
            points = +points + 1
            team1points.innerText = points
        };
        
        function team1Subtract(){
            let points = team1points.innerText
            if(points !== '0'){
            points = +points - 1
            team1points.innerText = points
            }else{alert(`Don't go negative`)}
        }
    }else{
        function team1Add(){
            let points = team1points.innerText
            points = +points + 1
            team1points.innerText = points
        };
        
        function team1Subtract(){
            let points = team1points.innerText
            if(points !== '0'){
            points = +points - 1
            team1points.innerText = points
            }else{alert(`Don't go negative`)}
        }
    }
    team1Add();
    team1Subtract();
}