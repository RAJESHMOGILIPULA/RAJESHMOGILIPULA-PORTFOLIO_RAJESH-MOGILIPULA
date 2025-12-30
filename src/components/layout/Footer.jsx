import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-primary py-24 border-t border-white/5 relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="text-2xl font-black tracking-tighter">
                            RAJESH <span className="text-accent-blue">M.</span>
                        </h4>
                        <p className="text-slate-500 font-mono text-xs tracking-widest">
                            © {new Date().getFullYear()} ALL SYSTEMS OPERATIONAL
                        </p>
                    </div>

                    <div className="flex gap-12 font-mono text-xs tracking-[0.4em] text-slate-500 uppercase">
                        <a href="https://github.com/RAJESHMOGILIPULA" className="hover:text-white transition-colors">GITHUB</a>
                        <a href="https://linkedin.com/in/rajeshmogilipula" className="hover:text-white transition-colors">LINKEDIN</a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-16 h-16 glass-panel rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-black transition-all group"
                    >
                        <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-slate-800 tracking-[1em] uppercase">
                    <span>MADE WITH PRECISION</span>
                    <span>LOCATED IN INDIA</span>
                    <span>ESTD 2024</span>
                </div>
            </div>

            {/* Decorative Layer */}
            <div className="absolute right-[-10%] bottom-[-20%] w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[200px] -z-10" />
        </footer>
    )
}

export default Footer
