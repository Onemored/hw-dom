import './style.css';
import GameController from './GameController';
import HammerCursor from './HammerCursor';

let gameController = null;
let hammerCursor = null;

export function createGame() {
    gameController = new GameController();
    return gameController;
}

export function startGame() {
    if (!gameController) {
        createGame();
    }

    if (!hammerCursor) {
        hammerCursor = new HammerCursor();
        hammerCursor.init();
    }

    gameController.start();
    return gameController;
}

export function stopGame() {
    if (hammerCursor) {
        hammerCursor.destroy();
        hammerCursor = null;
    }

    if (gameController) {
        gameController.destroy();
        gameController = null;
    }
}

export { GameController };
