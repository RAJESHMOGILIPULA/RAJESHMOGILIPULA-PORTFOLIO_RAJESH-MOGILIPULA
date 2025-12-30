import React from 'react'
import { motion } from 'framer-motion'
import { SiSpringboot, SiHibernate, SiReact, SiJavascript, SiTailwindcss, SiMysql, SiGit, SiDocker } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const SkillIcon = ({ icon: Icon, name, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{
            scale: 1.15,
            rotate: 0,
            boxShadow: "0 0 50px rgba(34, 211, 238, 0.4)",
            borderColor: "rgba(34, 211, 238, 0.8)",
            backgroundColor: "rgba(34, 211, 238, 0.05)"
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
        className="flex flex-col items-center gap-4 p-8 glass-card rounded-[2rem] group border border-white/5 transition-colors duration-150"
    >
        <div className="text-5xl text-slate-500 group-hover:text-accent-blue transition-colors duration-150 filter group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            <Icon />
        </div>
        <span className="text-xs font-mono tracking-widest text-slate-500 group-hover:text-white transition-colors uppercase">{name}</span>
    </motion.div>
)

const Skills = () => {
    const stack = [
        { icon: FaJava, name: "Java" },
        { icon: SiSpringboot, name: "Spring Boot" },
        { icon: SiHibernate, name: "Hibernate" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiReact, name: "React" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiGit, name: "Git" }
    ]

    return (
        <section id="skills" className="section-padding bg-slate-900/5 overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative z-10">
                        <h2 className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-8">/ STACK</h2>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
                            Modern <span className="text-accent-gradient drop-shadow-lg">Intelligence</span> for the web.
                        </h3>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-lg mb-12 italic">
                            A curated selection of technologies I use to build robust, scalable, and high-performance applications.
                        </p>

                        <div className="glass-panel p-8 rounded-3xl inline-block">
                            <div className="flex items-center gap-8">
                                <div>
                                    <div className="text-sm font-mono text-slate-500 mb-1">FRONTEND</div>
                                    <div className="text-white font-bold tracking-tighter uppercase whitespace-nowrap">LATEST REACT</div>
                                </div>
                                <div className="w-[1px] h-8 bg-white/10" />
                                <div>
                                    <div className="text-sm font-mono text-slate-500 mb-1">BACKEND</div>
                                    <div className="text-white font-bold tracking-tighter uppercase whitespace-nowrap">SPRING ECOSYSTEM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        {stack.map((item, idx) => (
                            <SkillIcon key={idx} {...item} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic background element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[200px] -z-0" />
        </section>
    )
}

export default Skills
