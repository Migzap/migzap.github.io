
 $(document).ready(function() {
	$('a[href^="#"]').stop().click(function (event) {
		event.preventDefault();
		let elem=$(this).attr("href");
		$("html, body").stop().animate({
			scrollTop: $(elem).offset().top - ($('.fnav').height()+14)
		},1200,'easeOutBack');
	});
	
	
	
	//menu fijo
	
	$(window).scroll(function() {
		scroll = $(window).scrollTop();
		if (scroll > 200) {
			$('.fnav').css({"position":"fixed"});
			$('.fnav').css({"width":"100%"});
			$('.fnav').css({"top":"0"});
			//$('nav').css({"background":"#fff"});
			
			$('.fnav').css({"box-shadow":"rgba(0, 0, 0, 0.22) 6px 1px 1px"});
			$('.fnav').css({"z-index":"100"});
			$('.fnav').css({"background":"rgb(38, 100, 239)"});
			$('.fnav').css({"transition":"800ms"});
			$('nav li').addClass('hovl');
			$('nav li').removeClass('hli');
			
		} else {
			$('.fnav').css({"position":"relative"});
			$('.fnav').css({"background":"transparent"});
			$('.fnav').css({"box-shadow":"0 0 0"});
			$('.fnav').css({"transition":"300ms"});
			$('nav li').addClass('hli');
			$('nav li').removeClass('hovl');
		}
	})
});