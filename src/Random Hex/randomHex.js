// JavaScript Document

function mainRandomHex() {
	const ColourCode =  document.getElementById('hexCode')
	const GoHome = document.getElementById('goHome')
	const newColour = document.getElementById('NewColour')
	
	document.body.style.backgroundColor = '#4F318C'
	
	GoHome.onclick = function() {
		window.location.href = "../../index.html"
	}
	
	newColour.onclick = function() {
		const randomColor = Math.round(Math.random()*10000000).toString(16)
		
		if(randomColor != 'FFFFFF') {
			document.body.style.backgroundColor = "#" + randomColor
			document.querySelector('.buttonNewColour').style.color = "#" + randomColor
			ColourCode.innerHTML = "#" + randomColor
		}else {
			document.body.style.backgroundColor = '#4f318c'
			document.querySelector('.buttonNewColour').style.color = '#4f318c'
			ColourCode.innerHTML = '#4f318c'
		}
	}
}
