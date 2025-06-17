import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider
} from '@mui/material'
import {
  Phone,
  Email,
  LocationOn,
  Telegram,
  WhatsApp
} from '@mui/icons-material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
        color: 'white',
        mt: 'auto',
        py: 6
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              EduCenter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Современный образовательный центр с индивидуальным подходом к каждому ученику.
              Качественное образование для достижения ваших целей.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+7 (999) 123-45-67</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">info@educenter.ru</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">г. Москва, ул. Образования, 123</Typography>
            </Box>
            <Box>
              <IconButton 
                color="inherit" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  mr: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                }}
              >
                <Telegram />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                }}
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Навигация
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                О нас
              </Link>
              <Link href="/courses" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                Курсы
              </Link>
              <Link href="/reviews" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                Отзывы
              </Link>
              <Link href="/contacts" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                Контакты
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 EduCenter. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 