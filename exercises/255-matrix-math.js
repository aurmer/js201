// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]
function matrixAdd(mat1, mat2) {
  var sumResult = []
  mat1.forEach( (lvl1_element, lvl1_idx) => {
    sumResult[lvl1_idx] = []
    lvl1_element.forEach( (lvl2_element, lvl2_idx) => {
      sumResult[lvl1_idx][lvl2_idx] = lvl2_element + mat2[lvl1_idx][lvl2_idx]
    })
  })

  return sumResult
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]
function matrixMultiply(mat1, mat2) {
  var multResult = []
  mat1.forEach( (lvl1_element, lvl1_idx) => {
    multResult[lvl1_idx] = []
    lvl1_element.forEach( (lvl2_element, lvl2_idx) => {
      multResult[lvl1_idx][lvl2_idx] = mat1[lvl1_idx][0] * mat2[0][lvl2_idx] + mat1[lvl1_idx][1] * mat2[1][lvl2_idx]
    })
  })

  return multResult
}
