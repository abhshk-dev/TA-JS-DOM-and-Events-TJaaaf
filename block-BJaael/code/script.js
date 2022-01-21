
let container=document.querySelector('.container')
container.classList.add('flex')
for(let i=1;i<=504;i++){
    var div=document.createElement('div');
    div.classList.add('box');
    

    let h2=document.createElement('h2');
    h2.innerText='Math.floor(Math.random()*504)';

    div.append('h2');
    container.append(div);
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

function hanleMouse(){
    let allBox=document.querySelector('.box');
    for(let box of allBox){
        box.style.backgroundColor=getRandomColor();
        box.innerHTML=`<h2>${Math.floor(Math.random()*504)}</h2>`
    }
}

     container.addEventListener('mousemove',)