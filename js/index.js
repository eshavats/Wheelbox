// setTimeout(start, 1000);
// var i = 0;
// var num = document.getElementById('rides');

// const start = () => {
//     setInterval(increase, 1000);
// };

// function increase() {
//     if (i < 6844) 
//     {
//         i++;
//         num.innerText = i;
//     }
// }

var countRiders = 0;
var countRides = 0;
var countDistance = 0;


var div1 = document.getElementById('rider');
var div2 = document.getElementById('rides');
var div3 = document.getElementById('distance');

setTimeout(function(){
    var st1 = setInterval(function(){
        div1.innerHTML = ++countRiders;
        if (countRiders > 6843){
            clearInterval(st1);
        }
    },10)

    var st2 = setInterval(function(){
        div2.innerHTML = ++countRides;
        if (countRides > 3999){
            clearInterval(st2);
        }
    },10)

    var st3 = setInterval(function(){
        div3.innerHTML = ++countDistance;
        if (countDistance > 9999){
            clearInterval(st3);
        }
    },10)
},100);

