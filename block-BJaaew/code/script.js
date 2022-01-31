let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let rootElement = document.querySelector("ul");
let rootTags = document.querySelector(".tag-holder");

let allTags = got.houses.map((house) => house.name);
console.log(allTags);

let activeHouse = "";

function createTags(tags = []) {
  rootTags.innerHTML = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.classList.add("tags");
    li.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfTheHouse = got.houses.find((house) => house.name === tag).people || [];
      createUI(peopleOfTheHouse);
    });
    li.innerText = tag;
    rootTags.append(li);
  });
}

function createUI(data = []) {
    rootElement.innerHTML="";
  data.forEach((person) => {
    let li = document.createElement("li");
    li.classList.add("flex-30", "card");

    let img = document.createElement("img");
    img.src = person.image;
    img.alt = person.name;

    let h2 = document.createElement("h2");
    h2.innerText = person.name;
    let p = document.createElement("p");
    p.innerText = person.description;
    let button = document.createElement("a");
    button.href = person.wikiLink;
    button.innerText = "Learn More!";

    let head = document.createElement("div");
    head.classList.add("center");
    head.append(img, h2);

    let footer = document.createElement("div");
    footer.classList.add("text-center");
    footer.append(button);

    li.append(head, p, footer);
    rootElement.append(li);
  });
}
createUI(allPeople);
createTags(allTags);
