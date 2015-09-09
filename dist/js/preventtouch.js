
// JavaScript Document
$(document).ready( function() {

	$('header').on('touchstart touchmove', function(e){ 
	     //prevent native touch activity like scrolling
	     e.preventDefault(); 
	});

});