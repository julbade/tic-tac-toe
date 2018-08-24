
//function Player()

var placeholder = $("#placeholder");
// var tictactoe = new TicTacToe(placeholder, 3 ,onResult);
function onResult(result, scores) {

}
var playerOne = true
var playerTwo = false


// var space1 = $("#t1")
// var space2 = $("#t2")
// var space3 = $("#t3")
// var space4 = $("#t4")
// var space5 = $("#t5")
// var space6 = $("#t6")
// var space7 = $("#t7")
// var space8 = $("#t8")
// var space9 = $("#t9")


// function TicTacToe(placeholder, callback, grid_size) {
// 	this.placeholder = placeholder;
//   this.paint = grid_size
// 	this.callback = callback;
// 	this.scores = {
// 		X: 0,
// 		O: 0
// 	};
// 	this.marks = {
// 		X: "X",  // Player 1 mark
// 		O: "O",  // Player 2 mark
// 		count: 0 // Number of moves made in the whole game
// 	};
//
// 	return this;
// }
// TicTacToe.prototype.paint = function(grid_size) {
//   self.grid_size = grid_size;
//   var html = '<table id="table" alignt="center">';
//   for (var i = 0; i < grid_size; i++) {
//     html += '<tr>';
//     for( var j = 0; j < grid_size; j++) {
//       html += '<td></td>';
//     }
//     html += '<tr>';
//   }
//   html += '<table>';
//   self.placeholder.innerHTML = html;
//   self.columns = self.placeholder.$("td");
//   for(i = 0; 1 < this.columns.length; i++) {
//     self.columns[i].addEventListener("click", markHandler);
//   }
//   function markHandler(e) {
//     self.mark(e.target);
//   }
// };
// TicTacToe.prototype.mark = function(column) {
//   if(column.innerHTML) {
//     return;
//   } this.marks.count++;
//   var currentMark = this.mark.count %2 === 1 ? this.marks.X : this.marks.O;
//   column.innerHtml = currentMark;
//   column.classList.add(currentMark);
//
//   if(this.playerWin(currentMark)) {
//     if(this.marks.count % 2 === 1) {
//       this.scores.X++;
//     } else {
//       this.scores.O++;
//     }
//     this.callback(currentMark, this.scores);
//   } else if (this.marks.count === this.columns.length) {
//     this.callback("draw");
//   }
// };
// TicTacToe.prototype.playerWin = function(mark) {
//   var grid_size = this.grid_size;
//   var horizontalCount, verticalCount,rightToLeftCount = 0,
//   leftToRightCount = 0;
//   for(var i = 0; i < grid_size; i++) {
// 		horizontal_count = vertical_count = 0;
// 		for(var j = 0; j < grid_size; j++) {
// 			if(this.columns[i * grid_size + j].innerHTML == mark) {
// 				horizontal_count++;
// 			}
// 			if(this.columns[j * grid_size + i].innerHTML == mark) {
// 				vertical_count++;
// 			}
// 		}
//
// 		if(horizontal_count == grid_size || vertical_count == grid_size) {
// 			return true;
// 		}
//
// 		if(this.columns[i * grid_size + i].innerHTML == mark) {
// 			right_to_left_count++;
// 		}
// 		if(this.columns[(grid_size - 1) * (i+1)].innerHTML == mark) {
// 			left_to_right_count++;
// 		}
// 	}
// 	if(right_to_left_count == grid_size || left_to_right_count == grid_size) {
// 		return true;
// 	}
//
// 	return false;
// };





function switchTurn(){
  playerOne = !playerOne;
  // playerTwo = !playerTwo;
}






$(document).ready(function() {
$("td").click(function(event) {
 event.preventDefault();
$(this).css("background-image", "url('img/o.png')");
$(this).css("background-size", "contain");

if (playerOne == true) {

  $(this).css("background-image", "url('img/x.png')");
  $(this).css("background-size", "contain");
  switchTurn();


} else  {
  $(this).css("background-image", "url('img/o.png')");
  $(this).css("background-size", "contain");
  switchTurn();

};




$("#refresh").click(function(event) {
location.reload(true);
});
});
});
