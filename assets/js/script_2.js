function changeColorDivs(color) {
	color.target.style.backgroundColor = 'black';
}

const div = document.querySelectorAll('div');
div.forEach(function(div) {
	div.addEventListener('click', changeColorDivs);
});