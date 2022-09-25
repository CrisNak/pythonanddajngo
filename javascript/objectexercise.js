var employee = {
  name:"John Smith",
  job: "Programmer",
  age: 31
}

nameLenght: function(){
  console.log(this.name.lenght)
}

report:function(){
  alert("Name is " + this.name, "Job is "+this.job, "Age is "+ this.age)
}

lastName:function(){
  console.log(this.name.split(" ")[1]);
}
//printa o último nome
