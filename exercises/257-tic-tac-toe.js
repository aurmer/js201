// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null
function ticTacToe(gameBoard) {
    var paths = {
      row0: 'empty',
      row1: 'empty',
      row2: 'empty',
      col0: 'empty',
      col1: 'empty',
      col2: 'empty',
      diag0: 'empty',
      diag1: 'empty',
      updatePath: function(ref,boardElement) {
        if(this[ref] === "empty") { //if it is still empty, fill with first value found
          this[ref] = boardElement
        } else if (this[ref] !== boardElement) { //if it is mismatch, change to false
          this[ref] = null
        }
      },
      isOnDiag0: function(boardIndexX,boardIndexY) {
        return (boardIndexX + boardIndexY === 0) || (boardIndexX + boardIndexY === 4) || (boardIndexX === 1 && boardIndexY === 1)
      },
      isOnDiag1: function(boardIndexX,boardIndexY) {
        return (boardIndexX + boardIndexY === 2)
      },
      findWinCondition: function(){
        if(this.row0 !== null) return this.row0
        if(this.row1 !== null) return this.row1
        if(this.row2 !== null) return this.row2
        if(this.col0 !== null) return this.col0
        if(this.col1 !== null) return this.col1
        if(this.col2 !== null) return this.col2
        if(this.diag0 !== null) return this.diag0
        if(this.diag1 !== null) return this.diag1
        return null
      }
    }

    gameBoard.forEach( (element,index) => {
      element.forEach( (subElement,subIndex) => {

        //row update
        paths.updatePath(`row${index}`, subElement)
        //column check
        paths.updatePath(`col${subIndex}`, subElement)

        //diaganal check
        if(paths.isOnDiag0(subIndex,index)){
          paths.updatePath(`diag0`, subElement)
        }
        if(paths.isOnDiag1(subIndex,index)){
          paths.updatePath(`diag1`, subElement)
        }
    })
  })

  return paths.findWinCondition()
}
