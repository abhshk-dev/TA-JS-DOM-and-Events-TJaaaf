let form = document.querySelector('form');
let modal = document.querySelector('.modalContainer');
let close = document.querySelector('.close');
let modalInfo = document.querySelector('.modal_info');

userInfo = {};
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    let elements = event.target.elements;

    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.movie = elements.movie.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.checked;


    modal.classList.add("open");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
        elements.name.value = "";
        elements.email.value = "";
        elements.movie.value = "";
        elements.book.value =0 ;
        elements.terms.checked = false;

    });

    displayData(userInfo);

}

/*
      <li>Email:</li>
      <li>You LOve:</li>
      <li>color</li>
      <li>rating:</li>
      <li>Book genre</li>
      <li>😜You agree to terms and conditions</li>
 */

function displayData(data = {}) {
    modalInfo.innerHTML = "";
    let li = document.createElement('li');
    let h1 = document.createElement('h1');
    h1.innerText = `Hello ${data.name}`;
    h1.style.fontSize = '24px';
    h1.style.fontWeight = "600";
    let email = document.createElement('li');
    email.innerText = `Your Email:${data.email}`;
    let color = document.createElement('li');
    color.innerText = `Color:${data.color}`;
    let rating = document.createElement('li');
    rating.innerText = `Rating:${data.movie}`;
    let bookGenre = document.createElement('li');
    bookGenre.innerText = `Book Genre: ${data.book}`;
    let terms = document.createElement('li');
    terms.innerText = `${data.terms
        ? "You have accepted The terms"
        : "You have not accepted the terms"}`

    li.append(h1);
    modalInfo.append(li, email, color, rating, bookGenre, terms);

}


