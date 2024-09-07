let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e)   => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
      } catch (error) {
        console.error("Invalid   expression:", error);
        string = "";
      }
    } 
    
    else if (e.target.innerHTML == 'AC') {
      string = "";
    } 
    else if(e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length-1);
        input.value = string;
    }
    else {
      string += e.target.innerHTML;
    }
    input.value = string;
  });
});