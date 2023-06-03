let root = document.querySelector(':root');

function colororange() {
    root.style.setProperty('--blue', '#ff9900');
    root.style.setProperty('--bs1', '#c77700');
    root.style.setProperty('--bs2', '#ffbb00');
    root.style.setProperty('--fbs1', '#c77700');
    root.style.setProperty('--fbs2', '#ffbb00');
}

function colorblue() {
    root.style.setProperty('--blue', '#394bbb');
    root.style.setProperty('--bs1', '#2b3571');
    root.style.setProperty('--bs2', '#7993ff');
    root.style.setProperty('--fbs1', '#25307a');
    root.style.setProperty('--fbs2', '#4356da');
    
}

function colorblack() {
    root.style.setProperty('--blue', '#242424');
    root.style.setProperty('--bs1', '#151515');
    root.style.setProperty('--bs2', '#333333');
    root.style.setProperty('--fbs1', '#121212');
    root.style.setProperty('--fbs2', '#363636');
}

function colorgreen() {
    root.style.setProperty('--blue', 'green');
    root.style.setProperty('--bs1', '#006d00');
    root.style.setProperty('--bs2', '#009300');
    root.style.setProperty('--fbs1', '#006100');
    root.style.setProperty('--fbs2', '#009f00');

}




const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".mobile-icon");

menu.addEventListener("click", () =>{
    navbar.classList.toggle("open");
    menu.classList.toggle("cross");
});


// to close menu when click on link 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navbar.classList.remove("open");
}
