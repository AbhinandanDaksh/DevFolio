import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 60,
    });
  }, []);

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-muted)] antialiased transition-colors duration-300">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App
