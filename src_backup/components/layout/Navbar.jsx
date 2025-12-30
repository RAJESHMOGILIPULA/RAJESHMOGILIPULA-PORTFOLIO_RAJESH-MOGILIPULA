import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { name: 'ABOUT', href: '#about' },
        { name: 'WORK', href: '#projects' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'CONTACT', href: '#contact' }
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8">
            <div className={`container-custom flex items-center justify-between transition-all duration-700 ${scrolled ? 'py-4 px-8 glass-panel rounded-full' : 'py-0'}`}>
                <a href="#" className="text-2xl font-black tracking-tighter group">
                    <span className="text-white">R</span>
                    <span className="text-accent-blue group-hover:text-accent-purple transition-colors duration-500">M.</span>
                </a>

                {/* Desktop Links - Minimalist Pill style */}
                <div className="hidden md:flex items-center gap-12">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-mono tracking-widest text-slate-400 hover:text-white transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-blue transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <a href="#contact" className="px-6 py-3 bg-white text-black text-xs font-bold rounded-full hover:bg-accent-blue hover:text-white transition-all shadow-xl shadow-white/5">
                        GET IN TOUCH
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-3xl text-white"
                >
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Fullscreen Mobile Menu V2 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at 100% 0%)' }}
                        animate={{ clipPath: 'circle(150% at 100% 0%)' }}
                        exit={{ clipPath: 'circle(0% at 100% 0%)' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-primary z-[200] flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-12 right-12 text-4xl text-white"
                        >
                            <HiX />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-700 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="absolute bottom-12 flex gap-8 text-slate-500 font-mono text-sm tracking-widest">
                            <span>GITHUB</span>
                            <span>LINKEDIN</span>
                            <span>EMAIL</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
