let bgColor = document.body;

let today = new Date();
let time = today.getSeconds();
let number = time*284359.57.toFixed(0);
console.log(number);
console.log(number.toString(16));                   /* dec to hex */
console.log(parseInt(number.toString(16),16));      /* hex to dec */

// document.body.style.backgroundColor = "#"+number.toString(16);


