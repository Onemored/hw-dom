import { startGame, stopGame } from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

window.addEventListener('beforeunload', () => {
    stopGame();
});