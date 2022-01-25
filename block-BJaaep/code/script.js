// without event delegation.

let firstBox=document.querySelectorAll('.first li');


firstBox.forEach((box,index)=>{
    
    box.addEventListener("click",function(event){
        console.log(index);
        event.target.innerText=index+1;
    

    setTimeout(()=>{
        event.target.innerText="";
    },5000);
});
});


//With event delegation 

let secondBox=document.querySelector('.second');

secondBox.addEventListener("click",function(event){
    let text=event.target.dataset.text;
    event.target.innerText=text;

    setTimeout(()=>{
        event.target.innerText="";
    },5000);
})