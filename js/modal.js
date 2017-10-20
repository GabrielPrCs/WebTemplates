$( document ).ready(function(){
  $('.modal-toggle-button').on('click',function(){
    if($('.full-modal').hasClass('is-open')){
      $('.full-modal').removeClass('is-open')
    }
    else {
      $('.full-modal').addClass('is-open')
    }
  });
});
