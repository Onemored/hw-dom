import HammerCursor from '../src/HammerCursor';

function prepareDom() {
    document.body.innerHTML = '<section id="game-board"></section>';
}

describe('HammerCursor', () => {
    beforeEach(() => {
        prepareDom();
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('getRoot возвращает контейнер и кеширует его', () => {
        const cursor = new HammerCursor();
        const first = cursor.getRoot();
        const second = cursor.getRoot();

        expect(first).toBe(second);
        expect(first.id).toBe('game-board');
    });

    test('createElement создаёт единственный DOM-элемент курсора', () => {
        const cursor = new HammerCursor();
        const first = cursor.createElement();
        const second = cursor.createElement();

        expect(first).toBe(second);
        expect(first.className).toBe('hammer-cursor');
        expect(first.style.backgroundImage).toContain('test-file-stub');
    });

    test('init ничего не делает без контейнера', () => {
        document.body.innerHTML = '';
        const cursor = new HammerCursor();

        cursor.init();

        expect(document.querySelector('.hammer-cursor')).toBeNull();
    });

    test('init включает кастомный курсор и реакции на события мыши', () => {
        const cursor = new HammerCursor();
        cursor.init();

        const board = document.getElementById('game-board');
        const hammer = document.querySelector('.hammer-cursor');

        expect(board.classList.contains('game-board--hammer')).toBe(true);
        expect(hammer).not.toBeNull();

        board.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true, clientX: 10, clientY: 20 }));
        expect(hammer.classList.contains('hammer-cursor--visible')).toBe(true);
        expect(hammer.style.left).toBe('10px');
        expect(hammer.style.top).toBe('20px');

        board.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: 35, clientY: 45 }));
        expect(hammer.style.left).toBe('35px');
        expect(hammer.style.top).toBe('45px');

        board.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        expect(hammer.classList.contains('hammer-cursor--hit')).toBe(true);

        board.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        expect(hammer.classList.contains('hammer-cursor--hit')).toBe(false);

        board.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
        expect(hammer.classList.contains('hammer-cursor--visible')).toBe(false);
    });

    test('обработчики безопасны, если element ещё не создан', () => {
        const cursor = new HammerCursor();

        expect(() => cursor.onMouseEnter(new MouseEvent('mouseenter', { clientX: 1, clientY: 2 }))).not.toThrow();
        expect(() => cursor.onMouseMove(new MouseEvent('mousemove', { clientX: 1, clientY: 2 }))).not.toThrow();
        expect(() => cursor.onMouseLeave()).not.toThrow();
        expect(() => cursor.onMouseDown()).not.toThrow();
        expect(() => cursor.onMouseUp()).not.toThrow();
    });



    test('destroy безопасен без контейнера и без элемента', () => {
        document.body.innerHTML = '';
        const cursor = new HammerCursor();

        expect(() => cursor.destroy()).not.toThrow();
        expect(cursor.element).toBeNull();
        expect(cursor.root).toBeNull();
    });

    test('destroy снимает класс, удаляет элемент и сбрасывает ссылки', () => {
        const cursor = new HammerCursor();
        cursor.init();

        const board = document.getElementById('game-board');
        expect(document.querySelector('.hammer-cursor')).not.toBeNull();

        cursor.destroy();

        expect(board.classList.contains('game-board--hammer')).toBe(false);
        expect(document.querySelector('.hammer-cursor')).toBeNull();
        expect(cursor.element).toBeNull();
        expect(cursor.root).toBeNull();
    });
});
