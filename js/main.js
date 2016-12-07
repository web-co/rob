$(document).ready(function(){
	//mobile menu
	$(".tcon-menu--xcross").on('click', function(){
	  $(".main_menu_top").toggleClass('visible');
	  $('body').toggleClass('fixed');
  });
  $(document).mouseup(function (e){ 
        var div = $('.header_nav'); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            $(".main_menu_top").removeClass('visible');
			$(".tcon-menu--xcross").removeClass('tcon-transform');
			$('body').removeClass('fixed');
        }
    });
	
	//product carousel
		$("#pikame").PikaChoose({
			carousel:true, 
			carouselVertical:true,
			nav:false
		});
});
