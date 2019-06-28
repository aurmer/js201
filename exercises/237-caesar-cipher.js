// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'
function cipher(unencryptedMsg,shiftNumber) {

  unencryptedMsg = unencryptedMsg.toLowerCase()
  var encryptedMsg = ""

  while(shiftNumber > 26) {
    shiftNumber = shiftNumber - 26
  }

  for(var i = 0; i < unencryptedMsg.length; i++) {
    if(unencryptedMsg.charCodeAt(i) >= 97 && unencryptedMsg.charCodeAt(i) <= 122 ) {
      if(shiftNumber + unencryptedMsg.charCodeAt(i) > 122) {
        encryptedMsg = encryptedMsg + String.fromCharCode(unencryptedMsg.charCodeAt(i) + shiftNumber - 26)
      } else {
        encryptedMsg = encryptedMsg + String.fromCharCode(unencryptedMsg.charCodeAt(i) + shiftNumber)
      }
    } else {
      encryptedMsg = encryptedMsg + unencryptedMsg.charAt(i)
    }
  }

  return encryptedMsg
}
//21m30sec


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher(encryptedMsg,shiftNumber) {

  encryptedMsg = encryptedMsg.toLowerCase()  
  var unencryptedMsg = ""

  while(shiftNumber > 26) {
    shiftNumber = shiftNumber - 26
  }

  for(var i = 0; i < encryptedMsg.length; i++) {
    if(encryptedMsg.charCodeAt(i) >= 97 && encryptedMsg.charCodeAt(i) <= 122 ) {
      if(encryptedMsg.charCodeAt(i) - shiftNumber < 97) {
        unencryptedMsg = unencryptedMsg + String.fromCharCode(encryptedMsg.charCodeAt(i) - shiftNumber + 26)
      } else {
        unencryptedMsg = unencryptedMsg + String.fromCharCode(encryptedMsg.charCodeAt(i) - shiftNumber)
      }
    } else {
      unencryptedMsg = unencryptedMsg + encryptedMsg.charAt(i)
    }
  }

  return unencryptedMsg
}
