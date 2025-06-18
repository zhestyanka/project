#!/bin/bash

echo "🚀 Настройка Production среды для образовательного центра..."

# 1. Создание .env файла
echo "📝 Создание .env файла..."
cat > .env << EOL
# Production Environment Variables
NODE_ENV=production
PORT=3000

# Database Configuration
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=educational_center_db
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DIALECT=postgres
EOL

# 2. Создание базы данных
echo "🗄️ Создание базы данных..."
sudo -u postgres psql -c "CREATE DATABASE educational_center_db;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE educational_center_db TO postgres;"

# 3. Применение миграций
echo "📋 Применение миграций..."
npx sequelize-cli db:migrate --env production

# 4. Заполнение тестовыми данными (опционально)
echo "🌱 Заполнение тестовыми данными..."
npx sequelize-cli db:seed:all --env production

# 5. Перезапуск приложения через PM2
echo "🔄 Перезапуск приложения..."
pm2 restart educational-center-api

# 6. Проверка статуса
echo "✅ Проверка статуса приложения..."
pm2 status
pm2 logs educational-center-api --lines 10

echo "🎉 Настройка завершена!"
echo "🌐 Приложение доступно на http://localhost:3000"
echo "📊 Проверьте статус: pm2 status"
echo "📋 Посмотрите логи: pm2 logs educational-center-api" 