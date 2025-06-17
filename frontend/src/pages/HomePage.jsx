import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Avatar
} from '@mui/material'
import {
  School,
  Star,
  TrendingUp,
  Group,
  AccessTime,
  CheckCircle
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const features = [
    {
      icon: <School />,
      title: 'Опытные преподаватели',
      description: 'Команда профессионалов с многолетним опытом'
    },
    {
      icon: <Star />,
      title: 'Высокие результаты',
      description: '95% учеников достигают поставленных целей'
    },
    {
      icon: <Group />,
      title: 'Индивидуальный подход',
      description: 'Персональные программы обучения'
    },
    {
      icon: <AccessTime />,
      title: 'Гибкий график',
      description: 'Занятия в удобное для вас время'
    }
  ]

  const programs = [
    {
      title: 'Подготовка к ЕГЭ',
      description: 'Комплексная подготовка по всем предметам',
      price: 'от 3000 ₽/мес',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Программирование',
      description: 'Python, JavaScript, Java для начинающих',
      price: 'от 4000 ₽/мес',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Английский язык',
      description: 'От начального до продвинутого уровня',
      price: 'от 2500 ₽/мес',
      image: '/api/placeholder/300/200'
    }
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
              >
                Образование будущего
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.9, fontWeight: 300 }}
              >
                Современные методики обучения для достижения ваших целей
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/courses"
                  sx={{
                    backgroundColor: 'white',
                    color: '#667eea',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  Выбрать курс
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/contacts"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  Бесплатная консультация
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '400px'
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                    🎓
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Присоединяйтесь к 5000+ студентов
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 600, mb: 6 }}
        >
          Почему выбирают нас?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 60,
                    height: 60,
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Programs Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', fontWeight: 600, mb: 6 }}
          >
            Популярные курсы
          </Typography>
          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      backgroundColor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '3rem'
                    }}
                  >
                    📚
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {program.description}
                    </Typography>
                    <Chip
                      label={program.price}
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        component={Link}
                        to="/courses"
                        sx={{ borderRadius: 2 }}
                      >
                        Подробнее
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600, mb: 3 }}
            >
              Готовы начать обучение?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Запишитесь на бесплатную консультацию и получите персональный план обучения
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contacts"
              sx={{
                backgroundColor: 'white',
                color: '#1976d2',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              Записаться на консультацию
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage 