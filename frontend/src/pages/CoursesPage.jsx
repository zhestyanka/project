import React, { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { programsApi } from '../services/api'

const CoursesPage = () => {
  const [programs, setPrograms] = useState([])
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [formatFilter, setFormatFilter] = useState('')
  const navigate = useNavigate()

  // Демо данные для отображения
  const demoPrograms = [
    {
      id: 1,
      name: 'Подготовка к ЕГЭ по математике',
      description: 'Комплексная подготовка к единому государственному экзамену по математике профильного уровня',
      format: 'Очно',
      duration: '9 месяцев',
      price: '3500 ₽/мес',
      category: 'ЕГЭ/ОГЭ'
    },
    {
      id: 2,
      name: 'Python для начинающих',
      description: 'Изучение основ программирования на языке Python с нуля до создания собственных проектов',
      format: 'Онлайн',
      duration: '6 месяцев',
      price: '4000 ₽/мес',
      category: 'Программирование'
    },
    {
      id: 3,
      name: 'Английский язык (B1-B2)',
      description: 'Изучение английского языка от среднего до выше среднего уровня',
      format: 'Гибрид',
      duration: '12 месяцев',
      price: '2800 ₽/мес',
      category: 'Иностранные языки'
    },
    {
      id: 4,
      name: 'JavaScript и веб-разработка',
      description: 'Полный курс по современной веб-разработке с использованием JavaScript, React',
      format: 'Онлайн',
      duration: '8 месяцев',
      price: '4500 ₽/мес',
      category: 'Программирование'
    },
    {
      id: 5,
      name: 'Подготовка к ЕГЭ по физике',
      description: 'Изучение всех разделов физики для успешной сдачи ЕГЭ с высоким баллом',
      format: 'Очно',
      duration: '9 месяцев',
      price: '3200 ₽/мес',
      category: 'ЕГЭ/ОГЭ'
    },
    {
      id: 6,
      name: 'Немецкий язык (A1-A2)',
      description: 'Изучение немецкого языка с нуля до базового уровня A2',
      format: 'Гибрид',
      duration: '10 месяцев',
      price: '2500 ₽/мес',
      category: 'Иностранные языки'
    },
    {
      id: 7,
      name: 'Java разработка',
      description: 'Изучение Java от основ до создания enterprise приложений',
      format: 'Онлайн',
      duration: '12 месяцев',
      price: '5000 ₽/мес',
      category: 'Программирование'
    },
    {
      id: 8,
      name: 'Китайский язык HSK 1-2',
      description: 'Изучение китайского языка для сдачи международного экзамена HSK',
      format: 'Очно',
      duration: '14 месяцев',
      price: '3000 ₽/мес',
      category: 'Иностранные языки'
    },
    {
      id: 9,
      name: 'Подготовка к ОГЭ по русскому языку',
      description: 'Комплексная подготовка к основному государственному экзамену по русскому языку',
      format: 'Очно',
      duration: '8 месяцев',
      price: '2800 ₽/мес',
      category: 'ЕГЭ/ОГЭ'
    },
    {
      id: 10,
      name: 'React и современный фронтенд',
      description: 'Углубленное изучение React, Redux, TypeScript для фронтенд разработки',
      format: 'Онлайн',
      duration: '6 месяцев',
      price: '4800 ₽/мес',
      category: 'Программирование'
    },
    {
      id: 11,
      name: 'Финансовая грамотность',
      description: 'Основы инвестирования, планирования бюджета и финансовых инструментов',
      format: 'Гибрид',
      duration: '3 месяца',
      price: '1800 ₽/мес',
      category: 'Бизнес и финансы'
    },
    {
      id: 12,
      name: 'Французский язык (A1-B1)',
      description: 'Изучение французского языка от начального до среднего уровня',
      format: 'Очно',
      duration: '15 месяцев',
      price: '2700 ₽/мес',
      category: 'Иностранные языки'
    },
    {
      id: 13,
      name: 'Data Science с Python',
      description: 'Анализ данных, машинное обучение и работа с большими данными',
      format: 'Онлайн',
      duration: '10 месяцев',
      price: '5500 ₽/мес',
      category: 'Программирование'
    },
    {
      id: 14,
      name: 'SMM и интернет-маркетинг',
      description: 'Продвижение в социальных сетях, контент-маркетинг и таргетированная реклама',
      format: 'Гибрид',
      duration: '4 месяца',
      price: '2200 ₽/мес',
      category: 'Бизнес и финансы'
    },
    {
      id: 15,
      name: 'Подготовка к ЕГЭ по химии',
      description: 'Изучение органической и неорганической химии для успешной сдачи ЕГЭ',
      format: 'Очно',
      duration: '9 месяцев',
      price: '3400 ₽/мес',
      category: 'ЕГЭ/ОГЭ'
    },
    {
      id: 16,
      name: 'Испанский язык (A1-A2)',
      description: 'Изучение испанского языка с акцентом на разговорную практику',
      format: 'Гибрид',
      duration: '11 месяцев',
      price: '2600 ₽/мес',
      category: 'Иностранные языки'
    },
    {
      id: 17,
      name: 'iOS разработка на Swift',
      description: 'Создание мобильных приложений для iPhone и iPad на языке Swift',
      format: 'Онлайн',
      duration: '9 месяцев',
      price: '4700 ₽/мес',
      category: 'Программирование'
    },
    {
      id: 18,
      name: 'Основы предпринимательства',
      description: 'Создание и развитие собственного бизнеса, юридические аспекты',
      format: 'Очно',
      duration: '5 месяцев',
      price: '2000 ₽/мес',
      category: 'Бизнес и финансы'
    }
  ]

  useEffect(() => {
    setPrograms(demoPrograms)
    setFilteredPrograms(demoPrograms)
  }, [])

  useEffect(() => {
    let filtered = programs.filter(program =>
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (formatFilter) {
      filtered = filtered.filter(program => program.format === formatFilter)
    }

    setFilteredPrograms(filtered)
  }, [searchTerm, formatFilter, programs])

  const handleEnrollClick = (courseId, courseName) => {
    navigate(`/enroll/${courseId}`, { state: { courseName } })
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, mb: 6 }}>
        Наши курсы
      </Typography>

      {/* Фильтры */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Поиск курсов"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Формат обучения</InputLabel>
              <Select
                value={formatFilter}
                label="Формат обучения"
                onChange={(e) => setFormatFilter(e.target.value)}
              >
                <MenuItem value="">Все форматы</MenuItem>
                <MenuItem value="Очно">Очно</MenuItem>
                <MenuItem value="Онлайн">Онлайн</MenuItem>
                <MenuItem value="Гибрид">Гибрид</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Каталог курсов */}
      <Grid container spacing={4}>
        {filteredPrograms.map((program) => (
          <Grid item xs={12} md={6} lg={4} key={program.id}>
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
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip 
                    label={program.category} 
                    color="primary" 
                    variant="outlined" 
                    size="small"
                    sx={{ mb: 1 }}
                  />
                </Box>
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  {program.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {program.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label={program.format} size="small" />
                  <Chip label={program.duration} size="small" />
                </Box>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                  {program.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => handleEnrollClick(program.id, program.name)}
                >
                  Записаться на курс
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredPrograms.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Курсы не найдены. Попробуйте изменить параметры поиска.
          </Typography>
        </Box>
      )}
    </Container>
  )
}

export default CoursesPage 