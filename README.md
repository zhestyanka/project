# Образовательный Центр

Веб-сайт образовательного центра с административной панелью для управления курсами, отзывами и контактами.

## 🛠 Технологии

### Backend
- **Node.js** + **Express.js** - серверная часть
- **PostgreSQL** - база данных
- **Sequelize ORM** - работа с базой данных
- **CORS** - кросс-доменные запросы

### Frontend
- **React 18** - пользовательский интерфейс
- **Vite** - сборщик проекта
- **Material-UI** - компоненты интерфейса
- **React Router** - маршрутизация
- **Axios** - HTTP запросы

## 📦 Структура проекта

```
project/
├── app.js                 # Основной файл сервера
├── package.json           # Зависимости backend
├── ecosystem.config.js    # Конфигурация PM2
├── deploy.sh             # Скрипт автоматического деплоя
├── config/
│   └── config.json       # Настройки базы данных
├── models/               # Модели Sequelize
├── migrations/           # Миграции базы данных
├── seeders/             # Начальные данные
└── frontend/
    ├── package.json     # Зависимости frontend
    ├── vite.config.js   # Конфигурация Vite
    └── src/             # Исходный код React
```

## 🚀 Локальная разработка

### Установка зависимостей
```bash
# Backend
npm install

# Frontend
cd frontend
npm install
cd ..
```

### Настройка базы данных
1. Установите PostgreSQL
2. Создайте базу данных `test`
3. Выполните миграции:
```bash
npx sequelize-cli db:migrate
```

### Запуск в режиме разработки
```bash
# Backend (порт 3000)
npm start

# Frontend (порт 5173)
cd frontend
npm run dev
```

## 🌐 Развертывание на VPS

Подробная инструкция по развертыванию находится в файле `DEPLOY.md`

### Быстрый деплой
```bash
./deploy.sh
```

## 📖 API Документация

### Основные endpoints:
- `GET /api/company` - информация о компании
- `GET /api/programs` - список программ обучения
- `GET /api/reviews` - отзывы студентов
- `GET /api/contacts` - контактная информация
- `GET /api/advantages` - преимущества обучения
- `GET /api/audience` - целевая аудитория

Все endpoints поддерживают также POST запросы для создания новых записей.

## 🔧 Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
# База данных
DB_USERNAME=postgres
DB_PASSWORD=ваш_пароль
DB_NAME=test
DB_HOST=localhost
DB_DIALECT=postgres

# Сервер
PORT=3000
NODE_ENV=production
```

## 📝 Лицензия

Этот проект создан для образовательных целей. 