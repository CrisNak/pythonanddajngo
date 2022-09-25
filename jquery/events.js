$('h1').click(function(){
  console.log('There was a click');
})

$('h1').click(function(){
  $(this).text('I was changed');
})

$('li').click(function(){
  console.log('Any li was clicked');
})

$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue');
}) // qdo coloco uma letra, ele add turnblue, e em outra letra, remove

$('input')eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue')
  }
}) // wich 13 = tecla enter, portanto se der enter no input text, muda a cor do h3

$('h1').on('dbclick', function(){
  $(this).toggleClass('turnBlue');
}) //qdo doubleclick em h1, fica azul

$('h2').on('mouseenter', function(){
  $(this).toggleClass('turnBlue');
})// qdo mouse está sobre h2, fica azul

$('input').eq(1).on('click', function(){
  $('.container').fadeOut(3000)
})//3000 milisegundos
//qdo click no input submit, tudo que está no container desaparece (fadeout) em 3000 ms

//$('input').eq(1).on('click', function(){
//  $('.container').fadeOut(3000)
//})
//desaparece para cima 
