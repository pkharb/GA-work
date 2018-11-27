/* Q1 -----------------------------------------------------------------*/

// var obj1 = {}; 
// obj1.cat = "cute";
// console.log(obj1);


/* Q2 -----------------------------------------------------------------*/

// Update obj2 below
// var obj2 = {foo: "bar"};
// obj2.boo = "moo";
// console.log(obj2);


/* Q3 -----------------------------------------------------------------*/

// var a = {a: "cat"};
// var b = a;
// a.soup = "Clam Chowder";

// var isEqual = (a === b);
// console.log(isEqual);

/* Q4 -----------------------------------------------------------------*/

// var zestyObject = {};
// var spicyObject = {};

// var bar = 2 + 2;

// zestyObject.bar = "four";
// spicyObject[bar] = "four";

// // Replace /*?*/ with correct values
// var dot = zestyObject[4] === undefined;
// var bracket = spicyObject[4] === "four";
// console.log(dot);
// console.log(bracket);


/* Q5 -----------------------------------------------------------------*/
// var obj2 = {
//   a:"b",
//   c:"d"
// };

// function reverseProperties(obj1) {

//   var obj2 = {}
//   for(var i in obj1){
//     console.log(obj1[i]);
  
//     obj2[obj1[i]] = i;

//   }
// return obj2;
    
// };
// console.log(reverseProperties({"x":"x1", "y":"y1","z":"z1"}));




/* Q6 -----------------------------------------------------------------*/

var fakeCarDealerData = {
  "dealerId": 34,
  "cars": ["Mazda", "Toyota", "Hyundai"],
  "employees": {
    "managers": [
      {
        "name": "Steve",
        "role": "Car Manager"
      },
      {
        "name": "Bill",
        "role": "Floor Manager"
      }
    ],
    "interns": [
      {
        "name": "Sheila",
        "role": "Tech Intern"
      },
      {
        "name": "Barb",
        "role": "Car Intern"
      }
    ]
  }
}

// Replace /*?*/ with correct values
// var dealerId = fakeCarDealerData.dealerId === 34;
// var secondCar = fakeCarDealerData.cars[1] === "Toyota";
// var managerName = fakeCarDealerData.employees.managers[0].name === "Steve";
// var numOfInterns = fakeCarDealerData.employees.interns.length === 2;
// console.log(dealerId);
// console.log(secondCar);
// console.log(managerName);
// console.log(numOfInterns);


/* Q7 -----------------------------------------------------------------*/


// function getCharacterNumbers(str){
//   var myObj2 = {};

//  for(var i=0; i < str.length; i++){
   
//    if(myObj2[str[i]] === undefined){
//       myObj2[str[i]] =  1;
//       }
//       else{
//         myObj2[str[i]] += 1;
//       }
      
//  }
//  return myObj2;
  
// }

// console.log(getCharacterNumbers("america"));

/* Q8 -----------------------------------------------------------------*/

// var person = {
//   name: "Jon",
//   hello: function(){
//     return (`"Hello ${this.name}"`);
//   }
// }

// console.log(person.hello());
