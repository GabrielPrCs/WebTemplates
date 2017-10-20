$('.accordion-item').each(function(){
  if(!$(this).hasClass('is-open')){
    $(this).addClass('is-closed');
  }
})

$('.accordion-item-head').on('click', function(){
  var item = $(this).parent();
  if (item.hasClass('is-open')) {
    item.removeClass('is-open');
    item.addClass('is-closed');
  } else{
    item.addClass('is-open');
    item.removeClass('is-closed');
  }
});
