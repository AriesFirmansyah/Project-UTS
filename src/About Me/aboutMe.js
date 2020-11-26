// JavaScript Document

function mainAboutMe() {
	const gotoHome = document.getElementById('btnBacktoHome')
	const Resources = document.getElementById('btnResources')
	const Close = document.getElementById('close')
	document.body.style.backgroundColor = '#101223'
	document.querySelector('.popUpCont').style.width= '0%'
	
	gotoHome.onclick = function() {
		window.location.href = "../../index.html"
	}
	
	Resources.onclick = function() {
		document.querySelector('.popUpCont').style.display = 'block'
		document.querySelector('.popUpCont').style.width = '80%'
	}
	Close.onclick = function() {
		document.querySelector('.popUpCont').style.display = 'none'
	}
}