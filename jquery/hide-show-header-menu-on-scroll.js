jQuery(document).ready(function($){

var scrollTrue;

function showMenu(){
  $(secondaryMenu).animate({'top':'0'},500);
  scrollTrue = true;
}

function hideMenu(){
  $(secondaryMenu).animate({'top':'-100%'},500);
  scrollTrue = false;
}

var menuHeight = $(normalMenu).height();
var scrolled;
var y = $(window).scrollTop();

if(y !== 0){
  scrolled = true;
  if(y >= menuHeight){
    showMenu();
  }
  showArrow();
}else{
  scrolled = false;
  scrollTrue = false;
}
  $(window)scroll(function(){
    y = $(this).scrollTop();
    if(y >= menuHeight && !scrollTrue){
      showMenu();
    }else if(y < menuHeight && scrollTrue){
      hideMenu();
    }
  });
});
