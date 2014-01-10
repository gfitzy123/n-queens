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
/* START SOLUTION */
var findRookSolution = function(board, startRow, rows, callback) {
  if( startRow === rows ) {
    return callback(board);
  }

  for( var i = 0; i < rows; i++ ) {
    board.togglePiece(startRow, i);
    if( !board.hasAnyRooksConflicts() ) {
      var result = findRookSolution(board, startRow+1, rows, callback);
      if( result ){ return result; }
    }
    board.togglePiece(startRow, i);
  }
};

/* END SOLUTION */
window.findNRooksSolution = function(n) {
  /* START_PROMPT
  var solution = undefined; //fixme
  END_PROMPT */
  /* START_SOLUTION */
  var solution;
  var board = new Board({n:n});

  findRookSolution(board, 0, n, function(board) {
    return solution = board.rows();
  });
  /* END_SOLUTION */

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  /* START_PROMPT
  var solutionCount = undefined; //fixme
  END_PROMPT */

  /* START_SOLUTION */
  var solutionCount = 0;
  var board = new Board({n:n});

  findRookSolution(board, 0, n, function(board) {
    solutionCount++;
  });
  /* END_SOLUTION */

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  /* START_PROMPT
  var solution = undefined; //fixme
  END_PROMPT */

  /* START_SOLUTION */
  /* END_SOLUTION */

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  /* START_PROMPT
  var solutionCount = undefined; //fixme
  END_PROMPT */

  /* START_SOLUTION */
    var Q=function(n){
      var s=0,c=(1<<n)-1,f=function(l,o,r,c){
        var v=~(l|o|r)&c;
        while(v>0){
          var t=-v&v;
          v=v^t;
          f((l|t)<<1,(o|t),(r|t)>>1,c);
        }
        o==c&&s++;
      };
      f(0,0,0,c);
      return s;
    };
    var solutionCount = Q(n); //fixme
  /* END_SOLUTION */

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
