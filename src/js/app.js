import { startGame, stopGame } from '../index';

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

window.addEventListener('beforeunload', () => {
    stopGame();
});
