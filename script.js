var display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  var result = eval(display.value);
  display.value = result;
}

function dark(){
    document.getElementById("lnk").setAttribute('href', 'dark.css');
 }

 function light(){
    document.getElementById("lnk").setAttribute('href', 'light.css');
 }

 function ocean(){
    document.getElementById("lnk").setAttribute('href', 'ocean.css');
 }
