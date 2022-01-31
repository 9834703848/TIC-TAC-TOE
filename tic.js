console.log("my self shrinath");
let board = ["", "", "", "", "", "", "", "", ""];
let player = 1;
let start = 1;
//show_board();
function show_board() {
  for (let i = 1; i <= 9; i++) {
    let ele = document.getElementById(`b${i}`);
    ele.innerHTML = board[i - 1];
    console.log(board[i - 1]);
  }
}
for (let i = 1; i <= 9; i++) {
  document.getElementById(`b${i}`).addEventListener("click", (e) => {
    if (board[i - 1] == "" && start == 1) {
      if (player == 1) {
        board[i - 1] = "O";
        player = 2;
      } else {
        board[i - 1] = "X";
        player = 1;
      }
      console.log(board[0]);
    }
    show_board();
    check_win();
  });
}
document.getElementById("startgame").addEventListener("click", (e) => {
  document.getElementById("info").innerHTML = "GAME ON";
  start = 1;
  player = 1;

  board = ["", "", "", "", "", "", "", "", ""];
  show_board();
});
let win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];
function check_win() {
  let draw = true;
  for (let i = 0; i < 8; i++) {
    if (
      board[win[i][0]] == board[win[i][1]] &&
      board[win[i][0]] == board[win[i][2]] &&
      board[win[i][0]] != ""
    ) {
      if (board[win[i][0]] == "X") {
        console.log("X win");
        document.getElementById("info").innerHTML = "X WIN";
        start = 0;
        draw=false;
        break;
      } else {
        console.log("O WIN");
        document.getElementById("info").innerHTML = "O WIN";
        start = 0;
        draw=false;
        break;
      }
    }
    if (
      board[win[i][0]] == "" ||
      board[win[i][1]] == "" ||
      board[win[i][2]] == ""
    ) {
      draw = false;
    }
  }
  if (draw == true) {
    
    player = 1;
    console.log("GAME DRAW");
    document.getElementById("info").innerHTML = "DRAW";
    start = 0;
  }
}
