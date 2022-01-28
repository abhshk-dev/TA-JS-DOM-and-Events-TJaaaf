

let input=document.querySelector('.input1');

input.addEventListener('keyup',(event) =>{
    if(event.keyCode===13){
        console.log(event.target.value);
    }
})