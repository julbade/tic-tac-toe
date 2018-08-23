function Player()


var playerOne = true
var playerTwo = false

function switchTurn(){
  playerOne = !playerOne;
  playerTwo = !playerTwo;
}
//define w
//define grid
//if win show!!!
//if tie show!!!
var winningCombo = [["#t1","#t2","#t3"], ["#t1","#t4","#t7"], ["#t1","#t5","#t9"], ["#t2","#t5","#t8"], ["#t3","#t5","#t7"], ["#t3","#t6","#t9"],
 ["#t4","#t5","#t6"], ["#t7","#t8","#t9"]];




$(document).ready(function() {
$("td").click(function(event) {
 event.preventDefault();
$(this).css("background-image", "url('img/o.png')");
$(this).css("background-size", "contain");
console.log();


if (playerOne === true) {

  $(this).css("background-image", "url('img/x.png')");
  $(this).css("background-size", "contain");
  switchTurn();

} else {
  $(this).css("background-image", "url('img/o.png')");
  $(this).css("background-size", "contain");
  switchTurn();

}




$("#refresh").click(function(event) {
location.reload(true);
});
});
});
