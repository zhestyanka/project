import React, { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  IconButton,
  Alert
} from '@mui/material'
import {
  Phone,
  Email,
  LocationOn,
  Telegram,
  WhatsApp,
  Schedule
} from '@mui/icons-material'

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет отправка данных на backend
    console.log('Form submitted:', formData)
    setShowSuccess(true)
    setFormData({ name: '', phone: '', email: '', course: '', message: '' })
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, mb: 6 }}>
        Контакты
      </Typography>

      <Grid container spacing={6}>
        {/* Контактная информация */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Свяжитесь с нами
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Phone sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Телефон</Typography>
                <Typography variant="body1">+7 (999) 123-45-67</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Email sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography variant="body1">info@educenter.ru</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Адрес</Typography>
                <Typography variant="body1">г. Москва, ул. Образования, 123</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Schedule sx={{ mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Режим работы</Typography>
                <Typography variant="body1">Пн-Пт: 9:00 - 21:00</Typography>
                <Typography variant="body1">Сб-Вс: 10:00 - 18:00</Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Мессенджеры
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                sx={{ 
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': { backgroundColor: 'primary.dark' }
                }}
              >
                <Telegram />
              </IconButton>
              <IconButton 
                sx={{ 
                  backgroundColor: '#25D366',
                  color: 'white',
                  '&:hover': { backgroundColor: '#1ebe57' }
                }}
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Форма обратной связи */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Записаться на бесплатную консультацию
            </Typography>

            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Спасибо за заявку! Мы свяжемся с вами в ближайшее время.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ваше имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Телефон"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Интересующий курс"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Сообщение"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о ваших целях и пожеланиях..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontSize: '1.1rem' }}
                  >
                    Отправить заявку
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>

      {/* Дополнительная информация */}
      <Box sx={{ mt: 8, p: 4, backgroundColor: '#f8f9fa', borderRadius: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              🎓 Бесплатная консультация
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Получите персональный план обучения и ответы на все вопросы
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              📍 Удобное расположение
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Рядом с метро, парковка для автомобилей
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              ⏰ Гибкий график
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Занятия в удобное для вас время, включая выходные
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ContactsPage 