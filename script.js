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
