const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', open);

function open() {
  navBar.classList.toggle("show-nav-bar");
  navItems.forEach(item => item.classList.toggle("show-nav-item"));
}


