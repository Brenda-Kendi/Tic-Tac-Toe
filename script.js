var origBoard;
const huPlayer='0';
const aiPlayer='X';
const winCombos=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    [6,7,8]
]
const cells=document.querySelectorAll('.cell');
startGame();
function startGame(){
    document.querySelector(".endgame").style.display="none"
    origBoard=Array.from(Array(9).keys());
}