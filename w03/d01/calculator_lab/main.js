// var myCal = {
//     value: "",
//     add:    function(a,b){
//                  this.value = a + b;
//                  return this.value;
//             },
//     subtract: function(a,b){
//                       return a - b;
//             },
//     multiply: function(a,b){
//                        return a * b;
//             },
//     divide: function(a,b){
//                     return a / b;
//             },
//     clear:  function(a,b){
//                     return this.value = "";
// }
// };

// console.log(myCal.add(2,3));
// console.log(myCal.value);
// console.log(myCal.value);

// var superman = {
//     firstName: "clark",
//     secondName: "kent",
//     superHeroName: "superman",
//     revealIdentity: function(){
//         return ``
//     }

// }

function Song(name, album, artist){
    this.name = name;
    this.album = album;
    this.artist = artist;
    this.playsong = function(){
        return `You are listening to ${this.artist}'s ${this.name} from ${this.album}`
    }


}

var x1 = new Song("yy", "history", "mj");
console.log(x1);
var x2 = new Song("zz", "ff", "ee");
console.log(x2);
console.log(x1.playsong());
