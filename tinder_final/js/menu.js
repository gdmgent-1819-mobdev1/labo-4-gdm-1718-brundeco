
let openMenu = document.getElementById('openIt');
let closeMenu = document.getElementById('closeIt');
let list = document.getElementById('mySelection');

function openNav() {
	list.style.width = "100%";
	console.log(likes);

	let switchToSkip = document.querySelectorAll('.switchToSkip');
	console.log(switchToSkip);

		for(let i = 0; i < switchToSkip.length; i++) {
			switchToSkip[i].addEventListener('click', function() {
				console.log(likes);
				skips.push(likes[i]);
				console.log(skips);
				likes.splice(i, 1);
				console.log(likes);
			})
		}
}

function closeNav() {
	list.style.width = "0%";
}

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);