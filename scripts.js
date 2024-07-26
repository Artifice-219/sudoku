
let choices_array = [1,2,3,4,5,6,7,8,9]

function choice(){
  let random_index = Math.floor(Math.random() * choices_array.length);
  return choices_array[random_index];
}

function assign(array, row, col, number){
  // only call this when the to be assigned number is valid
  array[row][col] = number;
}

function col_check(array, number,col) {
  for (let i = 0; i < 9; i++) {
    if (array[i][col] === number) {
      return false;
    }
  }
  return true;
}

function row_check(array, number, row) {
  for (let i = 0; i <= 8; i++) {
    if (array[row][i] === number) {
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


 let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let failed_choices = [];


function make_choice(board){
  let number = choice()
  console.log(`make choice number is ${number}`);

 for(let row=0; row< 9; row++){
  for(let col=0; col< 9; col++){
    if(col_check(board, number,col) && row_check(board, number, row), sub_grid_check(board, number, row, col)){
     assign(board, row, col, number)
    }
    else{
      failed_choices.push(number);
    }
  }
 }
}

make_choice(board);

console.log(board);