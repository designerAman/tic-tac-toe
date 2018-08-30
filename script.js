var write1 = document.querySelector("#write1");
var write2 = document.querySelector("#write2");
var write3 = document.querySelector("#write3");

var overlay = document.querySelector("#overlay");

var game = document.querySelector("#game");

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');

var x1 = document.querySelector("#x1");
var x2 = document.querySelector("#x2");
var x3 = document.querySelector("#x3");
var x4 = document.querySelector("#x4");
var x5 = document.querySelector("#x5");
var x6 = document.querySelector("#x6");
var x7 = document.querySelector("#x7");
var x8 = document.querySelector("#x8");
var x9 = document.querySelector("#x9");

var zero1 = document.querySelector('#zero1');
var zero2 = document.querySelector('#zero2');
var zero3 = document.querySelector('#zero3');
var zero4 = document.querySelector('#zero4');
var zero5 = document.querySelector('#zero5');
var zero6 = document.querySelector('#zero6');
var zero7 = document.querySelector('#zero7');
var zero8 = document.querySelector('#zero8');
var zero9 = document.querySelector('#zero9');

zero1.style.display = "none"
zero2.style.display = "none"
zero3.style.display = "none"
zero4.style.display = "none"
zero5.style.display = "none"
zero6.style.display = "none"
zero7.style.display = "none"
zero8.style.display = "none"
zero9.style.display = "none"

x1.style.display = "none";
x2.style.display = "none";
x3.style.display = "none";
x4.style.display = "none";
x5.style.display = "none";
x6.style.display = "none";
x7.style.display = "none";
x8.style.display = "none";
x9.style.display = "none";


activePlayer = 1

one.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero1.style.display === "none") {
            x1.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x2.style.display === "initial" && x3.style.display === "initial") {
                game.style.opacity = 0.2;
                one.style.background = "red";
                two.style.background = "red";
                three.style.background = "red";
                write1.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }else if(x1.style.display === "initial" && x4.style.display === "initial" && x7.style.display === "initial"){
                game.style.opacity = 0.2;
                one.style.background = "red";
                four.style.background = "red";
                seven.style.background = "red";
                write1.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }else if(x1.style.display === "initial" && x5.style.display === "initial" && x9.style.display === "initial"){
                game.style.opacity = 0.2;
                one.style.background = "red";
                five.style.background = "red";
                nine.style.background = "red";
                write1.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }
        }
    } else {
        if (x1.style.display === "none") {
            zero1.style.display = "initial"
            activePlayer = 1;

            if (zero1.style.display === "initial" && zero2.style.display === "initial" && zero3.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    two.style.background = "red";
                    three.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero1.style.display === "initial" && zero4.style.display === "initial" && zero7.style.display === "initial"){
                game.style.opacity = 0.2;
                one.style.background = "red";
                four.style.background = "red";
                seven.style.background = "red";
                write2.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }else if(zero1.style.display === "initial" && zero5.style.display === "initial" && zero9.style.display === "initial"){
                game.style.opacity = 0.2;
                one.style.background = "red";
                five.style.background = "red";
                nine.style.background = "red";
                write2.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }
        }
    }
});

two.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero2.style.display === "none") {
            x2.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x2.style.display === "initial" && x3.style.display === "initial") {
                game.style.opacity = 0.2;
                one.style.background = "red";
                two.style.background = "red";
                three.style.background = "red";
                write1.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }else if(x2.style.display === "initial" && x5.style.display === "initial" && x8.style.display === "initial"){
                game.style.opacity = 0.2;
                two.style.background = "red";
                five.style.background = "red";
                eight.style.background = "red";
                write1.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }
        }
    } else {
        if (x2.style.display === "none") {
            zero2.style.display = "initial"
            activePlayer = 1;

            if (zero1.style.display === "initial" && zero2.style.display === "initial" && zero3.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    two.style.background = "red";
                    three.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if( zero2.style.display === "initial" && zero5.style.display === "initial" && zero8.style.display === "initial"){
                    game.style.opacity = 0.2;
                    two.style.background = "red";
                    five.style.background = "red";
                    eight.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }
        }
    }
});

three.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero3.style.display === "none") {
            x3.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x2.style.display === "initial" && x3.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    two.style.background = "red";
                    three.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(x3.style.display === "initial" && x5.style.display === "initial" && x7.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    five.style.background = "red";
                    seven.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(x3.style.display === "initial" && x6.style.display === "initial" && x9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    six.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }
        }
    } else {
        if (x3.style.display === "none") {
            zero3.style.display = "initial"
            activePlayer = 1;

            if (zero1.style.display === "initial" && zero2.style.display === "initial" && zero3.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    two.style.background = "red";
                    three.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero3.style.display === "initial" && zero5.style.display === "initial" && zero7.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    five.style.background = "red";
                    seven.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero3.style.display === "initial" && zero6.style.display === "initial" && zero9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    six.style.background = "red";
                    nine.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
        }
    }
    }
});

four.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero4.style.display === "none") {
            x4.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x4.style.display === "initial" && x7.style.display === "initial") {
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    one.style.background = "red";
                    seven.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(x4.style.display === "initial" && x5.style.display === "initial" && x6.style.display === "initial"){
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    five.style.background = "red";
                    six.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }
        }
    } else {
        if (x4.style.display === "none") {
            zero4.style.display = "initial"
            activePlayer = 1;

            if (zero4.style.display === "initial" && zero5.style.display === "initial" && zero6.style.display === "initial") {
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    five.style.background = "red";
                    six.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero1.style.display === "initial" && zero4.style.display === "initial" && zero7.style.display === "initial"){
                game.style.opacity = 0.2;
                four.style.background = "red";
                one.style.background = "red";
                seven.style.background = "red";
                write2.style.display = "initial";
                overlay.style.display = "initial";
                write1.style.opacity = 1;
            }
        }
    }
});

five.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero5.style.display === "none") {
            x5.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x5.style.display === "initial" && x9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    five.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(x4.style.display === "initial" && x5.style.display === "initial" && x6.style.display === "initial"){
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    five.style.background = "red";
                    six.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if( x3.style.display === "initial" && x5.style.display === "initial" && x7.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    five.style.background = "red";
                    seven.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if( x2.style.display === "initial" && x5.style.display === "initial" && x8.style.display === "initial"){
                    game.style.opacity = 0.2;
                    two.style.background = "red";
                    five.style.background = "red";
                    eight.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }
        }
    } else {
        if (x5.style.display === "none") {
            zero5.style.display = "initial"
            activePlayer = 1;

            if (zero1.style.display === "initial" && zero5.style.display === "initial" && zero9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    five.style.background = "red";
                    nine.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero4.style.display === "initial" && zero5.style.display === "initial" && zero6.style.display === "initial"){
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    five.style.background = "red";
                    six.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero3.style.display === "initial" && zero5.style.display === "initial" && zero7.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    five.style.background = "red";
                    seven.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(zero2.style.display === "initial" && zero5.style.display === "initial" && zero8.style.display === "initial"){
                    game.style.opacity = 0.2;
                    two.style.background = "red";
                    five.style.background = "red";
                    eight.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }
        }
    }
});

six.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero6.style.display === "none") {
            x6.style.display = 'initial';
            activePlayer = 2;

            if (x3.style.display === "initial" && x6.style.display === "initial" && x9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    six.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }else if(x4.style.display === "initial" && x5.style.display === "initial" && x6.style.display === "initial"){
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    five.style.background = "red";
                    six.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
                    write1.style.opacity = 1;
            }
        }
    } else {
        if (x6.style.display === "none") {
            zero6.style.display = "initial"
            activePlayer = 1;

            if (zero3.style.display === "initial" && zero6.style.display === "initial" && zero9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    six.style.background = "red";
                    nine.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(zero4.style.display === "initial" && zero5.style.display === "initial" && zero6.style.display === "initial"){
                    game.style.opacity = 0.2;
                    four.style.background = "red";
                    five.style.background = "red";
                    six.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";   
            }
        }
    }
});

seven.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero7.style.display === "none") {
            x7.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x4.style.display === "initial" && x7.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    four.style.background = "red";
                    seven.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(x7.style.display === "initial" && x8.style.display === "initial" && x9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    seven.style.background = "red";
                    eight.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(x3.style.display === "initial" && x5.style.display === "initial" && x7.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    five.style.background = "red";
                    seven.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }
        }
    } else {
        if (x7.style.display === "none") {
            zero7.style.display = "initial"
            activePlayer = 1;

            if (zero1.style.display === "initial" && zero4.style.display === "initial" && zero7.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    four.style.background = "red";
                    seven.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(zero7.style.display === "initial" && zero8.style.display === "initial" && zero9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    seven.style.background = "red";
                    eight.style.background = "red";
                    nine.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(zero3.style.display === "initial" && zero5.style.display === "initial" && zero7.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    five.style.background = "red";
                    seven.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
            }
        }
    }
});

eight.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero8.style.display === "none") {
            x8.style.display = 'initial';
            activePlayer = 2;

            if (x2.style.display === "initial" && x5.style.display === "initial" && x8.style.display === "initial") {
                    game.style.opacity = 0.2;
                    two.style.background = "red";
                    five.style.background = "red";
                    eight.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(x7.style.display === "initial" && x8.style.display === "initial" && x9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    seven.style.background = "red";
                    eight.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }
        }
    } else {
        if (x8.style.display === "none") {
            zero8.style.display = "initial"
            activePlayer = 1;

            if (zero7.style.display === "initial" && zero8.style.display === "initial" && zero9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    seven.style.background = "red";
                    eight.style.background = "red";
                    nine.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(zero2.style.display === "initial" && zero5.style.display === "initial" && zero8.style.display === "initial"){
                    game.style.opacity = 0.2;
                    two.style.background = "red";
                    five.style.background = "red";
                    eight.style.background = "red";
                    write2.style.display = "initial";
                    overlay.style.display = "initial";
            }
        }
    }
});

nine.addEventListener('click', function () {
    if (activePlayer === 1) {
        if (zero9.style.display === "none") {
            x9.style.display = 'initial';
            activePlayer = 2;

            if (x1.style.display === "initial" && x5.style.display === "initial" && x9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    five.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(x7.style.display === "initial" && x8.style.display === "initial" && x9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    seven.style.background = "red";
                    eight.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(x3.style.display === "initial" && x6.style.display === "initial" && x9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    six.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }
        }
    } else {
        if (x9.style.display === "none") {
            zero9.style.display = "initial"
            activePlayer = 1;

            if (zero1.style.display === "initial" && zero5.style.display === "initial" && zero9.style.display === "initial") {
                    game.style.opacity = 0.2;
                    one.style.background = "red";
                    five.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            } else if(zero7.style.display === "initial" && zero8.style.display === "initial" && zero9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    seven.style.background = "red";
                    eight.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }else if(zero3.style.display === "initial" && zero6.style.display === "initial" && zero9.style.display === "initial"){
                    game.style.opacity = 0.2;
                    three.style.background = "red";
                    six.style.background = "red";
                    nine.style.background = "red";
                    write1.style.display = "initial";
                    overlay.style.display = "initial";
            }       
        }
    }
});