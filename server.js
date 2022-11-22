var LivingCreature = require("./prog3/modules/LivingCreature.js");
var Grass = require("./prog3/modules/Grass.js");
var GrassEater = require("./prog3/modules/EatGrass.js");
var Predator = require("./prog3/modules/Predator.js");
var Personage1 = require("./prog3/modules/Personage1.js");
var Personage2 = require("./prog3/modules/Personage2.js");



//server creating 

var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static("./prog3"));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);






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
}
let m = new Matrix(25, 25);
//io.sockets.emit("display message", m);
var types = [0, 1];
var types2 = [2, 3, 4, 5];

var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var predatorArr = [];
var personagre1Arr = [];
var personagre2Arr = [];



function create() {
    console.log("create")
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            if (matrix[y][x] === 2) {
                let eatgrass = new GrassEater(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] === 1) {
                let grass = new Grass(x, y);
                xotArr.push(grass);
            } else if (matrix[y][x] === 5) {
                let personage2 = new Personage2(x, y);
                personagre2Arr.push(personage2);
            } else if (matrix[y][x] === 4) {
                let personage1 = new Personage1(x, y);
                personagre1Arr.push(personage1);
            } else if (matrix[y][x] === 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
        }
    }
    //io.sockets.emit("display message", m);
}



function live(){
   
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }//յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in personagre1Arr) {
        personagre1Arr[i].eat();
    }
    for (var i in personagre2Arr) {
        personagre2Arr[i].eat();

    }
    io.sockets.emit("display message", m);
}
io.on("connection",function(socket){
    create();
    console.log("Send")
})
setInterval(live,500)