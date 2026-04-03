describe('app.js', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.useFakeTimers();
        document.body.innerHTML = `
            <section id="game-info"></section>
            <section id="game-board"></section>
        `;
    });

    afterEach(async () => {
        const { stopGame } = await import('../src/index');
        stopGame();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        document.body.innerHTML = '';
    });

    test('DOMContentLoaded стартует игру, beforeunload её останавливает', async () => {
        await import('../src/app');

        document.dispatchEvent(new Event('DOMContentLoaded'));
        expect(document.querySelectorAll('.cell')).toHaveLength(16);
        expect(document.querySelector('.goblin')).not.toBeNull();

        window.dispatchEvent(new Event('beforeunload'));
        expect(document.querySelector('.goblin')).toBeNull();
    });
});
