var change_tab = function(button_pressed){
  button_pressed.siblings().removeClass('active');
  button_pressed.addClass('active');
  var tab_id = button_pressed.data('target');
  $(tab_id).siblings().each(function() {
    $(this).removeClass('tab-active');
    $(this).slideUp(500);
  });
  $(tab_id).addClass('tab-active');
  $(tab_id).slideDown(500);
}

$(document).ready(function(){
  $('.tabs-link.active').each(function(){
    change_tab($(this));
  });
});

$(document).on('click','.tabs-link', function(){
  change_tab($(this));
});
