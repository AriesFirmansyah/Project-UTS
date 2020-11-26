// JavaScript Document

var hasil = 0
const enter = '<br><br><br><br><br>'

function mainCounterProgram() {
	const btnPlus = document.getElementById('CPPlus')
	document.getElementById('Result').innerHTML = enter + hasil

	btnPlus.onclick = function () {
		hasil += 1; 
		if(check_result()) document.getElementById('Result').innerHTML = enter + hasil
	}
	
	const btnMin = document.getElementById('CPMin')

	btnMin.onclick = function () {
		hasil -= 1;
		if(check_result()) document.getElementById('Result').innerHTML = enter + hasil 
		else {
			setTimeout("alert('Back to home again !')", 1)
			window.location.href = "../../index.html"
			document.getElementById('Result').reset 
		} 
	}
}

function check_result () {
	if(hasil >= 0 && hasil < 6){
		document.querySelector('.result').style.backgroundColor = '#C9C8C8'
		return true
	}
	else if(hasil >= 6){
		document.querySelector('.result').style.backgroundColor = '#77FF98'
		return true
	}else if(hasil <= -1 && hasil >= -5 ){
		document.querySelector('.result').style.backgroundColor = '#EFF371'
		return true
	}else if(hasil < -5 && hasil > -10){
		document.querySelector('.result').style.backgroundColor = '#FF7AFA'
		return true
	}else if(hasil == -10){
		document.getElementById('Result').innerHTML = enter + hasil
		return false
	
	}
}
