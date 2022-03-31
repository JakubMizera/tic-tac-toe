isX = true;

boxes = Array.from(document.querySelectorAll('.box'))
info = document.querySelector(".info");
resetBtn = document.querySelector(".btn");

winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

xMoves = [];
oMoves = [];


function move() {
    if (this.innerHTML == '') {
        this.innerHTML = isX ? 'X' : 'O';
        //nadaje X albo O w zaleznosci od zmiennej isX
        isX = !isX;
        //zmiana ruchu
        if (isX == false) {
            xMoves.push(parseInt(this.id));
        } else {
            oMoves.push(parseInt(this.id));
        }
        //pushowanie ID do tablic w zależnosci od ruchu
    }

    for (i = 0; i < winCondition.length; i++) {
        if (JSON.stringify(xMoves.sort()) === (JSON.stringify(winCondition[i]))) {
            info.innerHTML = "X wygrały";
            reset();
            //dziala dopoki sa 3 "X" jesli jest wiecej to nie

        } else if (JSON.stringify(oMoves.sort()) === JSON.stringify(winCondition[i])) {
            info.innerHTML = "O wygrały";
            reset();
        }
    }

}

function reset() {
    boxes.forEach(box => box.innerHTML = "")
    xMoves = [];
    oMoves = [];
}

boxes.forEach(box => box.addEventListener('click', move));
resetBtn.addEventListener('click', reset);