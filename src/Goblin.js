import goblinImg from './goblin.png';

export default class Goblin {
    constructor() {
        this.element = document.createElement('img');
        this.element.src = goblinImg;
        this.element.className = 'goblin';
        this.element.alt = 'Гоблин';
        this.position = null;
        this.visible = false;
    }

    show(cell, position) {
        cell.appendChild(this.element);
        this.position = position;
        this.visible = true;
    }

    hide() {
        if (this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
        }

        this.position = null;
        this.visible = false;
    }
}
