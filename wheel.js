let btn1=document.getElementById('inner');
let btn2=document.getElementById('outer');
var deg;
btn1.addEventListener('click',function(){
    btn1.style.transform='0deg';
    rotate();
})

function rotate(){
    deg=Math.floor(Math.random()*(1000-360+1))+360;
    btn2.style.transform=`rotate(${deg}deg)`;

}