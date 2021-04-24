/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle2 = document.getElementById(toggleId),
    nav2 = document.getElementById(navId)

    if(toggle2 && nav2){
        toggle2.addEventListener('click', ()=>{
            nav2.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle2','nav-menu2')

/*===== REMOVE MENU MOBILE =====*/
const navlink2 = document.querySelectorAll('.nav__link2')

function linkAction(){
    const navMenu2 = document.getElementById('nav-menu2')
    navMenu2.classList.remove('show')
}
navLink2.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu2 a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu1 a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}