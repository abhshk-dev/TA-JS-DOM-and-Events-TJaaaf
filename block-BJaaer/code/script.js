let form=document.querySelector('form');


userInfo={};
form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    //console.dir(event.target);
    let modalContainer=document.createElement('div');
    modalContainer.classList.add('.modalContainer');
    let h1=document.createElement('h1');
    let ul=document.createElement('ul');
    for(let i=1;i<=6;i++){
        let li=document.createElement('li');
        userInfo.email=form.elements.email;
        li.innerText=userInfo.email;
        userInfo.YouLove=form.elements.movies;
        li.innerText=userInfo.YouLove;
        ul.append(li);
    }
    modalContainer.append(h1);
    userInfo.name=form.elements.name;
    h1.innerText=userInfo.name;

}

// Creating a modal 


