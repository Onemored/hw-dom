import './style.css';
import goblinImg from './goblin.png';

export function createBoard() {
    const board = document.getElementById('game-board');
    if (!board) {
        throw new Error('Элемент #game-board не найден в DOM');
    }
    const cells = [];
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
        cells.push(cell);
    }
    return cells;
}

export function createGoblin() {
    const goblin = document.createElement('img');
    goblin.src = goblinImg;
    goblin.classList.add('goblin');
    goblin.alt = 'Гоблин';
    return goblin;
}

export function placeGoblin(cells, goblin, currentPosition = -1) {
    let pos = currentPosition;
    if (pos === -1) {
        pos = Math.floor(Math.random() * 16);
    }
    cells[pos].appendChild(goblin);
    return pos;
}

export function moveGoblin(cells, goblin, currentPosition) {
    let newPosition;
    do {
        newPosition = Math.floor(Math.random() * 16);
    } while (newPosition === currentPosition);
    cells[newPosition].appendChild(goblin);
    return newPosition;
}

export function startGame() {
    const cells = createBoard();
    const goblin = createGoblin();
    let currentPosition = placeGoblin(cells, goblin);

    setInterval(() => {
        currentPosition = moveGoblin(cells, goblin, currentPosition);
    }, 1000);
}