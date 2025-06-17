require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, Company, Program, Audience, Review, Contact, Advantage } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Образовательный центр API работает!');
});

// Company CRUD
app.get('/api/company', async (req, res) => {
  const company = await Company.findAll();
  res.json(company);
});
app.post('/api/company', async (req, res) => {
  const company = await Company.create(req.body);
  res.json(company);
});

// Program CRUD
app.get('/api/programs', async (req, res) => {
  const programs = await Program.findAll();
  res.json(programs);
});
app.post('/api/programs', async (req, res) => {
  const program = await Program.create(req.body);
  res.json(program);
});

// Audience CRUD
app.get('/api/audience', async (req, res) => {
  const audience = await Audience.findAll();
  res.json(audience);
});
app.post('/api/audience', async (req, res) => {
  const audience = await Audience.create(req.body);
  res.json(audience);
});

// Review CRUD
app.get('/api/reviews', async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
});
app.post('/api/reviews', async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
});

// Contact CRUD
app.get('/api/contacts', async (req, res) => {
  const contacts = await Contact.findAll();
  res.json(contacts);
});
app.post('/api/contacts', async (req, res) => {
  const contact = await Contact.create(req.body);
  res.json(contact);
});

// Advantage CRUD
app.get('/api/advantages', async (req, res) => {
  const advantages = await Advantage.findAll();
  res.json(advantages);
});
app.post('/api/advantages', async (req, res) => {
  const advantage = await Advantage.create(req.body);
  res.json(advantage);
});

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Подключение к базе данных успешно!');
    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Ошибка подключения к базе данных:', err);
  }); 