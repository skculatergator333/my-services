const menu = document.querySelector('.toggle-nav');
const menuList = document.querySelector('.list');

function toggleNav() {
  menuList.classList.toggle('active');
}

menu.addEventListener('click', toggleNav);