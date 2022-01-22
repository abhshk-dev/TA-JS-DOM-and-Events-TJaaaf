
let container=document.querySelector('.container')
container.classList.add('flex')
for(let i=1;i<=504;i++){
    var div=document.createElement('div');
    div.classList.add('box');
    

    let h3=document.createElement('h3');
    let random=getrandomNum(504);
    h3.innerText=random;
    div.append(h3);
    container.append(div);
}

//random number 

 function getrandomNum(max){
    return Math.floor(Math.random() * max);
 }
// random color

function getRandomColor () {
         let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
         let color = '#';
         for (i=0;i<6;i++) {
             let randomNumber = Math.floor(Math.random() * 16);
             color = color + hex[randomNumber];
         }
         return color;
     }
// Event handler function

function handleMouse(){
    let allBoxes=document.querySelectorAll('.box');
    allBoxes.forEach((box)=>{
        box.style.backgroundColor=getRandomColor();
        box.querySelector('h3').innerText=getrandomNum(500);
    });
}

// mousemove event 
     container.addEventListener('mousemove',handleMouse)