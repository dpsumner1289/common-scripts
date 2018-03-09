// This function maps multiple elements of a class and sets their heights equally, for uniformity.


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
