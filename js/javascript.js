// update a racer's position

function updatePosition (racer){
  var removed = 0;   //used to track if the previous position had been active
  //racer should be either 1 or 2 dependent on the lane that needs to be updated
  var table = document.getElementById("trackTable");
  for (var i = 0, row; row = table.rows[i]; i++) {
    //iterate through rows
    for (var j = 0, col; col = row.cells[j]; j++) {
      //iterate through columns
      //is this the correct lane?
      if (col.classList.contains('lane' + racer)){
        if (removed === 1){
          col.classList.add('active' + racer);
          removed = 0;
        }
        else if (col.classList.contains('active' + racer)){
          col.classList.remove('active' + racer);
          removed = 1;
        }
      }     
    }
  }
  if (removed === 1){
    //this racer has reached the end
    return racer;
  }
  else{
    return "";
  }
};

function declareWinner(winner){
  $("#winner" + winner).show(); 
}
$(document).ready(function(){
  var winner = "";
  $(document).keyup(function(e){
    console.log(e.which);
    if (winner === ""){
      if (e.which == 81){
      winner = updatePosition(1);
      }
      else if (e.which == 80){
        winner = updatePosition(2);
      }
    }
    else{
      declareWinner(winner);
    }
  });

  $("#restart").click(function(){
    $(document).location.reload();
  });

});


