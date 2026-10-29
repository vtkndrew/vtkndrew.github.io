# Проекты vtkndrew

Каталог: https://vtkndrew.github.io/.

Список приложений задан вручную в `projects.json`; порядок записей — порядок карточек. Добавлять остальные репозитории автоматически не нужно. Иконки находятся в `public/icons/`. Каталог не регистрирует service worker и не меняет кеши или базы приложений.

## Разработка

Node.js 22.13+ (ветка 22), `npm ci`, `npm run dev`. Сборка: `npm run build`.

Проверки: `npm run check:lockfile`, `npm run format:check`, `npm run lint`, `npm run lint:architecture`, `npm test`, `npm run test:e2e`, `npm run build`. Локально Chromium использует установленный Chrome; WebKit устанавливается через `npx playwright install webkit`. В CI устанавливаются Chromium и WebKit.

FSD: `app` — запуск и глобальные стили; `pages/catalog` — компоновка; `entities/project` — список и контракт карточки. Стили компонентов — CSS Modules. ESLint проверяет границы импортов, hooks, ASCII-имена, фигурные скобки и пустые строки; Prettier: одинарные JS/TS-кавычки, двойные JSX, 100 колонок, trailing comma, arrowParens always.

Публикация автоматическая после push в `main`, источник Pages — GitHub Actions. Перед добавлением карточки убедитесь, что приложение опубликовано. Скилл `create-pwa-app` обновляет запись по ID без дубликатов.
