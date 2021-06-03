function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(95);

function nameAge(name, age){
    console.log(name, age);
}
nameAge("Jake", 25);

function numberDifference(num1, num2){
    console.log(num1 - num2);
}

numberDifference(15, 10);


function getMyBattingAverage(atBat, numberOfHits){
    let myAverage = numberOfHits / atBat;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));


function getSum(num3, num4){
    let theTotal = num3 + num4;
    return theTotal;
}
console.log(getSum(20, 32));

function fullName(firstName, lastname){
    let firstAndLast = firstName + " " + lastname;
    return firstAndLast;
}
console.log(fullName('Jake','Greene'));

function totalPrice(priceTag, salesTax){
    let fullPrice = (priceTag + (priceTag*salesTax));
    return fullPrice;
}
console.log(totalPrice(5.99, .07));