
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
  return ('done');
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >=0.5;
  }
  do {
    array.pop()
  }
  while (array.length > 0 && maybeTrue());
  return array;
} 