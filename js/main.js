$(document).ready(function(){
  $('.card-1').click(function () {
    // console.log('клик')
    $('.title-1').toggleClass('orange');
    $('.title-2').removeClass('orange')
  });
  $('.card-2').click(function () {
    // console.log('клик')
    $('.title-2').toggleClass('orange');
    $('.title-1').removeClass('orange')
  });
  $('.card').mouseleave(function(){
    // console.log('work')
  $(this).toggleClass('shadow')
  });
  $('.card').mouseenter(function(){
    // console.log('work')
  $(this).toggleClass('shadow')
  });
});