

/*$(document).ready( ()=> {
	$('a[href^="#"]').click( event => {
		//event.preventDefault();
		
		var elem = $(this).attr('href');
		 $("html, body").animate({
			scrollTop: $(elem).offset().top
		},800);
	});
});*/

$(document).ready(function() {
	$('a[href^="#"]').click(function (event) {
		event.preventDefault();
		let elem=$(this).attr("href");
		$("html, body").animate({
			scrollTop: $(elem).offset().top
		},800);
	});
});