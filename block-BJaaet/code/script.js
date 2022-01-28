

let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector('.movie-list');

console.log(input);

let allMovies = [
    {
        name: 'forest Gump',
        watched: false,
    },
    {
        name: 'inception',
        watched: true,
    }
];

/* ----- sample 

<li>
<input type="checkbox" id="1" class="styled-checkbox">
<label for="1">checkbox</label>
<small>❌</small>
</li>
*/



input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        console.log(event.target.value);
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value="";
        createMovieUI();
    }
});

function deleteMovie(event){
    let id=event.target.dataset.id;
    allMovies.splice(id,1)
    createMovieUI();
}

function handleChange(event){
   
    let id=event.target.id;
    allMovies[id].watched=!allMovies[id].watched;
    
}

function createMovieUI() {
    rootElm.innerHTML="";
    allMovies.forEach((movie, i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add('styled-checkbox');
        input.type = 'checkbox';
        input.id = i;
        input.checked=movie.watched;
        input.addEventListener('change',handleChange);
        let label = document.createElement('label');
        label.for = i;
        label.innerText = movie.name;
        let small = document.createElement('small');
        small.innerText = '❌';
        small.setAttribute('data-id',i);

        small.addEventListener('click',deleteMovie);

        li.append(input, label, small);

        rootElm.append(li);
    });

}

createMovieUI();


