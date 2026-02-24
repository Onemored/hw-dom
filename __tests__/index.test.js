import {
    createBoard,
    createGoblin,
    placeGoblin,
    moveGoblin,
    startGame,
} from '../src/index.js';

describe('Игровая логика — покрытие src/index.js', () => {
    let cells;

    const getGoblin = () => document.querySelector('img.goblin');

    beforeEach(() => {
        jest.useFakeTimers();

        document.body.innerHTML = '<div id="game-board"></div>';
        startGame();

        const board = document.getElementById('game-board');
        cells = Array.from(board.querySelectorAll('.cell'));
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
        jest.restoreAllMocks();
        document.body.innerHTML = '';
    });

    test('createBoard создаёт ровно 16 клеток с классом cell', () => {
        expect(cells).toHaveLength(16);
        expect(cells.every((cell) => cell.classList.contains('cell'))).toBe(true);
    });

    test('createGoblin создаёт img с классом goblin и правильными атрибутами', () => {
        const goblin = getGoblin();
        expect(goblin).not.toBeNull();
        expect(goblin.tagName).toBe('IMG');
        expect(goblin.classList.contains('goblin')).toBe(true);
        expect(goblin.alt).toBe('Гоблин');
        expect(typeof goblin.src).toBe('string');
        expect(goblin.src).not.toBe('');
    });

    test('placeGoblin размещает гоблина в случайной позиции при currentPosition = -1', () => {
        const goblin = getGoblin();
        jest.spyOn(Math, 'random').mockReturnValue(0.4375);
        const pos = placeGoblin(cells, goblin, -1);
        expect(pos).toBe(7);
        expect(cells[7].contains(goblin)).toBe(true);
    });

    test('placeGoblin размещает гоблина в указанной позиции при currentPosition != -1 (ветка else)', () => {
        const goblin = getGoblin();

        const randomSpy = jest.spyOn(Math, 'random');

        const pos = placeGoblin(cells, goblin, 5);

        expect(pos).toBe(5);
        expect(cells[5].contains(goblin)).toBe(true);
        expect(randomSpy).not.toHaveBeenCalled();
    });

    test('moveGoblin повторяет выбор, если сначала выпала та же позиция (покрытие ветки do-while)', () => {
        const goblin = getGoblin();
        const currentPosition = cells.findIndex((c) => c.contains(goblin));
        const nextPosition = (currentPosition + 1) % 16;

        jest
            .spyOn(Math, 'random')
            .mockReturnValueOnce(currentPosition / 16)
            .mockReturnValueOnce(nextPosition / 16);

        const newPos = moveGoblin(cells, goblin, currentPosition);

        expect(newPos).toBe(nextPosition);
        expect(cells[nextPosition].contains(goblin)).toBe(true);
        expect(cells[currentPosition].contains(goblin)).toBe(false);
    });

    test('setInterval вызывает перемещение каждые 1000 мс', () => {
        let goblin = getGoblin();
        const initialParent = goblin.parentElement;
        const initialIndex = cells.findIndex((c) => c.contains(goblin));

        jest
            .spyOn(Math, 'random')
            .mockReturnValueOnce(((initialIndex + 1) % 16) / 16)
            .mockReturnValueOnce(((initialIndex + 2) % 16) / 16);

        jest.advanceTimersByTime(1000);

        goblin = getGoblin();
        expect(goblin.parentElement).not.toBe(initialParent);

        const secondParent = goblin.parentElement;

        jest.advanceTimersByTime(1000);

        goblin = getGoblin();
        expect(goblin.parentElement).not.toBe(secondParent);

        expect(jest.getTimerCount()).toBe(1);
    });

    test('createBoard выбрасывает ошибку, если элемента #game-board нет в DOM', () => {
        document.body.innerHTML = '';
        expect(() => createBoard()).toThrow('Элемент #game-board не найден в DOM');
    });
});