import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

    return (
        <section id="about" ref={containerRef} className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    style={{ opacity, y }}
                    className="grid lg:grid-cols-12 gap-12 md:gap-24"
                >
                    <div className="lg:col-span-5">
                        <h2 className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-8">/ PHILOSOPHY</h2>
                        <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-12">
                            Solving complex <span className="text-accent-gradient">architectural</span> problems with minimalist design logic.
                        </h3>
                    </div>

                    <div className="lg:col-span-7 space-y-12">
                        <p className="text-2xl md:text-3xl text-slate-400 font-light leading-relaxed">
                            I am <span className="text-white">Rajesh Mogilipula</span>, a developer who believes code should be as elegant as the user experience it powers. My approach blends high-level Java architecture with pixel-perfect React implementation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                            <div className="space-y-4">
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-accent-blue" /> CORE VALUES
                                </h4>
                                <p className="text-slate-500 leading-relaxed italic">
                                    Scalability, security, and performance are not features—they are the foundation of everything I build.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-accent-purple" /> BACKGROUND
                                </h4>
                                <p className="text-slate-500 leading-relaxed italic">
                                    Deeply rooted in the Cisco networking ecosystem, bringing a unique infrastructure-first perspective to full-stack development.
                                </p>
                            </div>
                        </div>

                        <div className="pt-12">
                            <div className="glass-card p-1">
                                <div className="bg-primary p-12 flex flex-col md:flex-row justify-between items-center gap-12 group">
                                    <div className="text-center group-hover:scale-105 transition-transform">
                                        <div className="text-7xl font-bold text-gradient mb-2">02+</div>
                                        <div className="text-slate-500 font-mono text-xs tracking-widest uppercase">Years Experience</div>
                                    </div>
                                    <div className="w-[1px] h-24 bg-white/10 hidden md:block" />
                                    <div className="text-center group-hover:scale-105 transition-transform">
                                        <div className="text-7xl font-bold text-gradient mb-2">15+</div>
                                        <div className="text-slate-500 font-mono text-xs tracking-widest uppercase">Projects Delivered</div>
                                    </div>
                                    <div className="w-[1px] h-24 bg-white/10 hidden md:block" />
                                    <div className="text-center group-hover:scale-105 transition-transform">
                                        <div className="text-7xl font-bold text-gradient mb-2">100%</div>
                                        <div className="text-slate-500 font-mono text-xs tracking-widest uppercase">Commitment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
