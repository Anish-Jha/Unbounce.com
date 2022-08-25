let myValue = JSON.parse(localStorage.getItem("values"));
console.log("myValue", myValue);

let a = +myValue.withOffer;
let b = +myValue.withoutOffer;
console.log(a, b);

let valueShow = document.querySelector("#show_value");
valueShow.innerHTML = `Create your Launch account ($${myValue.withOffer} /month*)`;

let launch = document.querySelector("#launch");
launch.innerHTML = `$${myValue.withoutOffer}/month`;
let subTotal = document.querySelector("#sub_total");
subTotal.innerHTML = `$${myValue.withoutOffer}`;

let offer_amount = b - a;
let discount = document.querySelector("#discount");
discount.innerHTML = `-$${offer_amount}`;
let total = document.querySelector("#total");
total.innerHTML = `$${myValue.withOffer}`;

console.log(offer_amount);

// let userArr=[];

// function showMessage(){

// }
