let clickMe=document.querySelector('.first');
let mouseMove=document.querySelector('.second');
function changeColor(){
    let box=document.querySelector('.box');
    box.style.backgroundColor="red";
}
clickMe.addEventListener('click',changeColor);

mouseMove.addEventListener('mousemove',changeColor);