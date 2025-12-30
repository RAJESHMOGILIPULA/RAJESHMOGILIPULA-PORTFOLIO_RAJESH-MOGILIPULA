import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { FiArrowDownRight } from 'react-icons/fi'

const Hero = () => {
    const containerRef = useRef(null)
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 1000], [0, 200])
    const y2 = useTransform(scrollY, [0, 1000], [0, -150])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text-line', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 0.5
            })

            gsap.to('.hero-orb', {
                x: 'random(-50, 50)',
                y: 'random(-50, 50)',
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Dynamic Background Orbs */}
            <div className="bg-orb hero-orb w-[600px] h-[600px] bg-accent-blue/20 top-[-10%] left-[-10%]" />
            <div className="bg-orb hero-orb w-[500px] h-[500px] bg-accent-purple/20 bottom-[-10%] right-[-10%]" />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-cyan rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-4 py-2 px-4 rounded-full glass-panel"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
                        </span>
                        <span className="text-sm font-mono tracking-tight text-accent-cyan">AVAILABE FOR HIRE</span>
                    </motion.div>

                    <div className="space-y-2">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                            <div className="overflow-hidden h-[1.1em]">
                                <span className="hero-text-line block text-gradient">MOGILIPULA</span>
                            </div>
                            <div className="overflow-hidden h-[1.1em] flex items-center gap-4">
                                <span className="hero-text-line block text-accent-gradient drop-shadow-2xl">RAJESH</span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 'clamp(50px, 15vw, 200px)' }}
                                    transition={{ delay: 1, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                                    className="h-[2px] bg-white/20 hidden md:block"
                                />
                            </div>
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="max-w-xl space-y-8"
                    >
                        <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                            Senior <span className="text-white font-medium">Full Stack Architect</span> specialized in high-performance Java ecosystems and immersive frontend experiences.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
                                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-2"
                            >
                                <div className="absolute inset-0 bg-accent-blue translate-y-[101%] group-hover:translate-y-0 transition-transform duration-200" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-200 uppercase tracking-tight">Hire Me</span>
                                <FiArrowDownRight className="relative z-10 text-xl group-hover:text-white transition-colors duration-200" />
                            </motion.button>

                            <motion.a
                                href="/resume.pdf"
                                download="Rajesh_Mogilipula_Resume.pdf"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "rgba(129, 140, 248, 0.8)",
                                    backgroundColor: "rgba(129, 140, 248, 0.05)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
                                className="px-8 py-4 glass-panel rounded-full text-white font-bold flex items-center gap-2 border border-white/5 transition-colors duration-200"
                            >
                                DOWNLOAD CV
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Parallax Layers */}
            <motion.div style={{ y: y1 }} className="absolute right-[10%] top-[20%] w-64 h-96 glass-panel rounded-3xl opacity-20 -z-10 rotate-12" />
            <motion.div style={{ y: y2 }} className="absolute left-[5%] bottom-[15%] w-48 h-48 glass-panel rounded-full opacity-10 -z-10" />
        </section>
    )
}

export default Hero
