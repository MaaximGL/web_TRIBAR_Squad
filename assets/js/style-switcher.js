const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");  
        }
    })
}

const switcherPages = document.querySelector('.switcher-pages');
const home = document.querySelector('.home');
const footer = document.querySelector('.footer');
let condition = true; 

switcherPages.addEventListener('click', () => {
    if (condition) 
    { 
        switcherPages.classList.toggle('active');
        home.classList.toggle('active');
        footer.style.visibility = 'hidden';
     condition = false; 
    } else
    { 
        switcherPages.classList.toggle('active');
        home.classList.toggle('active');
        footer.style.visibility = 'visible';
     condition = true; 
    } 
});



    
