AOS.init();

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	scale: 1.5,
	orientation: 'right'
});


	var hour = (new Date).getHours();
  
	if (hour >= 19) {
		document.getElementById('main').removeClass('light').addClass('dark');
	} else {
		document.getElementById('main').removeClass('dark').addClass('light');
	}
	console.log(hour);
  
