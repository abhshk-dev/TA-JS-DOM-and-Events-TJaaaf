let form=document.querySelector('form');


let userInfo={};

let errorMsg={

};

function displayError(name){
    let elm=form.elements[name]
    elm.nextElementSibling.innerText=errorMsg[name];
    elm.parentElement.classList.add('error')
}
function displaySuccess(name){
    let elm=form.elements[name]
    elm.nextElementSibling.innerText="";
    errorMsg[name]="";
    elm.parentElement.classList.remove('error');
    elm.parentElement.classList.add('success');
}
function handleSubmit(event){
    event.preventDefault();
    let elements=event.target.elements;
    
    const username=elements.username.value;
    const name=elements.name.value;
    const email=elements.email.value;
    const phone=elements.phone.value;
    const password=elements.password.value;
    const cnfPass=elements.cnfpassword.value;
    
    //for username
    if(username.length<=4){
        errorMsg.username="UserName can't be less than 4 characters.";
        displayError('username');
    }else{
        displaySuccess('username');
    }
    // for name
    if(!isNaN(name)){
        errorMsg.name="Name can't be numbers.";
        displayError('name');
    }else{
        displaySuccess('name');
    }
    //for email
    if(!email.includes('@')){
        errorMsg.email="Email must contain the symbol `@`";
        displayError('email');
    }else if(email.length<=6){
        errorMsg.email="Email must be at least 6 characters";
        displayError('email');
    }else{
        displaySuccess('email');
    }
    // for phone number
    if(isNaN(phone)){
        errorMsg.phone="Phone number can only be a number";
        displayError('phone');
    }else if(phone.length<7){
        errorMsg.phone="Length of phone number can't be less than 7";
        displayError('phone');
    }else{
        displaySuccess('phone');
    }

    //for password
    if(password !== cnfPass){
        errorMsg.password="Password and confirm password must be same.";
        displayError('password');
        errorMsg.cnfPass="Password and confirm password must be same.";
        displayError('cnfPass');
    }
    else{
        displaySuccess('password');
        displaySuccess('cnfPass');
    }
        
}


form.addEventListener("submit",handleSubmit);

