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
        // Simulate loading time - increased to prevent overlap
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative min-h-screen bg-primary selection:bg-accent-blue/30 selection:text-white">
            <AnimatePresence mode="wait">
                {loading && <Preloader key="preloader" />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-grain" />
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
                </motion.div>
            )}
        </div>
    )
}

export default App
