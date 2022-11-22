var side = 25;


class Matrix {
    constructor(N, M) {
        this.width = M;
        this.height = N;
        this.matrix = [];
    }

    get widthArray() {
        let array = [];
        for (let i = 0; i < this.width; i++) {
            array.push(
                this.getRandomType(i)
            );
        }
        return this.shuffle(array);
    }

    get heightArray() {
        for (let i = 0; i < this.height; i++) {
            this.matrix.push(this.widthArray)
        }
        return this.matrix;
    }

    getRandomType(index) {
        return index > (this.width - 5) ? types2[Math.floor(Math.random() * types2.length)] :
            types[Math.floor(Math.random() * types.length)]
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

   

    draw(matrix) {
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
}