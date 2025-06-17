import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'
import { School, History, EmojiEvents } from '@mui/icons-material'

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, mb: 6 }}>
        О нашем образовательном центре
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            EduCenter — современный образовательный центр, который предоставляет качественные образовательные услуги 
            с 2015 года. Мы специализируемся на подготовке к экзаменам, изучении иностранных языков, 
            программировании и повышении квалификации.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Наша миссия — сделать качественное образование доступным каждому. Мы используем современные методики 
            обучения и индивидуальный подход к каждому студенту.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80, mx: 'auto', mb: 2 }}>
              <School sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography variant="h6" gutterBottom>5000+</Typography>
            <Typography variant="body2" color="text.secondary">Довольных студентов</Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <History sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>9 лет опыта</Typography>
            <Typography variant="body2" color="text.secondary">
              Работаем с 2015 года и постоянно совершенствуем методики обучения
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <EmojiEvents sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>Высокие результаты</Typography>
            <Typography variant="body2" color="text.secondary">
              95% наших учеников успешно сдают экзамены и достигают поставленных целей
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <School sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>Лицензия</Typography>
            <Typography variant="body2" color="text.secondary">
              Официальная лицензия на образовательную деятельность
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutPage 