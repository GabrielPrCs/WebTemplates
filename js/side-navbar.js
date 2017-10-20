var toggle_sidenavbar = function(){
  if (!$('.side-navbar').hasClass('is-permanent')) {
    if($('.side-navbar').hasClass('is-open')){
      $('.side-navbar').removeClass('is-open')
      $('.main-content').removeClass('side-navbar-is-open');
    }
    else{
      $('.side-navbar').addClass('is-open');
      $('.main-content').addClass('side-navbar-is-open');
    }
  }
}

$(document).ready(function(){
  if ($('.side-navbar').hasClass('is-permanent')) {
    $('.side-navbar').addClass('is-open');
    $('.main-content').addClass('side-navbar-is-open');
  }
})

$('.side-navbar-toggle').on('click', toggle_sidenavbar);
$('.side-navbar > .side-navbar-body > .items-close-after-click > *').on('click', toggle_sidenavbar);

$('.main-content').mouseup(function(e)
{
  var container = $(".side-navbar");
  // if the target of the click isn't the container nor a descendant of the container
  if (container.hasClass('is-open') && !container.is(e.target) && container.has(e.target).length === 0)
  {
    toggle_sidenavbar();
  }
});
