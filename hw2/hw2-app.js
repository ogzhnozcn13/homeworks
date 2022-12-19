//? ÖDEV 1: ---------------------------------------------------------------------------------------
const number1 = +prompt("Enter first number:");
const number2 = +prompt("Enter second number:");
const process = prompt("Enter a process (+ - * /):");

if(process === "*"){
    console.log(number1 * number2);
}
else if(process === "+"){
    console.log(number1 + number2);
}
else if(process === "-"){
    console.log(number1 - number2);
}
else if(process === "/"){
    console.log(number1 / number2);
}
else{
    console.log("Check again.");
}




//? ÖDEV 2: --------------------------------------------------------------------------------------
let day = prompt("Enter a day:")
switch (day) {
    case "Pazartesi" || "Salı" || "Çarşamba" ||:
        console.log("In class");
        break;
    case "Pazartesi":
        console.log("In class");
        break;
    case "Pazartesi":
        console.log("In class");
        break;
    case "Pazartesi":
        console.log("In class");
        break;

    default:
        break;
}