var arr = ['A', 'B', 'C']

for (letter of arr){
  alert(letter);
} //faz um alerta de cada letra do array

for (var i=0; i<arr.length; i++){
  alert(arr[i])
}// faz o mesmo que a funcção de cima

arr.forEach(alert) // faz o mesmo que a funcção de cima


function addAwesome(name){
  console.log(name+"is awesome!")
}

addAwesome("django") // printa django is addAwesome

var topics = ['python', 'django', 'science']

topics.forEach(addAwesome) //printa "item do topics" + is awesome
