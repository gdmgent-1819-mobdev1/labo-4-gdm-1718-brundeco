
let openMenu = document.getElementById('openIt');
let closeMenu = document.getElementById('closeIt');
let list = document.getElementById('mySelection');

function openNav() {
	list.style.width = "100%";
}

function closeNav() {
	list.style.width = "0%";
}

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);