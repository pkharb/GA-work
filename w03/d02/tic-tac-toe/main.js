// PSEUDOCODE
// 1) first time we click on a box , write x in that box
// 2) next click on a different box will write o in that box
// 3) 
// 4)
// 5)
// 6)
// 7)
// 8)
// 9)

var board = document.querySelector('.container')
var b1 = document.querySelector('.box-1');
var b2 = document.querySelector('.box-2');
var b3 = document.querySelector('.box-3');

var reset = document.querySelector('#but1');
var nextPlayer = document.querySelector('#top');

var player1 = "X";
var player2 = "O";
var currentTurn = player1;

board.addEventListener('click', function(evt){
    evt.target.innerText = currentTurn; 
    if(currentTurn === player1){
        currentTurn = player2;
        nextPlayer.innerText = `The next player is ${player2}`;
        b1.innerText = player1;
    }
    else if(currentTurn === player2){
        currentTurn = player1;
        nextPlayer.innerText = (`The next player is ${player1}` );
    }
    else if(b1.innerText === player1 && b2.innerText === player1 && b3.innerText === player1){
        console.log(b1.innerText === player1);
        nextPlayer.innerText = (`The winner is ${player1}` );
    }
});

// console.log(board.children.length);
reset.addEventListener('click', function() {
    for(var i=0; i < board.children.length;i++){
        board.children[i].innerText = "";
    }
    
    currentTurn = player1;
})

