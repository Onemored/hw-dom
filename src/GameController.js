import GameBoard from './GameBoard';
import Goblin from './Goblin';
import Scoreboard from './Scoreboard';
import { GOBLIN_VISIBLE_MS, MISS_LIMIT } from './constants';

export default class GameController {
    constructor({
        board = new GameBoard(),
        goblin = new Goblin(),
        scoreboard = new Scoreboard(),
        visibleDuration = GOBLIN_VISIBLE_MS,
        missLimit = MISS_LIMIT,
    } = {}) {
        this.board = board;
        this.goblin = goblin;
        this.scoreboard = scoreboard;
        this.visibleDuration = visibleDuration;
        this.missLimit = missLimit;

        this.score = 0;
        this.misses = 0;
        this.isRunning = false;
        this.timerId = null;

        this.onCellClick = this.onCellClick.bind(this);
    }

    init() {
        this.board.render();
        this.scoreboard.render();
        this.board.cells.forEach((cell) => cell.addEventListener('click', this.onCellClick));
        this.reset();
    }

    reset() {
        this.score = 0;
        this.misses = 0;
        this.scoreboard.update(this.score, this.misses);
        this.scoreboard.setStatus('Игра запущена');
        this.goblin.hide();
    }

    start() {
        this.stop();
        this.init();
        this.isRunning = true;
        this.spawnGoblin();
    }

    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }

        this.isRunning = false;
        this.goblin.hide();
    }

    destroy() {
        this.stop();
        this.board.cells.forEach((cell) => cell.removeEventListener('click', this.onCellClick));
    }

    spawnGoblin() {
        const nextIndex = this.board.getRandomCellIndex(this.goblin.position);
        const nextCell = this.board.getCell(nextIndex);

        this.goblin.show(nextCell, nextIndex);
        this.timerId = setTimeout(() => this.handleMiss(), this.visibleDuration);
    }

    handleHit() {
        this.score += 1;
        this.scoreboard.update(this.score, this.misses);
        this.goblin.hide();
        clearTimeout(this.timerId);
        this.timerId = null;

        if (this.isRunning) {
            this.spawnGoblin();
        }
    }

    handleMiss() {
        this.misses += 1;
        this.scoreboard.update(this.score, this.misses);
        this.goblin.hide();
        this.timerId = null;

        if (this.misses >= this.missLimit) {
            this.finish();
            return;
        }

        if (this.isRunning) {
            this.spawnGoblin();
        }
    }

    finish() {
        this.stop();
        this.scoreboard.setStatus(`Игра окончена. Итоговый счёт: ${this.score}`);
    }

    onCellClick(event) {
        if (!this.isRunning) {
            return;
        }

        const cell = event.currentTarget;
        const clickedIndex = Number(cell.dataset.index);

        if (this.goblin.visible && clickedIndex === this.goblin.position) {
            this.handleHit();
        }
    }
}
