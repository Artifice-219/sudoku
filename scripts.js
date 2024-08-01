function step_up(array, row = 0, col = 0) {
  // Define a base case
  if (row === 9) {
    console.log(`Recursion finished`);
    return true; // Solution found
  }

  if (col === 9) {
    return step_up(array, row + 1, 0); // Move to the next row
  }

  if (array[row][col] !== 0) {
    return step_up(array, row, col + 1); // Skip filled cells
  }

  for (let number = 1; number <= 9; number++) {
    if (isValid(array, row, col, number)) {
      array[row][col] = number; // Assign the number

      if (step_up(array, row, col + 1)) {
        return true; // Move to the next cell
      }

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

function seed(array, limiter = 2) {
  for (let i = 0; i <= limiter; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    let number = Math.floor(Math.random() * 9) + 1; 

    if (isValid(array, row, col, number)) {
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

// Place some random values first
board = seed(board, 8);

if (!step_up(board)) {
  board = [
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

  board = seed(board, 8);

  step_up(board);
}

function fill_board(source) {
  const cells = document.querySelectorAll('.cell');
  
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 9);
    const col = index % 9;
    cell.value = source[row][col] !== 0 ? source[row][col] : '';
  });
}

function hide_some_cells(source, repeat_count){

  // ensure valid source
  if(source.length === 0 || source.length[0] === 0){

    console.error('invalid source parameter');
    return;
    
  }

  for(let i=0; i<=repeat_count; ++i){

    const row_limit = source.length;
    const col_limit = source[0].length;
  
    // generating "within bounds" row and columns
    const row = Math.floor(Math.random() * row_limit);
    const col = Math.floor(Math.random() * col_limit);
  
    source[row][col] = "";

  }


}

document.addEventListener('DOMContentLoaded', () => {
  const board_ui = document.getElementById('board');

  for (let i = 0; i < 81; i++) {
    let cell = document.createElement('input');
    cell.type = 'text';
    cell.min = 1;
    cell.max = 9;

    // Calculate row and column indices
    let row = Math.floor(i / 9);
    let column = i % 9;

    // Add data attributes
    cell.setAttribute('data-row', row);
    cell.setAttribute('data-column', column);

    cell.classList.add('cell');
    board_ui.appendChild(cell);
  }

    // hide some cells
    hide_some_cells(board, 100);

  // Fill the UI with values from the board
  fill_board(board);
});

