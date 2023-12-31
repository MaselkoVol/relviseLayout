const docElem = document.documentElement;
const docBody = document.body;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	docBody.classList.add("_touch");
} else {
	docBody.classList.add("_pc");
}
let logo = document.querySelector(".header__logo");
let burger = document.querySelector(".menu__burger");
console.log(burger);
let menuBody = document.querySelector(".menu__body");
function burgerCloseLogic(event) {
	if (event.clientX < docElem.clientWidth / 100 * 20) {
		logo.classList.remove("_active");
		burger.classList.remove("_active");
		docBody.classList.remove("_locked");
		menuBody.classList.remove("_active");
		docElem.removeEventListener("click", burgerCloseLogic);
	}
}
burger.addEventListener("click", function (event) {
	logo.classList.add("_active");
	burger.classList.add("_active");
	docBody.classList.add("_locked");
	menuBody.classList.add("_active");
	docElem.addEventListener("click", burgerCloseLogic);
});

let subLists = document.querySelectorAll(".menu__sub-list");

for (let subList of subLists) {
	let menuLink = subList.parentElement.querySelector(".menu__link"); 
	if (!menuLink) {
		continue;
	}
	menuLink.addEventListener("click", function () {
		subList.classList.toggle("_active");
		console.log(menuLink.firstElementChild);
		menuLink.firstElementChild.classList.toggle("_active");
		event.preventDefault();
	})
}

let header = document.querySelector("header");
if (window.pageYOffset > docElem.clientHeight >> 1) {
	header.classList.add("_active");
} else {
	header.classList.remove("_active");
}
window.addEventListener("scroll", function (event) {
	if (window.pageYOffset > docElem.clientHeight >> 1) {
		header.classList.add("_active");
	} else {
		header.classList.remove("_active");
	}
})

let videos = document.querySelectorAll(".video");

for (let video of videos) {
	video.addEventListener("click", function () {
		video.querySelector(".video__button").classList.toggle("_active");
		video.classList.toggle("_active");
	})
}
