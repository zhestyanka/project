# 🚀 ПОЛНАЯ ИНСТРУКЦИЯ - ЧАСТЬ 2: РАЗВЕРТЫВАНИЕ

## 🖥 Получение и настройка VPS {#vps}

### Что такое VPS?
**VPS (Virtual Private Server)** - это виртуальный сервер в интернете, на котором мы будем размещать наш сайт.

**Аналогия:** Это как арендовать квартиру в интернете, где будет жить ваш сайт.

### Выбор провайдера VPS

**Популярные и надежные:**
- **DigitalOcean** - $5/месяц (рекомендуется для начинающих)
- **Vultr** - от $3.5/месяц
- **Hetzner** - от 3€/месяц (очень выгодно)
- **HostKey** - российский, от 200₽/месяц

### Минимальные требования:
- **RAM:** 2GB (обязательно!)
- **CPU:** 1 ядро
- **Диск:** 25GB SSD
- **ОС:** Ubuntu 22.04 LTS

**Почему именно эти требования:**
- **2GB RAM** - Node.js + PostgreSQL + Nginx требуют памяти
- **Ubuntu 22.04** - стабильная, хорошо поддерживается
- **SSD диск** - быстрая работа базы данных

---

## 🔧 Пошаговое развертывание {#развертывание}

### Этап 1: Подключение к VPS

**Что делаем:** Подключаемся к серверу по SSH
**Зачем:** Чтобы выполнять команды на удаленном сервере

**Для Windows (PowerShell):**
```bash
ssh root@ВАШ_IP_АДРЕС
```

**Что происходит:**
1. Устанавливается зашифрованное соединение с сервером
2. Вы получаете доступ к командной строке Ubuntu
3. Теперь все команды выполняются на сервере, а не на вашем компьютере

### Этап 2: Обновление системы

**Команды:**
```bash
apt update && apt upgrade -y
```

**Что происходит:**
- `apt update` - обновляет список доступных пакетов
- `apt upgrade -y` - устанавливает все обновления безопасности
- `-y` - автоматически отвечает "да" на все вопросы

**Зачем это нужно:** Закрывает уязвимости безопасности и обновляет системные библиотеки

### Этап 3: Установка Node.js

**Команды:**
```bash
# Добавляем официальный репозиторий NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Устанавливаем Node.js
apt install -y nodejs
```

**Что происходит:**
1. **curl** скачивает скрипт установки Node.js 18.x
2. Скрипт добавляет репозиторий в систему
3. **apt install** устанавливает Node.js и npm

**Проверка установки:**
```bash
node --version  # Должно показать v18.x.x
npm --version   # Должно показать версию npm
```

**Почему Node.js 18.x:**
- Это LTS (Long Term Support) версия
- Стабильная и поддерживаемая
- Совместима со всеми современными пакетами

### Этап 4: Установка PostgreSQL

**Команды:**
```bash
# Установка PostgreSQL
apt install -y postgresql postgresql-contrib

# Запуск и включение автозапуска
systemctl start postgresql
systemctl enable postgresql
```

**Что происходит:**
1. **postgresql** - основная СУБД
2. **postgresql-contrib** - дополнительные модули и утилиты
3. **systemctl start** - запускает сервис сейчас
4. **systemctl enable** - запускает при каждой загрузке сервера

**Настройка базы данных:**
```bash
# Переключаемся на пользователя postgres
sudo -u postgres psql

# В консоли PostgreSQL:
CREATE USER eduuser WITH PASSWORD 'strong_password_123';
CREATE DATABASE educational_center OWNER eduuser;
GRANT ALL PRIVILEGES ON DATABASE educational_center TO eduuser;
\q
```

**Объяснение SQL команд:**
- `CREATE USER` - создает пользователя для вашего приложения
- `CREATE DATABASE` - создает базу данных для проекта
- `GRANT ALL PRIVILEGES` - дает права на управление базой
- `\q` - выход из консоли PostgreSQL

### Этап 5: Установка PM2

**Команды:**
```bash
npm install -g pm2
```

**Что происходит:**
- `-g` означает глобальная установка (доступно из любой папки)
- PM2 устанавливается как системная утилита
- Появляется команда `pm2` в терминале

**Зачем PM2:**
- Запускает приложение в фоне (не закрывается при выходе из SSH)
- Автоматически перезапускает при сбоях
- Ведет логи всех событий
- Показывает статистику использования ресурсов

### Этап 6: Установка Nginx

**Команды:**
```bash
apt install -y nginx
systemctl start nginx
systemctl enable nginx
```

**Что происходит:**
1. Устанавливается веб-сервер Nginx
2. Запускается сервис
3. Настраивается автозапуск

**Зачем Nginx:**
- **Отдача статики:** HTML, CSS, JS файлы отдаются очень быстро
- **Reverse Proxy:** API запросы перенаправляются на Node.js
- **Кэширование:** Ускоряет загрузку повторных запросов
- **Сжатие:** Уменьшает размер передаваемых файлов

### Этап 7: Клонирование проекта

**Команды:**
```bash
cd ~
git clone https://github.com/zhestyanka/project.git educational-center
cd educational-center
```

**Что происходит:**
1. `cd ~` - переходим в домашнюю папку пользователя
2. `git clone` - скачивает весь код с GitHub
3. Создается папка `educational-center` с вашим кодом
4. `cd educational-center` - переходим в папку проекта

### Этап 8: Настройка переменных окружения

**Команды:**
```bash
nano .env
```

**Содержимое файла:**
```env
DB_USERNAME=eduuser
DB_PASSWORD=strong_password_123
DB_NAME=educational_center
DB_HOST=localhost
DB_DIALECT=postgres
PORT=3000
NODE_ENV=production
```

**Что это значит:**
- **DB_*** - параметры подключения к базе данных
- **PORT=3000** - порт на котором запустится API сервер
- **NODE_ENV=production** - режим работы (оптимизированный для продакшена)

**Сохранение:** `Ctrl+X`, затем `Y`, затем `Enter`

### Этап 9: Установка зависимостей

**Backend:**
```bash
npm install --production
```

**Frontend:**
```bash
cd frontend
npm install
npm run build
cd ..
```

**Что происходит в Backend:**
- Скачиваются все пакеты из package.json
- `--production` исключает dev-зависимости (экономит место)

**Что происходит в Frontend:**
1. `npm install` - скачивает React, Vite и другие пакеты
2. `npm run build` - компилирует React в статические файлы (HTML, CSS, JS)
3. Результат сохраняется в папку `frontend/dist/`

**Почему нужна сборка Frontend:**
- React код нужно "скомпилировать" в обычный JavaScript
- Файлы минимизируются и оптимизируются
- Получается готовый к работе сайт

### Этап 10: Создание структуры БД

**Команды:**
```bash
mkdir logs  # Создаем папку для логов
npx sequelize-cli db:migrate  # Создаем таблицы в БД
```

**Что происходит:**
1. **mkdir logs** - создает папку где PM2 будет писать логи
2. **db:migrate** - запускает миграции из папки `migrations/`
3. В PostgreSQL создаются таблицы: companies, programs, reviews и т.д.

---

## 🌐 Настройка веб-сервера Nginx {#nginx}

### Создание конфигурации

**Команда:**
```bash
nano /etc/nginx/sites-available/educational-center
```

**Содержимое конфигурации:**
```nginx
server {
    listen 80;
    server_name ВАШ_IP_АДРЕС;

    # Статические файлы React
    location / {
        root /root/educational-center/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # API запросы к Node.js
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

**Объяснение каждой директивы:**

1. **listen 80** - слушать HTTP порт 80
2. **server_name** - реагировать на запросы к этому IP
3. **location /** - все запросы к корню сайта
   - **root** - папка с файлами React
   - **try_files** - сначала ищет файл, если нет - отдает index.html (для React Router)
4. **location /api/** - все запросы к API
   - **proxy_pass** - перенаправить на Node.js сервер
   - **proxy_set_header** - передать информацию о клиенте

### Активация конфигурации

**Команды:**
```bash
ln -s /etc/nginx/sites-available/educational-center /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

**Что происходит:**
1. **ln -s** - создает символическую ссылку (активирует конфиг)
2. **rm default** - удаляет стандартную страницу Nginx
3. **nginx -t** - проверяет синтаксис конфигурации
4. **systemctl reload** - применяет новую конфигурацию 