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

const switcherPages = document.querySelector('.switcher-pages'),
    home = document.querySelector('.home'),
    footer = document.querySelector('.footer'),
    homeVideoBlock = home.querySelector('video'),
    homeSoundsBlock = home.querySelector('audio')
let condition = true;

switcherPages.addEventListener('click', () => {

    switcherPages.classList.toggle('active');
    home.classList.toggle('active');

    home.classList.contains('active') ? footer.style.visibility = 'hidden' : footer.style.visibility = 'visible';

    if(homeVideoBlock){
        home.classList.contains('active') ? homeVideoBlock.pause() : homeVideoBlock.play()
    }
    if(homeSoundsBlock){
        home.classList.contains('active') ? homeSoundsBlock.pause() : homeSoundsBlock.play()
    }
});



    
