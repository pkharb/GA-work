function Arena(name) {
    var lower = name.toLowerCase();
    var newCap = lower.charAt(0).toUpperCase() + lower.substr(1);
    this.name = newCap;
}

var colosseum = new Arena("colosseum");

colosseum.gladiators = [] ;

Arena.prototype.addGladiator = function(gladiator){
    //console.log(this.gladiators.length);
    if(this.gladiators.length < 2){
       this.gladiators.push(gladiator);
       //console.log(this.gladiators);
       console.log("added");
    }
    else{
        console.log("No more Gladiators allowed");
    }
};


colosseum.addGladiator(ghenghes1);
colosseum.addGladiator(napoleon);
colosseum.addGladiator(hannibal);

//console.log(colosseum);
//console.log(colosseum.gladiators);

Arena.prototype.fight = function(){
    var w1 = this.gladiators[0].weapon;
    var w2 = this.gladiators[1].weapon;
    //console.log(w1);
    //console.log(w2);
    var n1 = this.gladiators[0].name;
    var n2 = this.gladiators[1].name;
    //console.log(n1);
    //console.log(n2);

    if(n1 === "maximus"){
        this.gladiators.pop();
        console.log("Hail Maximus!!-1");
    }
    else if(n2 === "maximus"){
        this.gladiators.shift();
        console.log("Hail Maximus!!-2");
    }
    else if(w1 === "trident" && w2 === "spear"){
        var audChoice = prompt(`Do you want ${this.gladiators[1].name} to die? write yes or no`);
        console.log(audChoice);
        this.gladiators.pop();
        console.log("3");
    }
    else if(w1 === "spear" && w2 === "trident"){
        this.gladiators.shift();
        console.log("4");
    }
    else if(w1 === "spear" && w2 === "club"){
        this.gladiators.pop();
        console.log("5");
    }
    else if(w1 === "club" && w2 === "spear"){
        this.gladiators.shift();
        console.log("6");
    }
    else if(w1 === "club" && w2 === "trident"){
        this.gladiators.pop();
        console.log("7");
    }
    else if(w1 === "trident" && w2 === "club"){
        this.gladiators.shift();
        console.log("8");
    }
    else if(w1 === w2){
        this.gladiators.pop();
        this.gladiators.pop();
    }

};

//colosseum.fight();
console.log(colosseum.gladiators);
//colosseum.addGladiator(maximus);
//console.log(colosseum.gladiators);
//colosseum.fight();
//console.log(colosseum.gladiators);
colosseum.addGladiator(napoleon);
////console.log(colosseum.gladiators);
// colosseum.fight();
// console.log(colosseum.gladiators);

// WORK IN PROGRESS ????
Arena.prototype.remove = function(name){
    for(var x in this.gladiators){
        if(x === name){
            //console.log(this.gladiators.indexOf(x));
            console.log(this.gladiators[0].name);
        }

    }
    
}

//colosseum.remove("Napoleon");

Arena.prototype.isEntertained = function(){
    var n1 = this.gladiators[0].name;
    var n2 = this.gladiators[1].name;
   
    if(n1 === "maximus" || n2 === "maximus"){
        console.log("Crowd is Entertained!!")
    }
    else{
        console.log("We want Maximus!!!");
    }
}

//colosseum.isEntertained();