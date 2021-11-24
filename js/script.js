let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');
document.querySelector('#burger').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    scrollBarIndicator()
}

function scrollBarIndicator() {
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}