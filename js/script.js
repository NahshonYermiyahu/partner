// var elem = document.querySelector('operation');
var elem = document.getElementById('operation');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value-1');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);

var elem2 = document.getElementById('number_employees');

var rangeValue2 = function(){
  var newValue2 = elem2.value;
  var target2 = document.querySelector('.value-2');
  target2.innerHTML = newValue2;
}

elem2.addEventListener("input", rangeValue2);

//'input[type="range"]'
