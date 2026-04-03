import { createGame, startGame, stopGame, GameController } from '../src/index';

function prepareDom() {
    document.body.innerHTML = `
        <section id="game-info"></section>
        <section id="game-board"></section>
    `;
}

describe('index.js', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        prepareDom();
    });

    afterEach(() => {
        stopGame();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        document.body.innerHTML = '';
    });

    test('createGame создаёт экземпляр контроллера', () => {
        const game = createGame();
        expect(game).toBeInstanceOf(GameController);
    });

    test('startGame запускает игру повторно с уже созданным экземпляром, stopGame её уничтожает', () => {
        const game = startGame();
        const sameGame = startGame();
        expect(game).toBe(sameGame);
        expect(game.isRunning).toBe(true);
        expect(document.querySelectorAll('.cell')).toHaveLength(16);

        stopGame();
        expect(document.querySelector('.goblin')).toBeNull();
    });
});
