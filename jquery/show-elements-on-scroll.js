/* Fade in elements when scrolled to. Elements must be styled initially to 0% opacity */

jQuery(document).ready(function($){
  function showElements(){
    $(elements).each( function(i){

        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height() - 50;

        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);      
        }

    }); 
  }
  
  // Call the function once on page load to show elements if loading at their position, so that page doesn't appear blank
showElements();
  // Call function on each page scroll
  $(window).scroll( function(){
    showElements();
  });
});
