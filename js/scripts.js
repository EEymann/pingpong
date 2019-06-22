// Business logic that will replace numbers divisible by 3 with "ping"
var input;
var number = [];

var possiblePingPong = function (input) {
  if (input < 1) {
    alert("Please enter a positive number greater than 0. Thank you!")
  } else {
    for (i=0; i<=input; i+=1) {
      number.push(i);
}
}
}

var pingPong = function(){
    number.map(function(numbers){
    if (numbers === 0) {  
    } else if (numbers % 3 === 0) {
      $("#result").append("<li>" + "ping" + "</li>");
    } else {
      $("#result").append("<li>" + numbers + "</li>");
      }
  }
)}


// User interface logic that will retrieve user input from the form, and call the business logic function, 'pingPong'.
$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    input = parseInt($("input#number").val());
    $("#result").empty();
    number = [];
    possiblePingPong(input);
    pingPong();
    $("#result").show();
});
});