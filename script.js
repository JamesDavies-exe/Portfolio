AOS.init();

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	scale: 1.5,
	orientation: 'right'
});

function darkMode() {
	var element = document.getElementById("main");
	element.classList.toggle("dark");
  }

  function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }
