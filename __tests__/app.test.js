describe('Browser entry (app.js)', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.useFakeTimers();
        document.body.innerHTML = '<div id="game-board"></div>';
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
        document.body.innerHTML = '';
    });

    test('app.js запускает игру по DOMContentLoaded и останавливает по beforeunload', async () => {
        await import('../src/app.js');

        document.dispatchEvent(new Event('DOMContentLoaded'));
        expect(document.querySelectorAll('.cell')).toHaveLength(16);
        expect(document.querySelector('img.goblin')).not.toBeNull();

        expect(jest.getTimerCount()).toBe(1);

        window.dispatchEvent(new Event('beforeunload'));

        expect(jest.getTimerCount()).toBe(0);
    });
});