let btnToggle = document.getElementById("toggle-content");
let btnAdd = document.getElementById("add-content");
let btnRemove = document.getElementById("remove-content");

btnToggle.addEventListener("click", onClickBtnToggle);
btnAdd.addEventListener("click", onClickBtnAdd);
btnRemove.addEventListener("click", onClickBtnRemove);


function onClickBtnToggle() {
    let links = document.getElementById("link-container");

    links.classList.toggle("d-none");
}

function onClickBtnAdd() {
    let links = document.getElementById("link-container");

    // adaug un link
    // 1. creez un <a>
    let newLink = document.createElement("a");
    newLink.setAttribute("href", "#");
    newLink.classList.add("card-link");
    newLink.innerHTML = "Un alt link";

    // 2. adaug in pagina
    links.appendChild(newLink);
}

function onClickBtnRemove() {
    let links = document.getElementById("link-container");
    let element = links.firstElementChild;

    if (element) {
        links.removeChild(element);
    }
}

