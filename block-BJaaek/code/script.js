let clickMe=document.querySelector('.first');
let mouseMove=document.querySelector('.second');

//#ff0011
// 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
function colorGenerator(){
    let hexChars=[
        '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color='#';
    for(let i=0;i<6;i++){
        let randomNum=Math.floor(Math.random()*16);
        color=color.concat(hexChars[randomNum]);
    }
    return color;
}

function changeColor(){
    let box=document.querySelector('.box');
    box.style.backgroundColor=colorGenerator();
}
clickMe.addEventListener('click',changeColor);

function handlemouseMove(){

    mouseMove.style.backgroundColor=colorGenerator();
}
mouseMove.addEventListener('mousemove',handlemouseMove)