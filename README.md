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
npm ci
npm start
```

Приложение будет доступно по адресу:

```bash
http://localhost:9000
```

## Проверка проекта

```bash
npm run lint
npm test -- --runInBand
npm run build
```


```text
https://onemored.github.io/hw-dom/
```

## Полезные команды

```bash
npm start          # локальная разработка
npm run build      # production-сборка
npm run lint       # проверка ESLint
npm test           # запуск тестов
npm run test:coverage
```

## Структура

```text
src/
  app.js
  GameBoard.js
  GameController.js
  Goblin.js
  HammerCursor.js
  Scoreboard.js
  constants.js
  style.css
.github/workflows/
  deploy.yml
```