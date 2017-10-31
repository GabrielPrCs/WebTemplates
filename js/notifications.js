var start_notifications = function() {
  if($('body').hasClass('notifications-panel-is-open')){
    $('.notifications-panel').css({'right':'-100vw'});
    $('body').removeClass('notifications-panel-is-open')
  }
  else {
    $('.notifications-panel').css({'right':'0'});
    $('body').addClass('notifications-panel-is-open')
  }
}

$('.toggle-notifications').on('click', function(){
  start_notifications();
});

$('.notification').on('click', function(){
  if($(this).hasClass('is-hidden')){
    $(this).children('.notification-content').show(250);
    $(this).removeClass('is-hidden');
  }
  else {
    $(this).children('.notification-content').hide(250);
    $(this).addClass('is-hidden');
  }
});

// $(document).ready(function(){
//   start_notifications();
// });
