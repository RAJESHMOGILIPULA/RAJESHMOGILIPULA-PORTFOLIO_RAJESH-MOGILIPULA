import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Preloader from './components/ui/Preloader'
import CustomCursor from './components/ui/CustomCursor'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative min-h-screen bg-primary selection:bg-accent-blue/30 selection:text-white">
            <AnimatePresence>
                {loading && <Preloader key="preloader" />}
            </AnimatePresence>

            <div className="bg-grain" />
            <CustomCursor />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default App
