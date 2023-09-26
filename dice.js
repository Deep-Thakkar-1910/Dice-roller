function rollDice(){
// random image 1
var imageNumber1 = Math.floor(Math.random()*6)+1;
var image1 = document.querySelector('.img1');
image1.setAttribute("src","images/dice"+imageNumber1+".png");
};

const button=document.querySelector(".GameButton");
button.addEventListener("click",()=>{
   button.classList.add("animation");
   setTimeout(()=>{
      button.classList.remove("animation");
   },100);
});