// Smooth Scroll with Hashes, scrolls the page smoothly when an anchor is clicked, and navigates to anchor if not on page containing anchor.

jQuery(document).ready(function($) {
    jQuery(function() {
      jQuery('a[href*=#]:not([href=#])').on('click', function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {  
            $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                clickCount++;
          }
        }
      });
    });
});
