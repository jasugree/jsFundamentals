// let team1points = document.getElementById('team1points');

// console.log(team1points.innerText);
// console.log(typeof team1points.innerText);

// function initializePoints(){
//     team1points.innerText = '0';

// }

// initializePoints();

// function team1Add(){
    // let points = team1points.innerText
    // points = +points + 1
    // team1points.innerText = points
// }


// function team1Subtract(){
//     let points = team1points.innerText
//     if(points !== '0'){
//     points = +points - 1
//     team1points.innerText = points
//     }else{alert(`Don't go negative`)}
// }


function calculatePoints(teamName, points) {
    let team1PointsNumber = Number(team1Points.innerText);
    let team2PointsNumber = Number(team2Points.innerText);
    if (teamName === "team1") {
      team1PointsNumber = team1PointsNumber + points;
      team1Points.innerText = team1PointsNumber;
    } else {
       team2PointsNumber = team2PointsNumber + points;
      team2Points.innerText = team2PointsNumber;
    }
  }