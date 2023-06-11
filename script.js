// document.getElementsByClassName("img")[0].addEventListener("mouseover", MouseOver);
// document.getElementsByClassName("img")[1].addEventListener("mouseout", MouseOut);
// // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_addeventlistener
// function MouseOver(){
//  document.getElementsByClassName("img")[0].style.transform = "scale(1.2,1.2)";
// //  http://www.java2s.com/Tutorials/Javascript/Buildin_Object/Style/Style_transform.htm
// }
// function MouseOut(){
//  document.getElementsByClassName("img")[1].removeEventListener("mouseover");
// }

// let AlleImages = document.getElementsByClassName("img");
//
// for (let i = 0; i < AlleImages; i++) {
//  AlleImages.addEventListener("mouseover", MouseOver);
//  AlleImages.addEventListener("mouseout", MouseOut);
// }
// function MouseOver() {
//  AlleImages.style.transform = "scale(1.2, 1.2)";
// }
//
// function MouseOut() {
//  AlleImages.style.transform = ""; //
// }
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