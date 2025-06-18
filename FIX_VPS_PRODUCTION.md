# 🔧 Исправление проблем на VPS сервере

## 🚨 Диагностика проблемы

Судя по логам, у нас есть несколько проблем:
1. **Отсутствует файл .env** - приложение не знает настройки БД
2. **База данных "test" vs "educational_center_db"** - несоответствие имен
3. **Ошибки аутентификации PostgreSQL** - конфигурация подключения

## 🛠️ Пошаговое решение

### Шаг 1: Остановить приложение
```bash
pm2 stop educational-center-api
```

### Шаг 2: Перейти в папку проекта
```bash
cd /root/project/project
```

### Шаг 3: Создать файл .env
```bash
cat > .env << 'EOL'
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
```

### Шаг 4: Создать правильную базу данных
```bash
# Удалить старую базу (если существует)
sudo -u postgres psql -c "DROP DATABASE IF EXISTS test;"

# Создать новую базу с правильным именем
sudo -u postgres psql -c "CREATE DATABASE educational_center_db;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE educational_center_db TO postgres;"

# Проверить создание
sudo -u postgres psql -l | grep educational
```

### Шаг 5: Применить миграции
```bash
# Проверить что Sequelize CLI установлен
npm list sequelize-cli

# Если не установлен:
# npm install -g sequelize-cli

# Применить миграции
npx sequelize-cli db:migrate --env production
```

### Шаг 6: Проверить подключение к БД
```bash
# Попробовать подключиться к новой базе
sudo -u postgres psql -d educational_center_db -c "\dt"
```

### Шаг 7: Перезапустить приложение
```bash
pm2 restart educational-center-api
```

### Шаг 8: Проверить статус и логи
```bash
# Статус приложения
pm2 status

# Логи в реальном времени
pm2 logs educational-center-api --lines 20

# Проверить подключение
curl http://localhost:3000
```

## 🔍 Автоматический скрипт

Альтернативно, используйте автоматический скрипт:

```bash
# Сделать скрипт исполняемым
chmod +x setup-production.sh

# Запустить скрипт
./setup-production.sh
```

## 🐛 Устранение типичных ошибок

### Ошибка: "password authentication failed"
```bash
# Сбросить пароль PostgreSQL
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
```

### Ошибка: "database does not exist"
```bash
# Убедиться что база существует
sudo -u postgres createdb educational_center_db
```

### Ошибка: "sequelize command not found"
```bash
# Установить Sequelize CLI глобально
npm install -g sequelize-cli

# Или использовать через npx
npx sequelize-cli --version
```

### Ошибка: PM2 приложение "errored"
```bash
# Перезапустить PM2 с обновленной конфигурацией
pm2 delete educational-center-api
pm2 start ecosystem.config.js
```

## ✅ Проверка успешного развертывания

После выполнения всех шагов должно быть:

1. **PM2 статус**: `online` ✅
2. **База данных**: `educational_center_db` существует ✅
3. **Таблицы**: созданы через миграции ✅
4. **Порт 3000**: отвечает на запросы ✅

```bash
# Итоговая проверка
pm2 status
curl http://localhost:3000
sudo -u postgres psql -d educational_center_db -c "\dt"
```

## 🚀 Следующие шаги

После исправления проблем с backend:
1. Настроить Nginx для frontend
2. Настроить SSL сертификат
3. Настроить автоматическое развертывание через GitHub Actions

---

**💡 Совет**: Всегда проверяйте логи PM2 после каждого изменения: `pm2 logs educational-center-api` 