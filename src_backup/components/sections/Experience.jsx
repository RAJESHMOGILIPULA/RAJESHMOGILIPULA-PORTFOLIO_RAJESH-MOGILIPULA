import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMinus } from 'react-icons/fi'

const ExperienceItem = ({ year, company, role, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="relative group border-b border-white/5 pb-16 last:border-0"
    >
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
            <div className="md:w-32 pt-2">
                <span className="text-slate-500 font-mono text-sm tracking-widest">{year}</span>
            </div>

            <div className="flex-1 space-y-6">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <h4 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors uppercase tracking-tight">{role}</h4>
                        <p className="text-slate-400 font-medium flex items-center gap-2">
                            <FiMinus className="text-accent-purple" /> {company}
                        </p>
                    </div>
                    <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                        <FiArrowUpRight className="text-xl" />
                    </div>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed italic max-w-2xl">
                    {desc}
                </p>
            </div>
        </div>
    </motion.div>
)

const Experience = () => {
    const experiences = [
        {
            year: "2024 — NOW",
            role: "FULL STACK ARCHITECT",
            company: "INDEPENDENT ECOSYSTEMS",
            desc: "Architecting high-performance web systems using Spring Boot and React. Focused on creating scalable RESTful services, JWT-based security, and immersive user experiences."
        },
        {
            year: "2023 — 2024",
            role: "NETWORK SPECIALIST",
            company: "CISCO SYSTEMS (ACADEMY)",
            desc: "Gained industrial-level knowledge in network infrastructure, security, and protocol management. Applied networking logic to improve application latency and data integrity."
        }
    ]

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="mb-24">
                    <h2 className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-8">/ RESUME</h2>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Professional <span className="text-accent-gradient drop-shadow-lg">Trajectory</span>
                    </h3>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, idx) => (
                        <ExperienceItem key={idx} {...exp} index={idx} />
                    ))}
                </div>
            </div>

            {/* Visual Depth Decoration */}
            <div className="absolute left-[-10%] bottom-[-20%] w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] -z-10" />
        </section>
    )
}

export default Experience
