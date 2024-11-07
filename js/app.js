const burger = document.querySelector(".icon-menu")
const burgerelems = document.querySelectorAll(".burger-bar")
const menu = document.querySelector(".mobileheader--menu")
const downloadBtn = document.querySelector(".button")
let menuClosed = true 
burger.addEventListener("click",(event)=>{
    event.preventDefault()
    if (menuClosed){
        menu.style.display = "flex"
        menuClosed=false
        burger.style.position = "fixed"
        downloadBtn.style.border = "1px solid black"
        burgerelems[0].style.transform = "translate(0px,10px) rotate(45deg)"
        burgerelems[1].style.transform = "translate(0px,-5px) rotate(-45deg)"
    }
    else{
        menu.style.display = "none"
        menuClosed=true
        downloadBtn.style.border = "none"
        burger.style.position = "relative"
        burgerelems[0].style.transform = "translate(0,0) rotate(0)"
        burgerelems[1].style.transform = "translate(0,0) rotate(0)"
    }
})