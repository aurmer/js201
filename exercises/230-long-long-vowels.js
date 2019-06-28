// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels(shortVersion){
  var listVowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }

  var lastChar = ""
  var longVersion = ""
  var thisChar = ""

  for(var i = 0; i < shortVersion.length; i++) {
    thisChar = shortVersion.charAt(i)
    if(lastChar === thisChar && listVowels[lastChar.toLowerCase()]) {
      longVersion = longVersion + thisChar + thisChar + thisChar + thisChar
    } else {
      longVersion = longVersion + thisChar
    }
    lastChar = thisChar
  }

  return longVersion
}
