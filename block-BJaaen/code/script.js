let playerRoot = document.querySelector('.user-icons');
let computerRoot = document.querySelector('.comp-icons');
let gameResult = document.querySelector('.game-result');
let reset = document.querySelector('button');
let score = document.querySelector('.score');

let count=0;
let dataset = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    }
];

/*---- game logic funciton-----*/

function getWinner(player, computer) {
    //tie
    //userwins
    //computerwins
    if (player.name === computer.name) {
        gameResult.innerText = "TIE 👔";
    } else if (player.beats === computer.name) {
        gameResult.innerText = "YOU WON!!💯🔥"
    } else {
        gameResult.innerText = "YOU LOST!!❌❌"
    }
}

let userSelected = {}, computerSelected = {};
function createUserLayout() {
    playerRoot.innerHTML = "";
    dataset.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`
        if (userSelected.name == icon.name) {
            li.classList.add('active');
        }
        li.addEventListener("click", () => {
            userSelected = icon;
            computerSelected = dataset[getRandomNum()];

            getWinner(userSelected, computerSelected);

            createUserLayout();
            createComputerLayout();
            //console.log(userSelected,computerSelected);
        });
        li.append(i);
        playerRoot.append(li);
    });
}
createUserLayout();

function createComputerLayout() {
    computerRoot.innerHTML = "";
    dataset.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`
        if (computerSelected.name == icon.name) {
            li.classList.add('active');
        }
        li.append(i);
        computerRoot.append(li);

    });
}

createComputerLayout();

/* ---- Random--Number--Generator ----*/

function getRandomNum(max = 3) {
    return Math.floor(Math.random() * max);
}

/*-------Reset button ----*/

reset.addEventListener('click', () => {
    userSelected = {};
    computerSelected = {};
    gameResult.innerText = "";
    createUserLayout();
    createComputerLayout();
})