// problem 1
// var callbacks = []
// for (let i = 0; i < 10; i++) {
//   callbacks.push(function() { console.log(i) })
// }

// callbacks[2]()

// problem 2
// const account = {
//     username: "marijn",
//     password: "xyzzy"
//   }
//   Object.freeze(account);
  
//   account.password = "s3cret"
  
//   console.log(account)

// problem 3
// var myRide = {
//     make: "Ford",
//     model: "Model T",
//     year: 1959,
//     location: "the Office",
//     driveTo: function ( place ) {
//       this.location = place || "Home"
//     }
//   }

// var myRide = {
//   make: "Ford",
//   model: "Model T",
//   year: 1959,
//   location: "the Office",
//   driveTo: (place) => {
//     this.location = place || "Home";
//   } 
// }
  
//   myRide.driveTo("Walmart")
//   myRide.location // "Walmart"
  
  // vs...
  
  // myRide.driveTo()
  // myRide.location // "Home"
//myRide.driveTo("hollywood");
  //myRide.location;

  // myRide.driveTo();
  // myRide.location;

  // problem 4
  // const greeting1 = (greeting = "Hi", firstName = "john", lastName = "snow") => `${greeting} ${firstName} ${lastName}`;  // fill this in!
  //const greeting = (greeting = "Hi", firstName = "john", lastName = "snow") => {`$(greeting) $(firstName) $(lastName)`};

  //console.log(greeting1());

  // console.log(greeting1('hi', 'harry', 'hedger'));


// problem 5
//   const teamName = "tooling"
// const people = [{name: "Jennie", role: "senior"},
//                 {name: "Ronald", role: "junior"},
//                 {name: "Martin", role: "senior"},
//                 {name: "Anneli", role: "junior"}];

// // create an array for all names
// var nameList = [];
// for (var i=0; i < people.length;i++){
//   //add each name to nameList array
//   nameList.push(people[i].name);
// }
// // store the last name in a new variable
// var lastName = nameList[nameList.length - 1];
// //taking out the last name since we have the last name in variable lastName
// nameList.pop();
// nameList = nameList.join(", ");

// let message = `There are ${people.length} people on the ${teamName} team.\n
// Their names are ${nameList} and ${lastName}. `;


// console.log(message)

// problem 7
// Write an expression using array iterator methods (like filter and reduce)
// to compute the total value of the machines in the inventory array.
// Use arrow functions.

// const inventory = [
//     {type:   "machine", value: 5000},
//     {type:   "machine", value:  650},
//     {type:      "duck", value:   10},
//     {type: "furniture", value: 1200},
//     {type:   "machine", value:   77}
//   ]
  
//   //let totalMachineValue = => 
  
//   //console.log(totalMachineValue)

//   // get values of all machines(inventory[i].value)
//   // add the values

//   var valueArray = [];
//   for (let i=0;i < inventory.length;i++){
//     valueArray.push(inventory[i].value);
//   }
//   //console.log(valueArray);
//   var totVal = 0;
//   for(let i=0;i < valueArray.length;i++){
//     totVal += valueArray[i]
//     //console.log(valueArray[i])
//   }
//   console.log(totVal);



function findMultiples(integer, limit) {
    console.time("start");
    var myArray = [];
  var x = 1;
      for(let i=1;i<=limit;i++){
          
            x =  integer * i;
            myArray.push(x);
            console.log(myArray);
            if(x === limit){break;}
            }
      return myArray
      console.timeEnd("start");
  };
   findMultiples(2,20);
  