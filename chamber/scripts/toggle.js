const toggle = document.querySelector('.togglebtn');
function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.querySelector('.togglebtn').classList.toggle('open');
}
toggle.addEventListener('click', toggleMenu);