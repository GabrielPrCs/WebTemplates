var toggle_sidenavbar = function(){
  if($('.side-navbar').hasClass('is-open')){
    $('.side-navbar').removeClass('is-open')
    $('body').removeClass('side-navbar-is-open');
  }
  else{
    $('.side-navbar').addClass('is-open');
    $('body').addClass('side-navbar-is-open');
  }
}

$(document).ready(function(){
  if ($('.side-navbar').hasClass('overlapping')) {
    $('body').addClass('side-navbar-overlapping');
  }
})

$('.side-navbar-toggle-button').on('click', toggle_sidenavbar);
$('.side-navbar > .side-navbar-body > .items-close-after-click > *').on('click', toggle_sidenavbar);
$('.main-content').on('mouseup',function(){
  if($('body').hasClass('side-navbar-is-open')){
    toggle_sidenavbar();
  }
});
