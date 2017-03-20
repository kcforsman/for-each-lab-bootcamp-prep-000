function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array2 = ["mercury", "venus", "earth", "mars", "jupiter"];
  array2.forEach(callback);
  return array2;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
