var hot = false
var temp = 60

if (true){
  console.log('I ran')
}

if (temp>80){
  console.log('Hot outside')
}
else if (temp <=80 && temp>=50){
  console.log('Average tem outside')
}
else if (temp <=50 && temp>=32){
  console.log('Its pretty cold outside')
}
else{
  console.log('Its very cold outside')
}

if (temp>80){
  hot=true
}
console.log(hot)
