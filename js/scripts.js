$(document).ready(function() {
$("td").click(function(event) {
 event.preventDefault();
$(this).css("background-image", "url('img/x.png')");
$(this).css("background-size", "contain");

 });






// });
// $("#refresh").click(function(){
//   location.reload(true);




$("#refresh").click(function(event) {
location.reload(true);
});
});
