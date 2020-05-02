

function myKeyPress(e){

  var mytextbox = "my textbox element";
  mytextbox = document.getElementById("textinput").value;
  // this retrieves the value from the input into mytextbox

 

  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber("7189515000");
  
  var newtextbox = y; 
  document.getElementById("textinput").value = newtextbox; 
  /* This sets the value of the formated number into a new
     variable newtextbox 
     The second line is the textinput box value being set with
     the value of the formatted number so that the number is 
     formatted as you type it into the input. 
  */ 


  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);



  // TODO: Add a condition to ignore entries beyond 10 digits

}

function formatPhoneNumber(value){

  /* TODO:  Use replace function to ignore extra - character */

  if(value.length > 3 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(3);
  else if(value.length > 6)
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);

  return value;
}
