
let numbers=document.querySelector('.numbers');
let display=document.querySelector('.display');



function handleClick(event){
    display.innerText=event.target.innerText;
}
