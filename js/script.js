const btnMobile = document.getElementById('btn_mobile');
const menu = document.getElementById('menu_mobile_container');
const closebtn = document.getElementById('close_btn');

btnMobile.onclick = function() {
    menu.classList.add('active');
}

closebtn.onclick = function() {
    menu.classList.remove('active');
}