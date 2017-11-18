var toggle_full_modal = function(target) {
  if($(target).hasClass('is-open')){
    $(target).slideUp(250, function(){
      $(target).removeClass('is-open')
      $('body').removeClass('scroll-hidden');
      $('.main-content').removeClass('content-disabled');
    });
  }
  else {
    $('body').addClass('scroll-hidden');
    $('.main-content').addClass('content-disabled');
    $(target).slideDown(250, function() {
      $(target).addClass('is-open');
    });
  }
}

var toggle_bottom_modal = function(target) {
  if($(target).hasClass('is-open')){
    $(target).slideUp(250, function() {
      $(target).removeClass('is-open');
      $('body').removeClass('scroll-hidden');
      $('.main-content').removeClass('content-disabled');
    });
  }
  else {
    $('body').addClass('scroll-hidden');
    $('.main-content').addClass('content-disabled');
    $(target).slideDown(250, function(){
      $(target).addClass('is-open');
    });
  }
}

$('.full-modal-toggle-button').on('click', function(){
  toggle_full_modal($(this).data('target'));
});
$('.bottom-modal-toggle-button').on('click', function(){
  toggle_bottom_modal($(this).data('target'));
});
