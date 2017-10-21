var toggle_full_modal = function() {
  var target = $(this).data('target');
  if($(target).hasClass('is-open')){
    $(target).removeClass('is-open')
    $('body').removeClass('full-modal-open');
  }
  else {
    $(target).addClass('is-open');
    $('body').addClass('full-modal-open');
  }
}

var toggle_bottom_modal = function() {
  var target = $(this).data('target');
  if($(target).hasClass('is-open')){
    $(target).removeClass('is-open')
    $('body').removeClass('bottom-modal-open');
  }
  else {
    $(target).addClass('is-open');
    $('body').addClass('bottom-modal-open');
  }
}

$('.full-modal-toggle-button').on('click',toggle_full_modal);
$('.bottom-modal-toggle-button').on('click',toggle_bottom_modal);
