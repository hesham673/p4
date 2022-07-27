// select landing page element
let landingPage = document.querySelector(".landing-page")
// get array of images
let imgArray = ["05.jpg","02.jpg","01.jpg",]
// random background option
let backgroundOption = true
// variable to controle the background interval
let backgroundInterval;
function randomizeback(){
    if(backgroundOption===true){
        backgroundInterval = setInterval(()=>{
            // get random number
            let randomNumber= Math.floor(Math.random()*imgArray.length)
            // change background image url
            landingPage.style.backgroundImage = 'url("images/'+imgArray[randomNumber]+'")'
        },1000)
        
    }
}
// check if there is local storage random background item----------------------------------------------------------------
let backgroundLocalItem = localStorage.getItem("background-option")
// check if random background local storage is not empty
if(backgroundLocalItem!==null){
    if(backgroundLocalItem==='true'){
        backgroundOption=true;
        randomizeback()

    }
    else{
        backgroundOption=false;
    }
    // remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element=>{
        element.classList.remove("active")
    })
    if(backgroundLocalItem==='true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    }
    else{
        document.querySelector(".random-backgrounds .no").classList.add("active")
}}
// switch backgrounds ---------------------------------------------------------------------------
const randbc=document.querySelectorAll(".random-backgrounds span");
// loop on all list items
randbc.forEach(span=>{
    // click o every list items
    span.addEventListener("click",(e)=>{
        // remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
        })
        // add active class on self
        e.target.classList.add("active")
        if(e.target.dataset.background==='yes'){
            backgroundOption=true
            randomizeback();
            localStorage.setItem("background-option",true)
        }
        else{
            backgroundOption=false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background-option",false)
        }
        })
    })
// check if there's a local storage color option-------------------------------------------
let mainColors = localStorage.getItem("color-option")
if(mainColors!== null){
    document.documentElement.style.setProperty('--main--color',localStorage.getItem("color-option"))
    // remove active class from all colors list items
    document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active")
        // add active class to the element === the local storage item
        if(element.dataset.color===mainColors){
            // add active class
            element.classList.add("active")
        }
        
    })}
// switch color--------------------------------------------------------------------------
const colorList=document.querySelectorAll(".colors-list li");
// loop on all list items
colorList.forEach(li=>{
    // click o every list items
    li.addEventListener("click",(e)=>{
        // set color on root
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color)
        // set color in local storage
        localStorage.setItem("color-option",e.target.dataset.color)
        // remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
        })
        // add active class on self
        e.target.classList.add("active")
        })
    })
// toggle spin class on icon-------------------------------------------------------
document.querySelector(".toggle-setting i").onclick=function(){
    // toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    // toggle class open on main setting box
    document.querySelector(".setting-box").classList.toggle("open");
}






document.querySelectorAll("ul li").forEach(li=>{
    li.addEventListener("click",(e)=>{
        if(e.target.dataset.color==="#e91e63"){
            // console.log(document.images)
    document.images[0].src="../images/about us2.jpg"
}
if(e.target.dataset.color==="#ff9800"){
    // console.log(document.images)
document.images[0].src="../images/about us3.jpg"
}
if(e.target.dataset.color==="#03a9f4"){
    // console.log(document.images)
document.images[0].src="../images/about us.webp"
}
if(e.target.dataset.color==="#4caf50"){
    // console.log(document.images)
document.images[0].src="../images/about us4.jpg"
}
if(e.target.dataset.color==="#009688"){
    // console.log(document.images)
document.images[0].src="../images/about us5.jpg"
}

})})
if(localStorage.getItem("color-option")==="#009688"){
document.images[0].src="../images/about us5.jpg"
}
if(localStorage.getItem("color-option")==="#e91e63"){
    // console.log(document.images)
document.images[0].src="../images/about us2.jpg"
}
if(localStorage.getItem("color-option")==="#ff9800"){
// console.log(document.images)
document.images[0].src="../images/about us3.jpg"
}
if(localStorage.getItem("color-option")==="#03a9f4"){
// console.log(document.images)
document.images[0].src="../images/about us.webp"
}
if(localStorage.getItem("color-option")==="#4caf50"){
// console.log(document.images)
document.images[0].src="../images/about us4.jpg"
}

//select skills selector ---------------------------------------------------------
let ourskills = document.querySelector(".skills")
window.onscroll = function(){
    // skills offset top (the length from the top of the element tothe top of the page)
    let skillsOffsetTop = ourskills.offsetTop
        
    //  skills outer height (the height of the element)
    let skillsOuterHeight = ourskills.offsetHeight
    
    // window height (the height of the page =>vh)
    let windowHeight = this.innerHeight
    
    // window scrollTop  (how much sroll you did now)
    let windowScrollTop = this.pageYOffset
    
    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress
        })
    }
}

// create popup with the image--------------------------------------
let ourGallery = document.querySelectorAll(".gallery img")
ourGallery.forEach(img => {
    img.addEventListener('click',(e) =>{
        // create overlay element
        let overlay = document.createElement("div")
        // add class to overlay
        overlay.className = 'popup-overlay'
        // append overlay to the body
        document.body.appendChild(overlay)
        //create the popup box
        let popupBox = document.createElement("div")
        // add class to the popup box
        popupBox.className = "popup-box"

        if(img.alt!==null){
            // create heading
            let imgHeading = document.createElement("h3")
            // create text for heading
            let imgText = document.createTextNode(img.alt)
            // append the text to the heading
            imgHeading.appendChild(imgText)
            // append the heading to the popup box
            popupBox.appendChild(imgHeading)
        }
        // create the image
        let popupImage = document.createElement("img")
        // set image src
        popupImage.src = img.src
        // add the image to the popupBox
        popupBox.appendChild(popupImage)
        // append the popup box to the body
        document.body.appendChild(popupBox)
        // create the close span
        let closeButton = document.createElement("span")
        // create the close button text
        let closeButtonText = document.createTextNode("X")
        // append the text to the button
        closeButton.appendChild(closeButtonText)
        // add class to close button
        closeButton.className = 'close-button'
        // add close button to the popup box
        popupBox.appendChild(closeButton)
    })
})

// close popup
document.addEventListener('click',function (e) {
    if(e.target.className == 'close-button'){
    // remove the current popup
    e.target.parentNode.remove()
    // remove overlay
    document.querySelector(".popup-overlay").remove()
}
})
// select all bullets----------------------------------------------------
const allBullets = document.querySelectorAll(".nav-bullets .bullet")

allBullets.forEach(bullet =>{
    
    bullet.addEventListener("click",(e) =>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
    })
    e.target.parentElement.querySelectorAll(".clicked").forEach(bullet=>{
        bullet.classList.remove("clicked") })
        e.target.classList.add("clicked")
    // console.log(e.target)

})
})
// select all links----------------------------------------------------
const allLinks = document.querySelectorAll(".links a")

allLinks.forEach(link =>{
    
    link.addEventListener("click",(e) =>{
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
    })
    // e.target.parentElement.querySelectorAll(".clicked").forEach(bullet=>{
    //     bullet.classList.remove("clicked") })
    //     e.target.classList.add("clicked")
    // // console.log(e.target)

})
})

// -----------------------------------------------------------------------------
// function scrollToSomewhere(elements){
//     elements.forEach(ele =>{
    
//         ele.addEventListener("click",(e) =>{
//             e.preventDefault()
//             document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         })
//         // e.target.parentElement.querySelectorAll(".clicked").forEach(bullet=>{
//         //     bullet.classList.remove("clicked") })
//         //     e.target.classList.add("clicked")
//         // // console.log(e.target)
    
//     })
//     })
// }
// scrollToSomewhere(allBullets)
// scrollToSomewhere(allLinks)
// ---------------------------------------------------------------------------
function handleActive(e){
    e.target.parentElement.querySelectorAll(".active").forEach(bullet=>{
            bullet.classList.remove("active") 
        })
            e.target.classList.add("active")
}
// show and hide bullets------------------------------------------------
let bulletsSpan = document.querySelectorAll(".bullets-option span")
let bulletsContainer = document.querySelector(".nav-bullets")
let bulletLocalItem = localStorage.getItem("bullets-option")
if(bulletLocalItem !== null){
    bulletsSpan.forEach(span =>{
        span.classList.remove("active")
    })
    if(bulletLocalItem ==='block'){
        bulletsContainer.style.display = 'block'
        document.querySelector(".bullets-option .yes").classList.add("active")
    }
    else{
        bulletsContainer.style.display = "none"
        document.querySelector(".bullets-option .no").classList.add("active")

    }
}
bulletsSpan.forEach(span =>{
    span.addEventListener("click",(e) =>{
        if(span.dataset.display === "show"){
            bulletsContainer.style.display = 'block'
            localStorage.setItem("bullets-option",'block')
        }
        else{
            bulletsContainer.style.display = 'none'
            localStorage.setItem("bullets-option",'none')
        }
        handleActive(e)
    })
})
console.log(bulletsContainer)
// reset button ----------------------------------------------------------
document.querySelector(".reset-options").onclick = function (){
    // localStorage.clear()
    localStorage.removeItem("color-option")
    localStorage.removeItem("background-option")
    localStorage.removeItem("bullets-option")
    window.location.reload()
}
// toggle menu-----------------------------------------------------------------
let toggleBtn = document.querySelector(".toggle-menu")
let tLinks = document.querySelector(".links")
toggleBtn.onclick = function (e){
    // stop propagation in video 34 like merging the spans and the margin among them as one element
    e.stopPropagation()
//  toggle class menu active on button
    this.classList.toggle("menu-active")
    //  toggle class open on links
    tLinks.classList.toggle("open")
}

//click any where outside the menu and the toggle button
document.addEventListener("click",(e) => {
    if(e.target !== toggleBtn && e.target !== tLinks){
        // check if the menu is open
        if(tLinks.classList.contains("open")){
            //  toggle class menu active on button
            toggleBtn.classList.toggle("menu-active")
            //  toggle class open on links
            tLinks.classList.toggle("open")
        }
    }
})

// stop propagation on menu
tLinks.onclick = function (e) {
    e.stopPropagation()
}