var toggle = function(){
  if($('.side-navbar').hasClass('is-closed')){
    $('.side-navbar').removeClass('is-closed')
    $('.main-content').addClass('side-navbar-is-open');
  }
  else{
    $('.side-navbar').addClass('is-closed');
    $('.main-content').removeClass('side-navbar-is-open');
  }
}

$( document ).ready(function(){
  if(!$('.side-navbar').hasClass('is-closed')){
    $('.side-navbar').addClass('is-closed');
  }
  $('.side-navbar-button').on('click', toggle);
  $('.side-navbar-toggle').on('click', toggle);
  $('.side-navbar > .side-navbar-body > .item').on('click', toggle);

});
