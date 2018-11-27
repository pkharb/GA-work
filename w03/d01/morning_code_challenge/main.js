// Fibonacci Sequence

function findFiboNum(a){
    var fibArray = [0,1];

    for(var i=0;i < a;i++){
        fibArray.push(fibArray[i] + fibArray[(i + 1)]);
    }
 return (fibArray[a - 1]);

 };

console.log(findFiboNum(122));

// function(a){
//     var arr = [0,1];

//     for(var i = 2; i < n + 1;i++){
//         arr.push(arr[i -2] + arr[i - 1]);
//     }
//     return arr[n];
// }

// 1) create an array starting with 0,1.  The values after that will be the sum of 
//    the last two values. 
// 2)  

