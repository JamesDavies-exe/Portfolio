AOS.init();

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	scale: 1.5,
	orientation: 'right'
});
