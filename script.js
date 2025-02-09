player = 0;
function choose(id) {
  if (document.getElementById(id).innerHTML == "") {
    if (player == 0) {
      document.getElementById(id).innerHTML = "X";
      player = 1;
    } else {
      document.getElementById(id).innerHTML = "O";
      player = 0;
    }
  }
}
