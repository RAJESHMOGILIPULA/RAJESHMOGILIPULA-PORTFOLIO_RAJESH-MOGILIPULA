import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group"
        >
            <div className="relative mb-8 overflow-hidden rounded-[2rem] glass-card aspect-[16/10] border border-white/5 group-hover:border-accent-blue/30 transition-all duration-300 shadow-2xl group-hover:shadow-accent-blue/10">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                    <div className="flex flex-wrap gap-2 max-w-[70%]">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-xl text-[10px] font-mono rounded-full border border-white/10 group-hover:border-accent-cyan/30 transition-colors duration-200 uppercase">{t}</span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
                            href={project.github}
                            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200"
                        >
                            <FiGithub />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
                            href={project.live}
                            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-200 shadow-lg"
                        >
                            <FiArrowUpRight className="text-xl" />
                        </motion.a>
                    </div>
                </div>

                {/* Hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="px-4">
                <h4 className="text-3xl font-bold mb-4 flex items-center justify-between group-hover:text-accent-blue transition-colors duration-200">
                    {project.title}
                    <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        variants={{
                            hover: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.15 }}
                        className="text-accent-blue hidden group-hover:block"
                    >
                        <FiArrowUpRight />
                    </motion.span>
                </h4>
                <p className="text-slate-500 leading-relaxed text-lg line-clamp-2 italic group-hover:text-slate-400 transition-colors duration-200">
                    {project.description}
                </p>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-slate-900/10">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-3xl">
                        <h2 className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-8">/ CASE STUDIES</h2>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">
                            Engineered to <span className="text-accent-gradient">Scale</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-slate-500 font-mono text-sm max-w-xs text-right italic">
                            [Selected works showcasing full stack proficiency and architectural excellence]
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <motion.a
                        whileHover={{ y: -5 }}
                        href="https://github.com/RAJESHMOGILIPULA"
                        className="px-10 py-5 glass-panel rounded-full font-bold flex items-center gap-4 hover:border-accent-blue transition-all"
                    >
                        VIEW ALL ARCHIVES <FiGithub className="text-xl" />
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Projects
