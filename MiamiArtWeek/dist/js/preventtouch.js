
// JavaScript Document
$(document).ready( function() {

	$('html, body').on('touchstart touchmove', function(e){ 
	     //prevent native touch activity like scrolling
	     e.preventDefault(); 
	});

});