isX = true;

boxes = Array.from(document.querySelectorAll('.box'))
console.log(boxes)

winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



xMoves = [];
oMoves = [];


function move() {
    if (this.innerHTML == '') {
        this.innerHTML = isX ? 'x' : 'o';
        //nadaje X albo O w zaleznosci od zmiennej isX
        isX = !isX;
        //zmiana ruchu
        if (isX == false) {
            xMoves.push(this.id);
        } else {
            oMoves.push(this.id);
        }
        //pushowanie ID do tablic w zależnosci od ruchu
    }

}

function checkWin() {
    
}

console.log(xMoves)
console.log(oMoves)

boxes.forEach(box => box.addEventListener('click', move));