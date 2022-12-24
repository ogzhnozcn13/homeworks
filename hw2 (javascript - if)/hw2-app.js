//? ÖDEV 1: Dort Islem Hesap Makinasi (2 Sayı bir operator, if-elseif -------------------------------------------------------------------------------------------

// const number1 = +prompt("Enter first number:");
// const number2 = +prompt("Enter second number:");
// const process = prompt("Enter a process (+ - * /):");

// if(process === "*"){
//     console.log(number1 * number2);
// }
// else if(process === "+"){
//     console.log(number1 + number2);
// }
// else if(process === "-"){
//     console.log(number1 - number2);
// }
// else if(process === "/"){
//     console.log(number1 / number2);
// }
// else{
//     console.log("Check again.");
// }



//? ÖDEV 2:Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız. --------------------------------------------------------------------------------------

// let day = prompt("Enter a day:")
// switch (day) {
//     case "Pazartesi" || "Salı" || "Çarşamba" || "Perşembe":
//         console.log("In class");
//         break;
//     case "Cuma":
//         console.log("Teamwork");
//         break;
//     case "Cumartesi":
//         console.log("In class + Workshop");
//         break;
//     case "Pazar":
//         console.log("Self-Study");
//         break;

//     default:
//         console.log("Yanlış giriş yaptınız.");
//         break;
// }



//? ÖDEV 3: Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.-------------------------------------------------------------------------------------------

// const asUc = 4250;
// const maas = +prompt("Maaşınız nedir?");

// if(maas <= asUc){
//     console.log(`Yeni maaşınız: ${maas * 0.5 + maas} olacaktır.`);
// }
// else if(maas > asUc){
//     console.log(`Yeni maaşınız: ${maas * 0.1 + maas} olacaktır.`);
// }
// else{
//     console.log("Yanlış giriş yaptınız.");
// }



//? ÖDEV 4: Console’dan kişinin gelir ve gider miktarını alınır. eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑değilse Kredi Verilemez 🥺şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız. ---------------------------------------------------------------------------------------------

const gelir = +prompt("Gelir miktarınızı giriniz:");
const gider = +prompt("Gider miktarınızı giriniz:");
const asgUcr = 4250;

gelir - gider >= asgUcr ? console.log("Kredi alabilirsiniz.") : console.log("Kredi alamazsınız.");