//triangleType function() has no parameters as it is a callback
var triangleType = function(){
  //document.getElementById('id')- fetches data input from the html document and takes the id
  var sideA = parseInt(document.getElementById('sideA').value);
  var sideB = parseInt(document.getElementById('sideB').value);
  var sideC = parseInt(document.getElementById('sideC').value);
  //Definition of output variable
  var output = document.getElementById('output');
  //logical if to restrict user input
  if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    output.textContent = "Please Input Numbers for all Fields!";
  } else {
    
  }

}
