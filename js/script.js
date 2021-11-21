let navbar = document.querySelector('.navbar');
document.querySelector('#burger').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}