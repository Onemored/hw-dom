export default class Scoreboard {
    constructor(rootId = 'game-info') {
        this.rootId = rootId;
        this.root = null;
        this.scoreValue = null;
        this.missValue = null;
        this.statusValue = null;
    }

    getRoot() {
        if (!this.root) {
            this.root = document.getElementById(this.rootId);
        }

        if (!this.root) {
            throw new Error(`Элемент #${this.rootId} не найден в DOM`);
        }

        return this.root;
    }

    render() {
        const root = this.getRoot();
        root.innerHTML = `
            <div class="game-info__item">Счёт: <span data-role="score">0</span></div>
            <div class="game-info__item">Промахи: <span data-role="misses">0</span></div>
            <div class="game-info__item game-info__status" data-role="status">Игра запущена</div>
        `;

        this.scoreValue = root.querySelector('[data-role="score"]');
        this.missValue = root.querySelector('[data-role="misses"]');
        this.statusValue = root.querySelector('[data-role="status"]');
    }

    update(score, misses) {
        this.scoreValue.textContent = String(score);
        this.missValue.textContent = String(misses);
    }

    setStatus(message) {
        this.statusValue.textContent = message;
    }
}
