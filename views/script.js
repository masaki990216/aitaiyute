$(function(){
  $('#open').click(function(){
    $('.menu-modal').slideDown();
    $('#close').fadeIn();
  });

  $('#close').click(function(){
    $('.menu-modal').slideUp();
    $(this).fadeOut();
  })
});
