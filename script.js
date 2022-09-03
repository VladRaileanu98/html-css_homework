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

function hover1(element) {
    element.setAttribute('src', 'https://archello.s3.eu-central-1.amazonaws.com/images/2020/01/05/Luxury-Contemporary-Villa-Interior-Design-1.1578228835.315.jpg');
  }
  function unhover1(element) {
    element.setAttribute('src', 'https://do84cgvgcm805.cloudfront.net/article/362/1200/25cf654358d7812a07902fa42f249dedbec8eb058bdda541c88b9e3b317a93d9.jpg');
  }

  
  
function hover2(element) {
    element.setAttribute('src', 'https://i.pinimg.com/736x/dc/cc/0b/dccc0b2382fa8cab3756d3de70cd48e0--modern-loft-modern-luxury.jpg');
}
  function unhover2(element) {
    element.setAttribute('src', 'https://the-view-luxury-villas.com/wp-content/uploads/2019/11/Luxury-Villas-Lefkada-Infinity-Pool-und-Garten6.jpg');
  }
  
  function hover3(element) {
    element.setAttribute('src', 'http://1.bp.blogspot.com/-EO-vsnPF-bQ/UOcLHchvkhI/AAAAAAAANtg/h-ZQQg7WhpM/s1600/5_Star_Luxury_Mountain_Home_With_An_Amazing_Interiors_In_Swiss_Alps_world_of_architecture_07.jpg');
  }
  function unhover3(element) {
    element.setAttribute('src', 'https://www.theluxurysignature.com/wp-content/uploads/2018/10/villa-noku-bali-banner.jpg');
  }

  function hover4(element) {
    element.setAttribute('src', 'https://www.interiorzine.com/wp-content/uploads/2014/04/front-outdoor-area-fireplace.jpg');
  }
  function unhover4(element) {
    element.setAttribute('src', 'https://img.directbooking.ro/getimage.ashx?file=ho$ho_d1e57303-5a84-4e9a-b486-e451472c3352.jpg');
  }

  function hover5(element) {
    element.setAttribute('src', 'https://i.pinimg.com/736x/f9/6d/af/f96daff9bc723ba1d6b177c559944e94--log-cabin-living-log-cabins.jpg');
  }
  function unhover5(element) {
    element.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ville-di-lusso-piu-belle-del-mondo-oggetto-editoriale-800x600-1528889075.jpg?resize=480:*');
  }

  function hover6(element) {
    element.setAttribute('src', 'http://1.bp.blogspot.com/-NS0G6HJ-Fek/UOcLD8gjdQI/AAAAAAAANtI/pq1i_gPWJZs/s1600/5_Star_Luxury_Mountain_Home_With_An_Amazing_Interiors_In_Swiss_Alps_world_of_architecture_04.jpg');
  }
  function unhover6(element) {
    element.setAttribute('src', 'https://www.uniqueretreats.com/wp-content/uploads/2018/01/villa3766-pic6.jpg');
  }
