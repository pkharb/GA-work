// console.log("loaded");

// var hello = function(){
//     console.log("Hello World!!");
// };

// function hello(){
//     console.log("Hello World!!");
// };

// hello();


// function computerArea(width, height){
//     var area = width * height;
//     console.log("The area of a rectangle with a width of " + width + " and a height of "+ height + " is " + area + " square units");
// }

// computerArea(10, 5);

// var planetHasWater = function(planet){
//     console.log(planet)
//     var x = planet.toLowerCase();
//     console.log(x)
//     if(x === "earth" || x === "mars"){
//         console.log("yes");
//         return true;
//     }
//     else {
//         console.log("no");
//         return false;
//     }
    

// }
// planetHasWater("pluto");


// for 

// var x = 5;

// function myFunc(){
//     console.log(x);
// };

// myFunc();


// FUNCTION 1
// function maxOfTwoNumbers(a, b){
//     if(a > b){
//         return a;
//     }
//     else if(a < b){
//         return b;
//     }
//     else if(a === b){
//         return a;
//     }
// };
// console.log(maxOfTwoNumbers(9,9));


// FUNCTION 2
// var maxOfThree = function(a, b, c){
//     if(a > b && a > c){
//         return a;
//     }
//     else if(b > a && b > c){
//         return b;
//     }
//     else if(c > a && c > b){
//         return c;
//     }

// };
// console.log(maxOfThree(8,9,7));


// FUNCTION 3
// function isCharAVowel(a){
//     a = a.toLowerCase();
//     if(a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
//         return true;
//     }
//     else{
//         return false;
//     }

// };
// console.log(isCharAVowel('f'));


// FUNCTION 4
// var sumArray = function(){
//     var userInput; 
//     var userArray = [];
//     var totVal = 0;

//      do{
//          userInput = prompt("Please enter a number, when finished write end");

//          if(userInput === 'end'){
//             break;
//           }

//         userArray.push(userInput);
//         }while(userInput !== "end")
        
//         for(var i=0; i < userArray.length - 1;i++){
//             var num1 = parseInt(userArray[i]);
//             var num2 = parseInt(userArray[i + 1]);
//             if(i === 0){
//                 totVal = num1 + num2;
//             }
//             else{
//                 totVal += num2;
//             }
            
            
//         }
//         console.log(totVal);

// };
// sumArray();

// FUNCTION 5
// var multiplyArray = function(){
//     var userInput; 
//     var userArray = [];
//     var totVal;

//      do{
//          userInput = prompt("Please enter a number, when finished write end");

//          if(userInput === 'end'){
//             break;
//           }

//         userArray.push(userInput);
//         }while(userInput !== "end")

//     for(var i=0; i < userArray.length - 1;i++){
//           var num1 = parseInt(userArray[i]);
//           var num2 = parseInt(userArray[i + 1]);
//           if(i === 0){
//               totVal = num1 * num2;
//           }
//           else{
//               totVal *= num2;
//           }
            
            
//         }
//         console.log(totVal);

// };
// multiplyArray();



// // FUNCTION 6
// var numArgs = function(){
//     return arguments;
// };
// console.log(numArgs(4,5,6,4,8,9));


// FUNCTION 7
// var reverseString = function(a){
//     var userString = [a];
//     var revString = [];
//     var numOfChars = userString[0].length - 1;

//     for(var i = numOfChars; i >= 0;i--){
//         var x = userString[0][i];
//         revString.push(x);

//     }
    
//     var resString = revString.join('');
//     return resString;
// };

// console.log(reverseString('AmErIcA'));

// FUNCTION 8
// var longestWordLength = function(){
//     var userInput = ""; 
//     var userArray = [];
//     var length_1;
//     var length_2;
//     var longLength;

//     do{
//         userInput = prompt("Please enter your words, when finished write end");
//         if(userInput === 'end'){
//         break;
//     }
//     userArray.push(userInput);
//     }while(userInput !== "end")

//     for(var i=0; i < userArray.length - 1;i++){
//       var length_1 = userArray[i].length;
//       var length_2 = userArray[i + 1].length;
      
//       if(length_1 > length_2){
//           longLength = length_1;
//       }
//       else{
//           longLength = length_2;
//       }
           
//     }
//     console.log(longLength);

// };

// longestWordLength();

//PSEODOCODE
//  
// 1) PROPMT FOR USER INPUT TO TYPE IN WORDS TILL USER TYPES END
// 2) SAVE ALL USER INPUT IN AN ARRAY userArray
// 3) PROPMT FOR USER INPUT FOR THE CHARACTER LENGTH
// 4) SAVE CHARACTER LENGTH IN A VARIABLE checkLength
// 5) APPLY forEach() on each array element to find elements whose
//    length is longer than the value passed
// 5) save these elements in a new array
// 6) 
// 1) 
// 7)
// 8)
// 9)

// FUNCTION 9
var stringsLongerThan = function(){
    var userInput = ""; 
    var userArray = [];
    var resArray = [];
    var checkLength;

    do{
        userInput = prompt("Please enter your words, when finished write end");
        if(userInput === 'end'){
            break;
        }
 
        userArray.push(userInput);
    }while(userInput !== "end")

    checkLength = prompt("please enter a number");

    resArray = userArray.filter(xx => xx.length > checkLength);

    // for(var i=0; i < userArray.length;i++){
    //     if(userArray[i].length > checkLength){
    //         resArray.push(userArray[i]);
    //     }
    // }
    console.log(resArray);
};

stringsLongerThan();

