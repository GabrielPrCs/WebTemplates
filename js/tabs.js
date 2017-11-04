var change_tab = function(button_pressed){
  button_pressed.siblings().removeClass('active');
  button_pressed.addClass('active');
  var tab_id = button_pressed.data('target');
  $(tab_id).siblings().removeClass('tab-active');
  $(tab_id).addClass('tab-active');
  // Correction of the height of the parent div (.tabs-body) since the position of .tab is absolute
  // $(tab_id).parent().css({'height':$(tab_id).css('height')})
}

$(document).ready(function(){
  $('.tabs-link.active').each(function(){
    change_tab($(this));
  });
  $('.tabs-link').on('click',function(){
    change_tab($(this));
  })
});
