$(function() {
	
	// highlight the current nav
	$('#home a:contains("Home")').parent().addClass("active");
	$('#about a:contains("About Us")').parent().addClass("active");
	$('#services a:contains("Services")').parent().addClass("active");
	$('#faqs a:contains("FAQs")').parent().addClass("active");
	$('#contact a:contains("Contact Us")').parent().addClass("active");
	
	// make menus drop automatically
	$("ul.nav li.dropdown").hover(function() {
		$(".dropdown-menu", this).fadeIn();	
	}, function() {
		$(".dropdown-menu", this).fadeOut("fast");
		});//hover
		
		
}); // jquery is loaded