
var elem = document.getElementById('operation');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value-1');
  target.innerHTML = newValue;
};

elem.addEventListener("input", rangeValue);

var elem2 = document.getElementById('number_employees');

var rangeValue2 = function(){
  var newValue2 = elem2.value;
  var target2 = document.querySelector('.value-2');
  target2.innerHTML = newValue2;
};

elem2.addEventListener("input", rangeValue2);



var elem3 = document.getElementById('operation-2');

var rangeValue3 = function(){
  var newValue3 = elem3.value;
  var target3 = document.querySelector('.value-3');
  target3.innerHTML = newValue3;
};

elem3.addEventListener("input", rangeValue3);

var elem4 = document.getElementById('number_employees-2');

var rangeValue4 = function(){
  var newValue4 = elem4.value;
  var target4 = document.querySelector('.value-4');
  target4.innerHTML = newValue4;
};

elem4.addEventListener("input", rangeValue4);
