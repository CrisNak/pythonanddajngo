var p = document.querySelector('p')

p.textContent = "new text"; // muda todos os p para esta frase

p.innerHTML = "<strong>I'm bold</strong>" // muda o html (negrito)

var special = document.querySelector('#special') // seleciona o id

var speacilA = special.querySelector('a') // seleciona o a dentro da var special

specialA.setAttribute('href', 'https://www.amazon.com')// muda o direcionamento do link
