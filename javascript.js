
function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbutton')) {
		
		var dropdowns = document.getElementById("myDropdown");

			if (dropdowns.classList.contains('show')) {
				dropdowns.classList.remove('show');
			}
		
	}
}