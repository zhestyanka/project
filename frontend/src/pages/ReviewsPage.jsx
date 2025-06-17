import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Avatar, Rating, Box } from '@mui/material'

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      author: 'Анна Петрова',
      rating: 5,
      text: 'Отличный образовательный центр! Подготовка к ЕГЭ прошла на высшем уровне. Преподаватели очень профессиональные и всегда готовы помочь. Результат - 92 балла по математике!',
      course: 'Подготовка к ЕГЭ',
      avatar: 'АП'
    },
    {
      id: 2,
      author: 'Михаил Иванов',
      rating: 5,
      text: 'Прошел курс Python для начинающих. Очень понравился подход преподавателей - все объясняют доступно и интересно. Теперь работаю junior разработчиком!',
      course: 'Python для начинающих',
      avatar: 'МИ'
    },
    {
      id: 3,
      author: 'Елена Сидорова',
      rating: 4,
      text: 'Изучала английский язык в EduCenter. Отличная программа и гибкий график занятий. За год улучшила свой уровень с B1 до B2. Рекомендую!',
      course: 'Английский язык',
      avatar: 'ЕС'
    },
    {
      id: 4,
      author: 'Дмитрий Козлов',
      rating: 5,
      text: 'Курс веб-разработки превзошел все ожидания. Современная программа, актуальные технологии, практические проекты. Преподаватели - настоящие профессионалы своего дела.',
      course: 'JavaScript и веб-разработка',
      avatar: 'ДК'
    },
    {
      id: 5,
      author: 'Ольга Васильева',
      rating: 5,
      text: 'Очень благодарна центру за качественную подготовку дочери к ОГЭ. Индивидуальный подход, постоянная обратная связь с родителями. Результат отличный!',
      course: 'Подготовка к ОГЭ',
      avatar: 'ОВ'
    },
    {
      id: 6,
      author: 'Артем Новиков',
      rating: 4,
      text: 'Проходил курс по подготовке к поступлению в IT-университет. Отличная база знаний, помогли подтянуть математику и информатику. Поступил на бюджет!',
      course: 'IT-подготовка',
      avatar: 'АН'
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, mb: 2 }}>
        Отзывы наших студентов
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
        Более 5000 довольных учеников уже достигли своих целей вместе с нами
      </Typography>

      <Grid container spacing={4}>
        {reviews.map((review) => (
          <Grid item xs={12} md={6} key={review.id}>
            <Card 
              sx={{ 
                height: '100%',
                p: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      width: 56, 
                      height: 56, 
                      mr: 2,
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}
                  >
                    {review.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {review.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.course}
                    </Typography>
                  </Box>
                </Box>

                <Rating 
                  value={review.rating} 
                  readOnly 
                  sx={{ mb: 2 }}
                />

                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    '&::before': {
                      content: '"',
                      fontSize: '2rem',
                      color: 'primary.main',
                      fontWeight: 'bold'
                    },
                    '&::after': {
                      content: '"',
                      fontSize: '2rem',
                      color: 'primary.main',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  {review.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Статистика */}
      <Box 
        sx={{ 
          mt: 8, 
          p: 4, 
          backgroundColor: 'primary.main', 
          color: 'white', 
          borderRadius: 3,
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          4.9/5
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Средняя оценка наших курсов
        </Typography>
        <Rating value={4.9} readOnly sx={{ '& .MuiRating-icon': { color: 'white' } }} />
        <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
          Основано на 1250+ отзывах студентов
        </Typography>
      </Box>
    </Container>
  )
}

export default ReviewsPage 