import hammerIcon from './hammer.svg';

export default class HammerCursor {
    constructor(rootId = 'game-board') {
        this.rootId = rootId;
        this.root = null;
        this.element = null;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    getRoot() {
        if (!this.root) {
            this.root = document.getElementById(this.rootId);
        }

        return this.root;
    }

    createElement() {
        if (this.element) {
            return this.element;
        }

        const cursor = document.createElement('div');
        cursor.className = 'hammer-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        cursor.style.backgroundImage = `url(${hammerIcon})`;
        document.body.append(cursor);
        this.element = cursor;

        return cursor;
    }

    init() {
        const root = this.getRoot();

        if (!root) {
            return;
        }

        this.createElement();
        root.classList.add('game-board--hammer');
        root.addEventListener('mouseenter', this.onMouseEnter);
        root.addEventListener('mousemove', this.onMouseMove);
        root.addEventListener('mouseleave', this.onMouseLeave);
        root.addEventListener('mousedown', this.onMouseDown);
        root.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseEnter(event) {
        if (!this.element) {
            return;
        }

        this.element.classList.add('hammer-cursor--visible');
        this.onMouseMove(event);
    }

    onMouseMove(event) {
        if (!this.element) {
            return;
        }

        this.element.style.left = `${event.clientX}px`;
        this.element.style.top = `${event.clientY}px`;
    }

    onMouseLeave() {
        if (!this.element) {
            return;
        }

        this.element.classList.remove('hammer-cursor--visible', 'hammer-cursor--hit');
    }

    onMouseDown() {
        if (!this.element) {
            return;
        }

        this.element.classList.add('hammer-cursor--hit');
    }

    onMouseUp() {
        if (!this.element) {
            return;
        }

        this.element.classList.remove('hammer-cursor--hit');
    }

    destroy() {
        const root = this.getRoot();

        if (root) {
            root.classList.remove('game-board--hammer');
            root.removeEventListener('mouseenter', this.onMouseEnter);
            root.removeEventListener('mousemove', this.onMouseMove);
            root.removeEventListener('mouseleave', this.onMouseLeave);
            root.removeEventListener('mousedown', this.onMouseDown);
            root.removeEventListener('mouseup', this.onMouseUp);
        }

        this.element?.remove();
        this.element = null;
        this.root = null;
    }
}
