function hello(name="Frank"){
  console.log("Hello "+name);//se nao for colocado um nome, ficara Frank
  return ("Hello " + name)
}

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside function"
  console.log(stuff);
}

fun()
console.log(stuff);

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
} //!aSmile significa diferente de aSmile

// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figue this one out, don't worry, that's why its a bonus!
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
  return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal
}
