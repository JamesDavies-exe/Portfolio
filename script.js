AOS.init();

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	scale: 1.5,
	orientation: 'right'
});

$(function () {
	$(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

  function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

