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
        { name: 'SKILLS', href: '#skills' },
        { name: 'WORK', href: '#projects' },
        { name: 'EXPERIENCE', href: '#experience' },
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
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(34, 211, 238, 0.08)",
                                boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
                                borderColor: "rgba(34, 211, 238, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
                            className="text-xs font-mono tracking-widest text-slate-400 hover:text-white px-5 py-2 rounded-lg border border-transparent transition-colors relative group"
                        >
                            <span className="relative z-10">{link.name}</span>

                            {/* Internal Glow Pulse */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.15 }}
                                className="absolute inset-0 rounded-lg bg-accent-blue/5 blur-sm -z-0"
                            />
                        </motion.a>
                    ))}
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
                            <a href="https://github.com/RAJESHMOGILIPULA" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GITHUB</a>
                            <a href="https://www.linkedin.com/in/mogilipula-rajesh0644" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
                            <a href="mailto:rajeshmogilipula@gmail.com" className="hover:text-white transition-colors">EMAIL</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
