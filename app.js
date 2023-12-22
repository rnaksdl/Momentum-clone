const h1 = document.querySelector('div.greeting > h1');

function handleTitleClick() {
	h1.classList.toggle("clicked");

}

h1.addEventListener("click", handleTitleClick);