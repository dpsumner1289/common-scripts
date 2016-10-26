// Take an element (<div>, etc) and vertically center it within its container, dynamically and when resizing window.
// Container must be positioned relatively and inner element must be positioned absolutely, or at least this is how I utilized it.

jQuery(document).ready(function($) {

  function setMargin(el, eltwo) {
    var bannerHeight = $(eltwo).map(function() {
      return $(this).height();
    }).get();
    var height = $(el).map(function() {
      return $(this).height();
    }).get();

    var sectHeight = Math.max.apply(null, bannerHeight);
    var contHeight = Math.max.apply(null, height);
    var heightDiff = (contHeight - sectHeight) / 2;
    $(eltwo).css('margin-top', heightDiff);
  }

  var containerDiv;
  var innerDiv;

  setMargin(containerDiv, innerDiv);

  $(window).on('resize', function() {
    setMargin(containerDiv, innerDiv);
  });

});
