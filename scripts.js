function box_valid(array, number, row, col) {
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

function col_valid(array, number, row, col) {
  for (let i = 0; i < 9; i++) {
    if (array[i][col] == number) {
      return false;
    }
  }
  return true;
}

function row_valid(array, number, row, col) {
  for (i = 0; i <= 8; i++) {
    if (array[row][i] === number) {
      return false;
    }
  }
  return true;
}

function assign(array) {
  for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <= 8; col++) {
      let number = generate();
      if ((row_valid(array, number, row, col)) && col_valid(array, number, row, col)) {
        array[row][col] = number;
      } else {
        number = generate();
      }
    }
  }
}

function generate() {
  return Math.floor(Math.random() * 9) + 1; // Generate numbers between 1 and 9
}

let array = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

assign(array);

for (let row of array) {
  let row_str = row.join(" ");
  console.log(row_str);
}
