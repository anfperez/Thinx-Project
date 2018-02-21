$(document).ready(function(){

	console.log("jQuery is working");

$('.img-responsive').on('click', function(){
	console.log("this got clicked");
  src = $(this).attr('src');
  $('.overlay img').attr('src', src);
  $('.overlay').show();
});

$('.overlay').on('click', function(){
  $('.overlay').hide();
});

$('#addCheckMark').on('click', function() {
	console.log("adding check mark");
	$('#addCheckMark').text('✔');
});

$('#hi-waist').affix({
  offset: {
    top: 0,
    bottom: 950
  }
});

$('#purchase').affix({
  offset: {
    top: 0,
    bottom: 950
  }
});

  let currentQuantity = 1;
  for (let i = 0; i < 10; i++) {
    $('#plus').on('click', function() {
      console.log("Plus button was clicked");
      $('#quantity span').text(currentQuantity);
  });
}
  
});
