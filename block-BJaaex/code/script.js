

let game = document.querySelector("#game");
let grid = document.createElement("section");

grid.classList.add("grid");
game.appendChild(grid);

let gameGrid=cardsArray.concat(cardsArray);

gameGrid.sort(() => 0.5 - Math.random());

let firstGuess="";
let secondGuess="";
let count=0;
let previousTarget=null;
let delay=1200;
//--->Creating UI 

gameGrid.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  const front=document.createElement('div');
  front.classList.add('front');

  const back=document.createElement('div');
  back.classList.add('back');
  card.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


grid.addEventListener('click',(event)=>{
    let clicked=event.target;
    
    if (clicked.nodeName === 'SECTION'
         || clicked===previousTarget
         || clicked.parentNode.classList.contains('selected')
         ) {
        return;
    }
    if(count<2){
        count++;
    if(count===1){
        firstGuess=clicked.parentNode.dataset.name;
        console.log(firstGuess)
        clicked.classList.add('selected');
    }else{
        secondGuess=clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.classList.add('selected');
    }

    if(firstGuess!=="" && secondGuess!==""){    // Match checker 
        if(firstGuess===secondGuess){      
            setTimeout(match,delay);
            setTimeout(resetGuesses,delay);
        }else{
            setTimeout(resetGuesses,delay);
        }
    }
    previousTarget=clicked;
}  
});


//--->card matching function 

function match(){
    var selected=document.querySelectorAll('.selected');
    selected.forEach((card)=>{
        card.classList.add('match');
    });
   
}

//---> Guess reset function 

function resetGuesses(){
    firstGuess='';
    secondGuess='';
    count = 0;

    var selected=document.querySelectorAll('.selected');
    selected.forEach((card)=>{
        card.classList.remove('selected');
});
}