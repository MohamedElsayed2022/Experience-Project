
//check if there local storage color option
let  mainColors = localStorage.getItem("color_option");
console.log(mainColors)

if(mainColors !== null)
{
    document.documentElement.style.setProperty('--main-color',mainColors)


    //check for active class colors list item
    
    document.querySelectorAll(".colors-list li").forEach(element=>{


        element.classList.remove("active");
               //add active class to li 

        if(element.dataset.color === mainColors)
        {
         element.classList.add("active")
        }
       
       });


     
}

let backgroundOptions = true;
let backgroundlocalitem = localStorage.getItem("background_option")

let backgroundInterval;
if(backgroundlocalitem != null)
{
   
console.log(backgroundlocalitem)
console.log(typeof backgroundlocalitem)
if(backgroundlocalitem === 'true')
{
 backgroundOptions = true;
}else{
    backgroundOptions = false;
}
//remove active from span

document.querySelectorAll(".random-backgrounds span").forEach(element=>{
    element.classList.remove("active")
    });

    
    if(backgroundOptions === 'true')
    {
        document.querySelector(".yes").classList.add("active")
    }else{
        document.querySelector(".no").classList.add("active")
    }




}

document.querySelector(".toggle-settings .fa-gear").onclick=function()
{
    this.classList.toggle("fa-spin");

    //document.querySelector(".settings-box").classList.toggle("open");
     document.querySelector(".settings-box").classList.toggle("open");


};

//switch color
const colorli = document.querySelectorAll(".colors-list li");

 console.log(colorli)

//loop on all list itemscolorli.forEach(li => {
    
colorli.forEach(li=>{
    //console.log(li)
    li.addEventListener("click",(e)=>{
        console.log(e.target.dataset.color)

        //set color on root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)

        //set color on localstorage

        localStorage.setItem("color_option",e.target.dataset.color)

        //remove active from Elments
        handleactive(e)
    })


})


const randomBackEl = document.querySelectorAll(".random-backgrounds span");


//loop on all list itemscolorli.forEach(li => {
    
    randomBackEl.forEach(span=>{
    span.addEventListener("click",(e)=>{

        

        //remove active from span
        handleactive(e)
        if( e.target.dataset.background === 'yes')
        {
          backgroundOptions = true
          randomizeImages()
          localStorage.setItem("background_option", true)


        }else{
            backgroundOptions = false
            clearInterval(backgroundInterval)
            localStorage.setItem("background_option", false)
        }
    })



})



let landingPage = document.querySelector(".landing-page");


let imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

//لايجاد رقم عشوائى


//random background-option

function randomizeImages()
{
    if(backgroundOptions === true)
    {
        backgroundInterval =   setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            //landingPage.style.backgroundImmage ='url("imgs/'+ imgsArray[randomNumber] +'")'
            
            landingPage.style.backgroundImage='url("imgs/'+ imgsArray[randomNumber] +'")'
        
        }, 1000);
    }
}
randomizeImages()



//select skills selector
let ourskills = document.querySelector(".skills");
window.onscroll = function()
{
    //skills off set top
    let skilloffsettop = ourskills.offsetTop;


    //outer height
    let skillsOutHeight = ourskills.offsetHeight;


    //window hieght
    let windowHeight = window.innerHeight;


    //window scrolltop
    //بيعملك اسكورول لل انت عملته دلوقتى وبيحسبهوالك
    let windowscrollTop = this.pageYOffset;
    if(windowscrollTop> (skilloffsettop + skillsOutHeight - windowHeight))
    {
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");
        allskills.forEach(skill=>{
            skill.style.width = skill.dataset.progress;
        })
        console.log(allskills)
    }
  
    //this.console.log(x)
}
  

//create popup with the image

let outGallery = document.querySelectorAll(".gallery img")

outGallery.forEach(img=>{
    img.addEventListener('click',(e)=>{
        //create overly element 
        let overlay = document.createElement("div")

        //add class to overly
        overlay.className='popup-overlay'

        //Append overlay to the body
        document.body.appendChild(overlay)

        //create the popup box
        let popupBox = document.createElement("div")

        //add class to popup box

        popupBox.className = 'popup-box'
        if(img.alt !== null)
        {
            //create heading 
            let imgTitle = document.createElement("h3")

            //create text
            let imgText = document.createTextNode(img.alt)
            //append the text to the heading 
            imgTitle.appendChild(imgText);
            //append the heading to the popup box
            popupBox.appendChild(imgTitle)
        }
        //create the image

        let popupImage = document.createElement("img")


        //set image source
        popupImage.src = img.src;

        //add image to popup box
        popupBox.appendChild(popupImage)

        //append the popup box to body

        document.body.appendChild(popupBox)

       //create close span
       let closebutton = document.createElement("span");

       //create text to close span

       let textbutton = document.createTextNode("X")

       //append textbutton to closebutton

       closebutton.appendChild(textbutton)

       //add class to close button
       closebutton.className = 'close-button'

       //add close button to popup box

       popupBox.appendChild(closebutton)
    })
})

//close popup

document.addEventListener("click",function(e)
{
   if(e.target.className == 'close-button')
   {
    e.target.parentNode.remove();

    //remove overlay
    document.querySelector(".popup-overlay").remove()
   }
})

//select all bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullets");
allBullets.forEach(bullet=>{
    bullet.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth',

        })
    })
})


//select all links
let allLinks = document.querySelectorAll(".links a");
allLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        //لمنع اى حدث يحصل
        e.preventDefault()
        //عشان يوصلها بشكل حلو smoth
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth',

        })
    })
})

//handle active state

function handleactive(ev)
{
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{


        element.classList.remove("active");
       
       
       });
  


       //add active class
       ev.target.classList.add("active")
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets")
let bulletsLocalitem = localStorage.getItem("bullets_option")
if(bulletsLocalitem !== null)
{
    bulletsSpan.forEach(span=>{
        span.classList.remove("active")
    })
    if(bulletsLocalitem === 'block')

    {
        bulletsContainer.style.display = 'block'
        document.querySelector(".bullets-option .yes").classList.add("active")


    }else{
        bulletsContainer.style.display ='none';
        document.querySelector(".bullets-option .no").classList.add("active")


    }
}
bulletsSpan.forEach(span=>{
    span.addEventListener("click",(e)=>{
        if(span.dataset.display === 'show')
        {
            bulletsContainer.style.display = 'block'
            localStorage.setItem("bullets_option",'block')
        }else{
            bulletsContainer.style.display ='none';
            localStorage.setItem("bullets_option",'none');

        }
        handleactive(e)
    })
})

//reset button

document.querySelector(".reset-option").onclick = function()
{
    //لو عايز تمسح كل حاجة 
    localStorage.clear()

    //localStorage.removeItem("bullets_option","color_option","background_option")


    window.location.reload()
}

//togle menu 

let toggleBtn = document.querySelector(".toggle-menu")
let tlinks = document.querySelector(".links")

toggleBtn.onclick =function(e)
{
    this.classList.toggle("menu-active");

    //stop progeration
    e.stopPropagation();
    tlinks.classList.toggle("open")
}



//click anywhere outside of the menu 
document.addEventListener("click",(e)=>{
    if(e.target !== toggleBtn && e.target !== tlinks){

        if(tlinks.classList.contains("open"))
        {
            toggleBtn.classList.toggle("menu-active");

            tlinks.classList.toggle("open")       
         }

    }
})

//stop progetation links

tlinks.onclick = function()
{
    e.stopPropagation()
}