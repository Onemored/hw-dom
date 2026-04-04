import { BOARD_SIZE } from './constants';

export default class GameBoard {
    constructor(containerId = 'game-board', size = BOARD_SIZE) {
        this.containerId = containerId;
        this.size = size;
        this.container = null;
        this.cells = [];
    }

    getContainer() {
        if (!this.container) {
            this.container = document.getElementById(this.containerId);
        }

        if (!this.container) {
            throw new Error(`Элемент #${this.containerId} не найден в DOM`);
        }

        return this.container;
    }

    render() {
        const container = this.getContainer();
        container.textContent = '';
        this.cells = [];

        for (let index = 0; index < this.size; index += 1) {
            const cell = document.createElement('button');
            cell.type = 'button';
            cell.className = 'cell';
            cell.dataset.index = String(index);
            cell.setAttribute('aria-label', `Лунка ${index + 1}`);
            container.append(cell);
            this.cells.push(cell);
        }

        return this.cells;
    }

    getRandomCellIndex(excludedIndex = null) {
        if (this.cells.length === 0) {
            throw new Error('Игровое поле ещё не создано');
        }

        if (this.cells.length === 1) {
            return 0;
        }

        if (excludedIndex === null || excludedIndex < 0 || excludedIndex >= this.cells.length) {
            return Math.floor(Math.random() * this.cells.length);
        }

        const randomIndex = Math.floor(Math.random() * (this.cells.length - 1));
        return randomIndex >= excludedIndex ? randomIndex + 1 : randomIndex;
    }

    getCell(index) {
        return this.cells[index] ?? null;
    }
}
