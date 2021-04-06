//je fais un pile ou face

var btnTry = document.getElementById('toto');
var message = document.getElementById('message');
var headCount = document.getElementById('headCount');
var tailCount = document.getElementById('tailCount');
var head = 0;
var tail = 0;

btnTry.addEventListener('click', function(e) {
    e.preventDefault();
    var num = Math.floor(Math.random() * 2);
    console.log(num);
    if (num == 0) {
        message.innerText = "La pièce est tombée sur pile";
        tail++;
        tailCount.innerText = tail;
        console.log("pile");
    } else {
        console.log("face");
        message.innerText = "La pièce est tombée sur face";
        head++;
        headCount.innerText = head;
    }
})