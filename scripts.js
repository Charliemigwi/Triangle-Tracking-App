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
  //Initialize add() function
  function add(number1, number2){
  return number1 + number2;
};
    var resultA = (sideB + sideC);
    var resultB = (sideA + sideC);
    var resultC = (sideA + sideB);
if (resultA <= sideA || resultB <= sideB || resultC <= sideC ){
    output.textContent="You cannot form a Triangle from those values!!";
}else if(sideA === sideB && sideB != sideC){
    output.textContent="The Values Entered are for a Isosceles Triangle";
}else if(sideA === sideC && sideC != sideB){
    output.textContent="The Values Entered are for a Isosceles Triangle";
}else if(sideB === sideC && sideC != sideA){
    output.textContent="The Values Entered are for a Isosceles Triangle";
} else if(sideA === sideB && sideB === sideC) {
    output.textContent= "The Values Entered are for an Equilateral Triangle";
}
else {
    output.textContent ="The Values Entered are for a Scalene Triangle";
}
};
