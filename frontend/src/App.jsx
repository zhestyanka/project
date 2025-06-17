import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactsPage from './pages/ContactsPage'
import BlogPage from './pages/BlogPage'
import EnrollPage from './pages/EnrollPage'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/enroll/:courseId" element={<EnrollPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App 