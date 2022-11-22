var socket = io();

function setup() {
    noStroke();
    frameRate(4);
    createCanvas(20* 25, 20* 25); 
    background('#acacac');
    frameRate(4)
   // m.setup(matrix);
}



   
  
    function draww(matrix) {
        background('#acacac');
        //Գծում է աշխարհը, հիմվելով matrix-ի վրա
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) { // xot
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) { // xotaker
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) { // datarkutyun
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) { //predator
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) { // personage 1
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) { // personage 2
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
            }
        }

    }

    socket.on('display message', draww);
