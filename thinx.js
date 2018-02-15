$(document).ready(function(){

	console.log("jQuery is working");

$('.img-responsive').on('click', function(){
  src = $(this).attr('src');
  $('.overlay img').attr('src', src);
  $('.overlay').show();
});

$('.overlay').on('click', function(){
  $('.overlay').hide();
});

   // var second_img_url = "top_section_images/highwaist_black_front_2_1024x1024.jpg";

   // $(".second-img").click(function(){
      //  $(this).attr('second_img_url');
       // });
});