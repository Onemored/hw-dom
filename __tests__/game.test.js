import GameBoard from '../src/js/GameBoard';
import Goblin from '../src/js/Goblin';
import Scoreboard from '../src/js/Scoreboard';
import GameController from '../src/js/GameController';

function prepareDom() {
    document.body.innerHTML = `
        <section id="game-info"></section>
        <section id="game-board"></section>
    `;
}

describe('GameBoard', () => {
    beforeEach(() => {
        prepareDom();
    });

    afterEach(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    test('render создаёт 16 ячеек', () => {
        const board = new GameBoard();
        const cells = board.render();

        expect(cells).toHaveLength(16);
        expect(board.getCell(5).dataset.index).toBe('5');
        expect(board.getCell(100)).toBeNull();
    });

    test('getContainer использует кешированный контейнер', () => {
        const board = new GameBoard();
        const first = board.getContainer();
        const second = board.getContainer();
        expect(first).toBe(second);
    });

    test('getContainer выбрасывает ошибку без контейнера', () => {
        document.body.innerHTML = '';
        const board = new GameBoard();
        expect(() => board.getContainer()).toThrow('Элемент #game-board не найден в DOM');
    });

    test('getRandomCellIndex учитывает excludedIndex и одиночную ячейку', () => {
        const board = new GameBoard('game-board', 1);
        board.render();
        expect(board.getRandomCellIndex(0)).toBe(0);

        const normalBoard = new GameBoard();
        normalBoard.render();
        jest.spyOn(Math, 'random').mockReturnValueOnce(0.2);
        expect(normalBoard.getRandomCellIndex(0)).toBe(4);
    });

    test('getRandomCellIndex возвращает любое значение, если excludedIndex невалидный', () => {
        const board = new GameBoard();
        board.render();
        jest.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValueOnce(0.1);

        expect(board.getRandomCellIndex(null)).toBe(8);
        expect(board.getRandomCellIndex(100)).toBe(1);
    });

    test('getRandomCellIndex выбрасывает ошибку до render', () => {
        const board = new GameBoard();
        expect(() => board.getRandomCellIndex()).toThrow('Игровое поле ещё не создано');
    });
});

describe('Goblin and Scoreboard', () => {
    beforeEach(() => {
        prepareDom();
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('Goblin show/hide управляет DOM и состоянием', () => {
        const goblin = new Goblin();
        const cell = document.createElement('div');

        goblin.show(cell, 2);
        expect(cell.contains(goblin.element)).toBe(true);
        expect(goblin.visible).toBe(true);
        expect(goblin.position).toBe(2);

        goblin.hide();
        expect(cell.contains(goblin.element)).toBe(false);
        expect(goblin.visible).toBe(false);
        expect(goblin.position).toBeNull();
    });

    test('Scoreboard render/update/setStatus обновляют значения', () => {
        const scoreboard = new Scoreboard();
        scoreboard.render();
        expect(scoreboard.getRoot()).toBe(scoreboard.getRoot());
        scoreboard.update(3, 4);
        scoreboard.setStatus('done');

        expect(document.querySelector('[data-role="score"]').textContent).toBe('3');
        expect(document.querySelector('[data-role="misses"]').textContent).toBe('4');
        expect(document.querySelector('[data-role="status"]').textContent).toBe('done');
    });

    test('Scoreboard выбрасывает ошибку без контейнера', () => {
        document.body.innerHTML = '';
        const scoreboard = new Scoreboard();
        expect(() => scoreboard.getRoot()).toThrow('Элемент #game-info не найден в DOM');
    });
});

describe('GameController', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        prepareDom();
        jest.spyOn(Math, 'random').mockReturnValue(0);
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        jest.restoreAllMocks();
        document.body.innerHTML = '';
    });

    test('start запускает игру и создаёт таймер', () => {
        const controller = new GameController();
        controller.start();

        expect(controller.isRunning).toBe(true);
        expect(document.querySelectorAll('.cell')).toHaveLength(16);
        expect(document.querySelector('.goblin')).not.toBeNull();
        expect(jest.getTimerCount()).toBe(1);
    });

    test('handleHit увеличивает счёт и переносит гоблина', () => {
        const controller = new GameController();
        jest.spyOn(controller.board, 'getRandomCellIndex')
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2);

        controller.start();
        controller.handleHit();

        expect(controller.score).toBe(1);
        expect(controller.misses).toBe(0);
        expect(controller.goblin.position).toBe(2);
    });

    test('клик по правильной ячейке вызывает попадание', () => {
        const controller = new GameController();
        jest.spyOn(controller.board, 'getRandomCellIndex')
            .mockReturnValueOnce(4)
            .mockReturnValueOnce(5);

        controller.start();
        controller.board.getCell(4).click();

        expect(controller.score).toBe(1);
        expect(controller.goblin.position).toBe(5);
    });

    test('клик по неправильной ячейке ничего не меняет', () => {
        const controller = new GameController();
        jest.spyOn(controller.board, 'getRandomCellIndex').mockReturnValue(2);
        controller.start();
        controller.board.getCell(1).click();
        expect(controller.score).toBe(0);
        expect(controller.goblin.position).toBe(2);
    });


    test('после попадания и промаха гоблин не появляется в той же ячейке подряд', () => {
        const controller = new GameController();
        controller.start();

        const firstPosition = controller.goblin.position;
        controller.handleHit();
        const secondPosition = controller.goblin.position;
        expect(secondPosition).not.toBe(firstPosition);

        jest.advanceTimersByTime(1000);
        const thirdPosition = controller.goblin.position;
        expect(thirdPosition).not.toBe(secondPosition);
    });

    test('handleMiss завершает игру на пятом промахе', () => {
        const controller = new GameController({ missLimit: 2 });
        jest.spyOn(controller.board, 'getRandomCellIndex').mockReturnValue(3);
        controller.start();

        jest.advanceTimersByTime(1000);
        expect(controller.misses).toBe(1);
        expect(controller.isRunning).toBe(true);

        jest.advanceTimersByTime(1000);
        expect(controller.misses).toBe(2);
        expect(controller.isRunning).toBe(false);
        expect(document.querySelector('[data-role="status"]').textContent).toContain('Игра окончена');
    });

    test('handleHit и handleMiss не перезапускают цикл, если игра остановлена', () => {
        const controller = new GameController();
        jest.spyOn(controller.board, 'getRandomCellIndex').mockReturnValue(6);
        controller.start();
        controller.isRunning = false;
        controller.handleHit();
        expect(controller.goblin.visible).toBe(false);
        expect(jest.getTimerCount()).toBe(0);

        controller.handleMiss();
        expect(controller.misses).toBe(1);
        expect(jest.getTimerCount()).toBe(0);
    });

    test('stop и destroy очищают таймер и обработчики', () => {
        const controller = new GameController();
        jest.spyOn(controller.board, 'getRandomCellIndex')
            .mockReturnValueOnce(6)
            .mockReturnValueOnce(7);
        controller.start();
        controller.stop();
        expect(jest.getTimerCount()).toBe(0);

        controller.destroy();
        controller.board.getCell(6).click();
        expect(controller.score).toBe(0);
    });

    test('onCellClick игнорируется после остановки', () => {
        const controller = new GameController();
        jest.spyOn(controller.board, 'getRandomCellIndex').mockReturnValue(8);
        controller.start();
        controller.finish();
        controller.board.getCell(8).click();
        expect(controller.score).toBe(0);
    });
});
