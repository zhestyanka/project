#!/bin/bash

echo "🚀 Начинаем деплой образовательного центра..."

# Переходим в директорию проекта
cd /home/$(whoami)/educational-center

# Останавливаем приложение
echo "⏹️  Останавливаем приложение..."
pm2 stop educational-center-api || echo "Приложение уже остановлено"

# Сохраняем текущие изменения (если есть)
echo "💾 Сохраняем локальные изменения..."
git stash

# Получаем последние изменения из GitHub
echo "📥 Получаем обновления из GitHub..."
git pull origin main

# Обновляем зависимости backend
echo "📦 Обновляем зависимости backend..."
npm install --production

# Переходим в папку frontend
cd frontend

# Обновляем зависимости frontend
echo "📦 Обновляем зависимости frontend..."
npm install

# Собираем frontend для production
echo "🔨 Собираем frontend..."
npm run build

# Возвращаемся в корень проекта
cd ..

# Запускаем миграции базы данных (если есть новые)
echo "🗃️  Применяем миграции базы данных..."
npx sequelize-cli db:migrate --env production

# Перезапускаем приложение
echo "🔄 Перезапускаем приложение..."
pm2 restart educational-center-api || pm2 start ecosystem.config.js

# Сохраняем конфигурацию PM2
pm2 save

echo "✅ Деплой завершен успешно!"
echo "🌐 Сайт доступен по адресу: http://$(curl -s ifconfig.me)" 