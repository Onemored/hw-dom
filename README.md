[![CI & Deploy to GitHub Pages](https://github.com/Onemored/hw-dom/actions/workflows/deploy.yml/badge.svg)](https://github.com/Onemored/hw-dom/actions/workflows/deploy.yml)

Демо: https://onemored.github.io/hw-dom/

# Домашнее задание к занятию «2. DOM»

Проект собран на Webpack и автоматически публикуется на GitHub Pages через GitHub Actions.

## Что реализовано

- игровое поле 4x4;
- случайное перемещение гоблина без повторения той же ячейки подряд;
- счётчик попаданий и промахов;
- кастомный курсор-молоток с анимацией удара;
- тесты на Jest;
- сборка и деплой через GitHub Actions.

## Стек

- Node.js
- Webpack
- Babel
- ESLint
- Jest
- GitHub Actions
- GitHub Pages

## Локальный запуск

```bash
corepack enable
yarn install
yarn start
```

Приложение будет доступно по адресу:

```bash
http://localhost:9000
```

## Проверка проекта

```bash
yarn lint
yarn test --runInBand
yarn build
```


```text
https://onemored.github.io/hw-dom/
```

## Полезные команды

```bash
yarn start          # локальная разработка
yarn build          # production-сборка
yarn lint           # проверка ESLint
yarn test           # запуск тестов
yarn test:coverage
```

## Структура

```text
src/
  css/
    style.css
  img/
    goblin.png
    hammer.svg
  js/
    app.js
    GameBoard.js
    GameController.js
    Goblin.js
    HammerCursor.js
    Scoreboard.js
    constants.js
  index.js
.github/workflows/
  deploy.yml
```
