function hide_btn(btn, time) {
    return function () {
        for (let i = 0; i < time / 1000; i++) {
            setTimeout(function () {
                btn.firstChild.data = time / 1000 - i;
                btn.style.color = 'white';
                btn.style.background = `#4FD${i}C${i}`;
            }, i * 1000);
        }
        c = setTimeout(function () {
            btn.style.visibility = 'hidden';
        }, time);
    }
}

let interval1;
let interval2;

function blick_btn(btn) {
    return function () {
        for (let i = 0; i < 11; i++) {
            setTimeout(function () {
                btn.firstChild.data = 10 - i;
            }, i * 1000);
        }
        setTimeout(function () {
            btn.style.visibility = 'hidden';
            interval1 = setInterval(function () {
                btn.style.visibility = 'visible';
            }, 1000);
            interval2 = setInterval(function () {
                btn.style.visibility = 'hidden';
            }, 2000);
        }, 10000);

    }
}

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")

function btnListen(btn, time) {
    btn.addEventListener('click', hide_btn(btn, time));
}
function reset() {
    location.reload();
}
btnListen(btn1, 1000)
btnListen(btn2, 2000)
btnListen(btn3, 3000)
btnListen(btn4, 4000)
btnListen(btn5, 5000)
btnListen(btn6, 6000)
btnListen(btn7, 7000)
btnListen(btn8, 8000)
btnListen(btn9, 9000)
btn10.addEventListener('click', blick_btn(btn10));
btn11.addEventListener('click', reset);


