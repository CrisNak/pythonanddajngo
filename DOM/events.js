var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

headOne.addEventListener('mouseover', function(){
  headOne.textContent = 'Mouse Currently Over';
  headOne.style.color = 'red';
}) // acontece qdo o mouse está em cima

headOne.addEventListener('mouseout', function(){
  headOne.textContent = "HOVER OVER ME";
  headOne.style.color = 'black';
})// acontece qdo tira o mouse de cima

headTwo.addEventListener("click", function(){
  headTwo.textContent = 'CLICKED ON';
  headTwo.style.color = 'blue';
}) // acontece qdo clica

headThree.addEventListener('dblclick', function(){
  headThree.textContent = "I WAS DOUBLE CLICKED";
  headThree.style.color = 'green';
})
