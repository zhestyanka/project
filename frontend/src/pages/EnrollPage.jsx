import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Box,
  Alert,
  Chip,
  Paper
} from '@mui/material'
import { School, Person, Email, Phone } from '@mui/icons-material'

const EnrollPage = () => {
  const { courseId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const courseName = location.state?.courseName || 'Выбранный курс'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Очистка ошибки при вводе
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен для заполнения'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Здесь будет отправка данных на backend
      console.log('Enrollment data:', {
        courseId,
        courseName,
        ...formData
      })
      
      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Через 3 секунды вернуться к курсам
      setTimeout(() => {
        navigate('/courses')
      }, 3000)
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 4, 
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          borderRadius: 3
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <School sx={{ mr: 2, fontSize: 40 }} />
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            Запись на курс
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          {courseName}
        </Typography>
        <Chip 
          label={`ID курса: ${courseId}`} 
          sx={{ 
            mt: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white'
          }} 
        />
      </Paper>

      {showSuccess ? (
        <Alert 
          severity="success" 
          sx={{ 
            mb: 4, 
            fontSize: '1.1rem',
            '& .MuiAlert-message': { width: '100%', textAlign: 'center' }
          }}
        >
          <Typography variant="h6" gutterBottom>
            🎉 Спасибо за заявку!
          </Typography>
          <Typography>
            Мы получили вашу заявку на курс "{courseName}". 
            Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
            Вы будете перенаправлены на страницу курсов через несколько секунд...
          </Typography>
        </Alert>
      ) : (
        <Card sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Оставьте ваши контактные данные
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ваше имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputProps={{
                      startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />
                    }}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
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
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />
                    }}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Телефон"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    placeholder="+7 (999) 123-45-67"
                    InputProps={{
                      startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} />
                    }}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Дополнительная информация"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о ваших целях, опыте или задайте вопросы..."
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ 
                        flex: 1,
                        py: 1.5, 
                        fontSize: '1.1rem',
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)'
                      }}
                    >
                      Записаться на курс
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/courses')}
                      sx={{ 
                        flex: { xs: 1, sm: 'auto' },
                        py: 1.5,
                        borderRadius: 2
                      }}
                    >
                      Назад к курсам
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Дополнительная информация */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa', borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Что дальше?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box component="span" sx={{ mr: 1, fontSize: '1.2rem' }}>📞</Box>
              Звонок менеджера в течение часа
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box component="span" sx={{ mr: 1, fontSize: '1.2rem' }}>📋</Box>
              Консультация и выбор программы
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box component="span" sx={{ mr: 1, fontSize: '1.2rem' }}>🎓</Box>
              Начало обучения в удобное время
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default EnrollPage 