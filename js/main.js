$(document).ready(function(){
  // $('.card-1').click(function () {
  //   // console.log('клик')
  //   $('.title-1').addClass('orange');
  //   $('.title-2').removeClass('orange')
  // });
  // $('.card-2').click(function () {
  //   // console.log('клик')
  //   $('.title-2').addClass('orange');
  //   $('.title-1').removeClass('orange')
  // });

  $('.card').click(function(){
    // console.log('click')
    if(!$(this).hasClass('orange')){
    $(this).siblings().removeClass('orange');
    $(this).addClass('orange');
    };
  });


  $('.card').mouseleave(function(){
    // console.log('work')
  $(this).removeClass('shadow')
  });
  $('.card').mouseenter(function(){
    // console.log('work')
  $(this).addClass('shadow')
  });

  // $('.card').hover(function(){
  //   console.log('do it')
  // $(this).addClass('shadow')
  // })
});