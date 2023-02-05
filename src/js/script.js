let typed = new Typed(".typing", {
    strings:["", "Programador Front-End", "Desenvolvedor Web", "Programador Front-End"],
    typeSpeed: 200,
    BackSpeed: 600,
    loop: true
})


/* ========================= Toggle Style Switcher ========================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");

})


// Hide style - switcher on scroll //
window.addEventListener("scroll",() =>{
  if(document.querySelector(".style-switcher").classList.contains("open")) {

    document.querySelector(".style-switcher").classList.remove("open");
  }
})


// TEMA CORES
const alternateStyles = document.querySelectorAll(".alternate-style")
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "true")
        }
    })
}


// DARK MODE 
const dayNight = document.querySelector(".day-night");
window.addEventListener("load", () => {
  if(document.body.classList.contains("dark")) {

    dayNight.querySelector("i").classList.add("fa-sun")
  }
  else{
    dayNight.querySelector("i").classList.add("fa-moon")
  }
  
})



document.querySelectorAll('.nav li a').forEach(el => {
  el.onclick = () => {
    document.querySelectorAll('.nav li a').forEach(el => el.classList.remove('active'));
    el.classList.add('active');
  }
})
