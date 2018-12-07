// function multiply(a,b){
//     return a * b;

// }

//var n =  multiply(2,5);

//console.log(n);

// var fives = [];

// for(var i=1; i<=100;i++){
//     if(i % 5 === 0){
//         fives.push(i);
//     }
// }
// console.log(fives);

var myNumber = require('./modules/first_module');
console.log(myNumber.xx);

myNumber.sayHi();

var areaCir = require('./modules/circles');

//console.log(areaCir.area(4));

var myCircum = require('./modules/circles');
//console.log(myCircum.circum(4));

