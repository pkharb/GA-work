function Gladiator(name, weapon){
    name = name.toLowerCase();
    this.name = name;
    weapon = weapon.toLowerCase();
    
    if(weapon === "spear" || weapon === "club" || weapon === "trident"){
          this.weapon = weapon;
        }
        else{
            console.log(`Please assign the right weapon`);
        }
}

var ghenghes1 = new Gladiator("Ghenhes_khan", "tridenT");
var hannibal = new Gladiator("Hannibal", "club");
var napoleon = new Gladiator("Napoleon", "spear");
var maximus = new Gladiator("Maximus", "Club");

// console.log(ghenghes1.name);
// console.log(ghenghes1.weapon);

// console.log(hannibal.name);
// console.log(hannibal.weapon);

// console.log(napoleon.name);
// console.log(napoleon.weapon);