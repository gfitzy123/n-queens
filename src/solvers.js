/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

  */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n}).rows(); //fixme
  var colCounter = 0;

  console.log(solution)

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution[i][colCounter] = 1;

    };

    colCounter++;
  };


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n:n});

  var string;
  var storage = [];

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {

    function Recursor() {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
          if (!board.hasAnyRooksConflicts()) {
            board.togglePiece(i,j)
            console.log(board);
                if (board[i][j] === 0) {
                     string.push("a")
                } else string.push("b")
          }
        };
      };
    };
    storage.push(string);
    solutionCount++
  };
}

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solution = new Board({n:n}).rows(); //fixme
 
// Check if every element in bucket has a row, column, minor, major
// conflict. If not, add 1 to QueenCounter.

// Return solution

//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       if (solution.hasRowConflictAt(solution[i])) {
      
//         solution[i][j] = 1;
      
//       }



//   };
// }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
