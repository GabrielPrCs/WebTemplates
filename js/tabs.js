$('.tabs-link').on('click',function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  var tab_id = $(this).data('target');
  $(tab_id).siblings().removeClass('tab-active');
  $(tab_id).addClass('tab-active');
})
