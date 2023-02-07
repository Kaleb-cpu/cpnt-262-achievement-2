/**************************/
/* Example: Calculate GST */
/**************************/

let subTotal = 40;

let total = subTotal * 0.05 + subTotal;

console.log(`$${subTotal} plus GST is $${total}.`);


/****************************/
/* Example: Square a number */
/****************************/

let num = 4;

const numsquared = num * num;

console.log(`${num} squared is ${numsquared}.`);


/**********************************************/
/* Example: Calculate fahrenheit from celsius */
/**********************************************/

const tempF = 72;
const tempPreference = 'celsius';
let temp;


if (tempPreference == 'celsius') {
  temp = (5 / 9) * (tempF - 32)
} else {
  temp = tempF;
}

console.log(`Temp is ${temp} degrees`);