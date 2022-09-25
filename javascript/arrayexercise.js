
var studentList = [];

function add(){
  var addStudent = prompt("Add an name")
  studentList.push(addStudent)
}

function remove(){
  var remStudent = prompt("Wih student would you like to remove?")
  var index = studentList.indexOf(remStudent);
  studentList.splice(index,1)
}

function display(){
  console.log(studentList)
}

var start = prompt("Would you like to start the app? y/n")
var request = "empty"

if (start === 'y'){
  while (request !== 'quit'){
    request = prompt('Would you like to add, remove, display or quit?')
    if (request === 'add'){
      add();
    }
    else if (request ==='display'){
      display()
    }
    else if (request ==='remove'){
      remove()
    }
    else {
      alert("Not reconized command")
    }
  }
}
  alert("Thanks for using the app")
