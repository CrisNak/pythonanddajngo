var header = document.querySelector('h1')

header.style.color = 'red';// muda a cor de h1 para red

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#'
  for (var i=0;i<6; i++){
    color +=letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

setInterval('changeHeaderColor()',500); //muda a cor em 500 milisegundos
