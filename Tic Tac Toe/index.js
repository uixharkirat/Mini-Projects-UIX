const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
      cells[a].classList.add('winner');
      cells[b].classList.add('winner');
      cells[c].classList.add('winner');
      gameActive = false;
      return true;
    }
  }

  if (!gameBoard.includes('')) {
    cells.forEach(cell => cell.classList.add('draw'));
    gameActive = false;
  }

  return false;
}

function handleCellClick(index) {
  if (!gameActive || gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  if (checkWinner()) {
    setTimeout(() => {
      alert(`${currentPlayer} wins!`);
      resetGame();
    }, 10);
  } else {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  }
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('winner', 'draw');
  });
  gameActive = true;
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
  
});
