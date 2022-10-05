const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './imgs/adaptive_nav/nav-close.svg'
    } else {
        navBtnImg.src = './imgs/adaptive_nav/nav-open.svg'
    }
}

AOS.init({
    once: false
});