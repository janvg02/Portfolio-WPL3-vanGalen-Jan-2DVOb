
let AlleImg = document.getElementsByClassName("img");

for (let i = 0; i < AlleImg.length; i++) {
 AlleImg[i].addEventListener("mouseover", MouseOver);
 AlleImg[i].addEventListener("mouseout", MouseOut);
}

function MouseOver() {
 this.style.transform = "scale(1.3, 1.3)";
 // https://www.w3schools.com/js/js_this.asp#:~:text=In%20JavaScript%2C%20the%20this%20keyword,this%20refers%20to%20the%20object.
}

function MouseOut() {
 this.style.transform = "";
//  https://www.w3schools.com/js/js_this.asp#:~:text=In%20JavaScript%2C%20the%20this%20keyword,this%20refers%20to%20the%20object.
}

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
 navbarCollapse.classList.toggle('show');
});