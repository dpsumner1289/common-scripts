// Dynamically get height of hero content, and reset on screen size

jQuery(document).ready(function($) {
	
		function setMargin(el, eltwo){
			var bannerHeight = $(eltwo).map(function() {
			  return $(this).height();
			}).get();
			var height = $(el).map(function() {
			  return $(this).height();
			}).get();

			var sectHeight = Math.max.apply(null, height);
			var contHeight = Math.max.apply(null, bannerHeight);
			var heightDiff = (contHeight - sectHeight) / 2;
			$(el).css('margin-top', heightDiff);
		}

		var hero;
		var cont;

		setMargin(hero, cont);

	$(window).on('resize', function(){
		setMargin(hero, cont);
	});
});


// Smooth Scroll with Hashes

jQuery(document).ready(function($) {
    jQuery(function() {
        var topbar = 0;
        var header = 0;
        var totalHeight;
        var clickCount = 0;
      jQuery('a[href*=#]:not([href=#])').on('click', function () {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {

          	if(header !== 0){
            	header = $('header.header-main').height();
          	}
            if(topbar !== 0){
            	topbar = $('.top-bar').height();
            }
            if(header !== 0 || topbar !== 0){
            	totalHeight = header + topbar;
            }
            
            if(clickCount == 0){
                $('html, body').animate({
                  scrollTop: target.offset().top - totalHeight
                }, 1000);
                // return false;
                clickCount++;
            }else{
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                clickCount++;
                // return false;
            }
            
          }
        }
      });
    });
});


// Another height setting function, sets multiple elements to the same height

jQuery(document).ready(function($) {
	function setHeight(el){
		var height = $(el).map(function() {
		  return $(this).height();
		}).get();

		var maxHeight = Math.max.apply(null, height);
		$(el).css('height', maxHeight);
	}

	var heightSet;

	setHeight(heightSet);

	$(window).on('resize', function(){
		setHeight(heightSet);
	});
});