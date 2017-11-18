var toggle_notifications = function() {
  if($('body').hasClass('notifications-panel-is-open')){
    $('.notifications-panel').hide(250, function(){
      $('body').removeClass('scroll-hidden');
      $('.main-content').removeClass('content-disabled');
      $('body').removeClass('notifications-panel-is-open')
    });
  }
  else {
    $('body').addClass('scroll-hidden');
    $('.main-content').addClass('content-disabled');
    $('.notifications-panel').show(250, function(){
      $('body').addClass('notifications-panel-is-open')
    });
  }
}

$('.toggle-notifications').on('click', function(){
  toggle_notifications();
});

// $('.notification').on('click', function(){
//   if($(this).hasClass('is-hidden')){
//     $(this).children('.notification-content').show(250);
//     $(this).removeClass('is-hidden');
//   }
//   else {
//     $(this).children('.notification-content').hide(250);
//     $(this).addClass('is-hidden');
//   }
// });

function handle_mousedown(e){
  window.notification = {};
  notification.reference = this;
  notification.left = e.pageX;
  notification.original_left = $(this).offset().left;
  notification.width = $(notification.reference).width();


  function handle_dragging(e){
    var actual_left   = notification.original_left + (e.pageX - notification.left);
    if(notification.original_left < actual_left && (notification.original_left + .9 * notification.width) > actual_left ) {
      $(notification.reference).offset({left: actual_left});
    }
  }

  function handle_mouseup(e){
    $('.notification').off('mousemove', handle_dragging) .off('mouseup', handle_mouseup);

    if( ($(this).offset().left - notification.original_left) > .75 * notification.width ) {
      $(this).hide(250);
    }
    else {
      $(this).offset({left: notification.original_left});
    }



  }


  $('.notification') .on('mouseup', handle_mouseup) .on('mousemove', handle_dragging);
}

$('.notification').mousedown(handle_mousedown);
