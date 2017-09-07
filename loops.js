function forLoop(array) {
  for (i=0; i < 25; i++){
    var stringArr = "I am " + i + " strange loops."
    array.push(stringArr);
  }
  return array;
}

console.log 