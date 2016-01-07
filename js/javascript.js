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
};
$(document).ready(function(){
  updatePosition(1);
  updatePosition(2);
  updatePosition(1);
  updatePosition(2);
  updatePosition(1);
  updatePosition(2);
  updatePosition(2);
  updatePosition(2);

});

