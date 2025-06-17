import React from 'react'
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box, Button } from '@mui/material'
import { AccessTime, Person } from '@mui/icons-material'

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Как эффективно подготовиться к ЕГЭ по математике',
      excerpt: 'Рассказываем о проверенных методиках подготовки к экзамену по математике профильного уровня',
      author: 'Анна Иванова',
      date: '15 января 2024',
      category: 'ЕГЭ',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'Топ-5 языков программирования для изучения в 2024 году',
      excerpt: 'Обзор самых востребованных языков программирования и советы по выбору первого языка',
      author: 'Михаил Петров',
      date: '10 января 2024',
      category: 'Программирование',
      readTime: '7 мин'
    },
    {
      id: 3,
      title: 'Методики изучения английского языка: что действительно работает',
      excerpt: 'Разбираем эффективные подходы к изучению английского языка для разных уровней подготовки',
      author: 'Елена Сидорова',
      date: '8 января 2024',
      category: 'Языки',
      readTime: '6 мин'
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, mb: 2 }}>
        Блог
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
        Полезные статьи об образовании и саморазвитии
      </Typography>

      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} md={6} lg={4} key={article.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
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
                📖
              </CardMedia>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip 
                    label={article.category} 
                    color="primary" 
                    variant="outlined" 
                    size="small"
                  />
                </Box>
                
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  {article.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {article.excerpt}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Person sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {article.author}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {article.readTime}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                  {article.date}
                </Typography>
                
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ mt: 2 }}
                >
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CTA для подписки */}
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
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Не пропустите новые статьи
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Подпишитесь на нашу рассылку и получайте полезные материалы первыми
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            backgroundColor: 'white', 
            color: 'primary.main',
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          Подписаться
        </Button>
      </Box>
    </Container>
  )
}

export default BlogPage 