$('.tabs-link').on('click',function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  var tab_id = $(this).data('target');
  $(tab_id).siblings().removeClass('tab-active');
  $(tab_id).addClass('tab-active');
  $(tab_id).parent().css({'height':$(tab_id).css('height')})
})

$(document).ready(function(){
  $('.tab.tab-active').each(function(){
    $(this).parent().css({'height':$(this).css('height')})
  })
});
