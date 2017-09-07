
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

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

maybeTrue()
