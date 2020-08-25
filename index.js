const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winYear
  array.find(function(obj) {
    if (obj.result === "W") {
      winYear = obj.year;
    }
  })
  return winYear;
}