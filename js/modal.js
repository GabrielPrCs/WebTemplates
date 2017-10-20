var toggle_full_modal = function() {
  if($('.full-modal').hasClass('is-open')){
    $('.full-modal').removeClass('is-open')
    $('body').removeClass('opacity-effect');
  }
  else {
    $('.full-modal').addClass('is-open');
    $('body').addClass('opacity-effect');
  }
}

$(document).mouseup(function(e)
{
  var container = $(".full-modal");
  // if the target of the click isn't the container nor a descendant of the container
  if (container.hasClass('is-open') && !container.is(e.target) && container.has(e.target).length === 0)
  {
    toggle_full_modal();
  }

  $('.modal-toggle-button').on('click',toggle_full_modal);
});
