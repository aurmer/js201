// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(size) {
  var squareString = ""

    for(var i = 0; i < size; i++){
      squareString = squareString + ("*").repeat(size)
      if(i + 1 != size) {
        squareString = squareString + "\n"
      }
    }

    return squareString
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(sizeX, sizeY) {
  var boxString = ""

    for(var i = 0; i < sizeY; i++){
      for(var j = 0; j < sizeX; j++) {
        if(i == 0 || j == 0 || i == sizeY-1 || j == sizeX-1) {
          boxString = boxString + "*"
        } else {
          boxString = boxString + " "
        }
      }
      if(i + 1 != sizeY) {
        boxString = boxString + "\n"
      }
    }
    return boxString
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(someText) {
  var solidAsterisk = '*'.repeat(someText.length + 4)
  return solidAsterisk + "\n* " + someText + " *\n" + solidAsterisk
}
