Modernizr.addTest('standalone', function() {
  return window.navigator.standalone;
});


$(document).ready(function() {
	$('#tab-bar li').click(function(e) {
		e.preventDefault();
		alert("Coming Soon!");
	});
});
