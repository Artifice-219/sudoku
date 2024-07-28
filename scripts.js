function step_up(array, row = 0, col = 0) {
  // Define a base case
  if (row === 9) {
    console.log(`Recursion finished`);
    return true; // Solution found
  }

  if (col === 9) {
    // console.log(`Moving to the next row`);
    return step_up(array, row + 1, 0); // Move to the next row
  }

  if (array[row][col] !== 0) {
    // console.log(`Skipping non-empty cell`);
    return step_up(array, row, col + 1); // Skip filled cells
  }

  for (let number = 1; number <= 9; number++) {
    if (isValid(array, row, col, number)) {
      // console.log(`Trying to place ${number} at (${row}, ${col})`);
      array[row][col] = number; // Assign the number

      if (step_up(array, row, col + 1)) {
        return true; // Move to the next cell
      }

      // console.log(`Backtracking from (${row}, ${col})`);
      array[row][col] = 0; // Backtrack if no solution found
    }
  }

  return false; // No solution found
}

function isValid(array, row, col, number) {
  return (
    row_check(array, number, row) &&
    col_check(array, number, col) &&
    sub_grid_check(array, number, row, col)
  );
}

function row_check(array, number, row) {
  for (let i = 0; i < 9; i++) {
    if (array[row][i] === number) {
      return false;
    }
  }
  return true;
}

function col_check(array, number, col) {
  for (let i = 0; i < 9; i++) {
    if (array[i][col] === number) {
      return false;
    }
  }
  return true;
}

function sub_grid_check(array, number, row, col) {
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (array[startRow + i][startCol + j] === number) {
        return false;
      }
    }
  }
  return true;
}

function seed(array, limiter = 2){
  // this function will put "seed" values at random position in the array
  for(let i=0; i<=limiter; i++){
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    let number = Math.floor(Math.random() * 9);

    // check for validity before assigning
    if(isValid(array, row, col, number)){
      array[row][col] = number;
    }

  }

  return array;
}

let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// place some random values first
board = seed(board, 8);

if(!step_up(board)){

  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 9, 0, 0, 0, 0],
  ];

  // place some random values first
board = seed(board, 8);

  step_up(board);

}

for(let row of board){
    const row_str = row.join(' ');
    console.log(row_str);
}

const div_board = document.getElementById('board'); // Corrected line

for (let i = 0; i < 81; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    div_board.appendChild(cell);
}

