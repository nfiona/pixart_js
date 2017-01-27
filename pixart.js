var setColor = $('#set-color')

setColor.on("click", function(){
  $(".brush").css('background', document.getElementById('color-field').value)
})

$("#set-color").click(function(event){
  event.preventDefault();
});




$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');
$('body').append('<div class="square"></div>');

var square = $('.square')

square.on("click", function(){
  $(".square").css('background', document.getElementById('color-field').value);

})
