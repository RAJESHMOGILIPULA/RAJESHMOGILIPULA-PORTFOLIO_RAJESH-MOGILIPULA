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
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">/ ABOUT ME</h2>
                        <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-8">
                            Building <span className="text-accent-gradient">scalable solutions</span> with clean code & modern architecture.
                        </h3>
                    </motion.div>

                    {/* Main Description */}
                    <motion.p
                        className="text-2xl md:text-3xl text-slate-400 font-light leading-relaxed mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        I am <span className="text-white">Rajesh Mogilipula</span>, a Full Stack Developer specializing in building robust, scalable enterprise applications. With expertise spanning Java Spring Boot backends and modern React frontends, I transform complex business requirements into elegant technical solutions.
                    </motion.p>

                    <motion.div
                        className="space-y-6 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-slate-500 leading-relaxed">
                            My journey in software development is driven by a passion for clean architecture and performance optimization. I thrive in environments where technical excellence meets real-world impact, whether it's designing microservices architectures, optimizing database queries, or crafting intuitive user interfaces.
                        </p>
                    </motion.div>

                    {/* Education Timeline */}
                    <div className="space-y-4 mb-16">
                        <motion.h4
                            className="text-white font-bold flex items-center gap-2 mb-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-8 h-[1px] bg-accent-cyan" /> EDUCATION
                        </motion.h4>
                        <div className="space-y-6">
                            {[
                                {
                                    degree: "B.Tech in Electrical and Electronics Engineering",
                                    year: "2025",
                                    institution: "Vignan's Lara Institute of Technology and Science",
                                    grade: "CGPA: 7.34/10",
                                    color: "accent-blue",
                                    delay: 0.1
                                },
                                {
                                    degree: "Intermediate (Class XII)",
                                    year: "2021",
                                    institution: "NRI Junior College",
                                    grade: "Score: 927/1000 (92.7%)",
                                    color: "accent-purple",
                                    delay: 0.2
                                },
                                {
                                    degree: "Secondary School (Class X)",
                                    year: "2019",
                                    institution: "Sarada High School",
                                    grade: "CGPA: 10.0/10",
                                    color: "accent-blue",
                                    delay: 0.3
                                }
                            ].map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="glass-card p-6 hover:border-accent-blue/30 transition-all group"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: edu.delay }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h5 className="text-white font-semibold group-hover:text-accent-cyan transition-colors">{edu.degree}</h5>
                                        <span className={`text-${edu.color} font-mono text-sm`}>{edu.year}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-1">{edu.institution}</p>
                                    <p className="text-accent-cyan text-sm font-mono">{edu.grade}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Expertise & Certifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white font-bold flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-accent-blue" /> EXPERTISE
                            </h4>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Full-stack development with Java Spring Boot, React, and modern cloud technologies. Specialized in building RESTful APIs, microservices, and responsive web applications.
                            </p>
                        </motion.div>
                        <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white font-bold flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-accent-purple" /> CERTIFICATIONS
                            </h4>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                <span className="text-accent-blue">Cisco CCNA</span> certified with strong networking fundamentals. Continuously expanding knowledge in cloud platforms and DevOps practices.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
