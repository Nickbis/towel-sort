
// You should implement your task here.

module.exports = function towelSort (matrix) {
 /* const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]; */

//let towelSort = [];
let temp = [];
if(!matrix) {return []} ;
if (matrix.length === 0) { return []};

for (let i = 0; i < matrix.length; i++) {
    if ( i % 2 == 0) {
      temp = temp.concat(matrix[i]);
    } else {
      temp = temp.concat(matrix[i].reverse());
    }
   };
return  temp;
}