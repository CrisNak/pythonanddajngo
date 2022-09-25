var carInfo = {make:"toyota", year:1990,model:"Camry"};
//quando chamar carInfo["make"]: precisa colocar aspas
carInfo['year'] = 2006; //muda o django
carInfo['year'] += 1 //adiciona um ano

for (k in carInfo){
  console.log(k);
  console.log(carInfo[k]);
}// printa os parametros e depois as informações contidas em cada

var newList = {a:"hello", b:[1,2,3],c:{inside:['a','b']}};
// se chamar nweList, vai mostrar {a:"hello", b:arry[3],c:Object}}
// para mostra o numero do meio de b: nweList['b'][1] --> 2
//para mostras dentro do c: newList['c']['inside'][1] --> 'b'

var simple = {
  prop: "Hello",
  myMethod : function(){
    console.log("The method was called");
  }
}
//se escrever simple.myMethod(), vai aparecer a frase do console.log

var myObj = {
  name:'Jose',
  greet : function(){
    console.log('Hello ' + this.name)
  }
}
//this se refere ao objeto da variavel - name
// myObj.greet() vai aparecer Hello Jose
