var toggle_full_modal = function() {
  if($('.full-modal').hasClass('is-open')){
    $('.full-modal').removeClass('is-open')
    $('body').removeClass('full-modal-open');
  }
  else {
    $('.full-modal').addClass('is-open');
    $('body').addClass('full-modal-open');
  }
}

var toggle_bottom_modal = function() {
  if($('.bottom-modal').hasClass('is-open')){
    $('.bottom-modal').removeClass('is-open')
    $('body').removeClass('bottom-modal-open');
  }
  else {
    $('.bottom-modal').addClass('is-open');
    $('body').addClass('bottom-modal-open');
  }
}

$('.full-modal-toggle-button').on('click',toggle_full_modal);
$('.bottom-modal-toggle-button').on('click',toggle_bottom_modal);

$(document).mouseup(function(e)
{
  // var container = $(".full-modal");
  // // if the target of the click isn't the container nor a descendant of the container
  // if (container.hasClass('is-open') && !container.is(e.target) && container.has(e.target).length === 0)
  // {
  //   toggle_full_modal();
  // }



});
