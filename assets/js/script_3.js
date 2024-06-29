let globalColor;

function changeColor(color) {
		const div = document.getElementById('key');
		div.style.backgroundColor = color;
}

document.addEventListener('keydown', event => {
		if (event.key === 'a') {
				globalColor = 'pink';
		} else if (event.key === 's') {
				globalColor = 'orange';
		} else if (event.key === 'd') {
				globalColor = 'lightblue';
		}
		changeColor(globalColor); 
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'q') {
			createDiv('purple')
	} else if (event.key === 'w') {
			createDiv('grey')
	} else if (event.key === 'e') {
			createDiv('brown')
	}});

	function createDiv(color) {
			let newDiv = document.createElement('div');
			newDiv.style.border = '2px solid black';
			newDiv.style.width = '200px';
			newDiv.style.height = '200px';
			newDiv.style.margin = 'auto';
			newDiv.style.padding = 'auto';
			newDiv.style.marginTop = '3px' 
			newDiv.style.backgroundColor = color;
			document.body.appendChild(newDiv); 
}




