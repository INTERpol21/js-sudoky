// Функция isUnique проверяет, содержит ли массив arr уникальные значения
function isUnique(arr) {
  const unique = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in unique) {
      return false;
    } else {
      unique[arr[i]] = true;
    }
  }
  return true;
}

// Функция checkBlock проверяет, содержит ли блок 3x3 матрицы уникальные значения
// row и col задают верхний левый угол блока
function checkBlock(grid, row, col) {
  const arr = [];
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      arr.push(grid[i][j]);
    }
  }
  return isUnique(arr);
}

// Функция checkRow проверяет, содержит ли строка матрицы уникальные значения
function checkRow(grid, row) {
  let arr = grid[row];
  return isUnique(arr);
}

// Функция checkCol проверяет, содержит ли столбец матрицы уникальные значения
function checkCol(grid, col) {
  const arr = [];
  for (let i = 0; i < grid.length; i++) {
    arr.push(grid[i][col]);
  }
  return isUnique(arr);
}

// Функция checkSudoku проверяет, является ли матрица grid корректным судоку
function checkSudoku(grid) {
  let i;
  // Проверяем строки и столбцы
  for (i = 0; i < grid.length; i++) {
    if (!checkRow(grid, i) || !checkCol(grid, i)) {
      return false;
    }
  }
  // Проверяем блоки 3x3
  for (i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!checkBlock(grid, i, j)) {
        return false;
      }
    }
  }
  return true;
}

// Проверяем судоку из примера

const grid = [
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
const grid2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

console.log('Sudoku 1 is valid:', checkSudoku(grid)); //true
console.log('Sudoku 2 is valid:', checkSudoku(grid2)); //false
