
function forLoop(array) {
  for (i=0; i < 25; i++){
    var stringArr = "I am " + i + " strange loops."
    array.push(stringArr);
  }
  return array;
}

function whileLoop(number) {
  var counts = number;
  while (counts > 0){
    console.log(--counts);
  }
  console.log ('done');
}

whileLoop(10)
