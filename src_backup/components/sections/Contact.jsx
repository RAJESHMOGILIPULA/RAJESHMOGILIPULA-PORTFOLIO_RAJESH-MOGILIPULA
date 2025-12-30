import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiSend, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const Contact = () => {
    const [status, setStatus] = useState('IDLE') // IDLE, SENDING, SENT

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('SENDING')
        setTimeout(() => {
            setStatus('SENT')
            setTimeout(() => setStatus('IDLE'), 3000)
        }, 2000)
    }

    return (
        <section id="contact" className="section-padding relative bg-slate-900/10">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-8">/ CONNECT</h2>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12">
                                Let's build <br /> <span className="text-accent-gradient">the next</span> big thing.
                            </h3>
                            <p className="text-xl text-slate-500 leading-relaxed italic max-w-sm">
                                Currently available for selected full-stack projects and architectural consultations.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { label: 'EMAIL', value: 'rajeshmogilipula@example.com', icon: FiMail },
                                { label: 'LINKEDIN', value: 'in/rajeshmogilipula', icon: FiLinkedin },
                                { label: 'CODEBASE', value: 'github/rajeshmogilipula', icon: FiGithub }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-xl text-slate-500 group-hover:text-accent-blue transition-all group-hover:scale-110">
                                        <item.icon />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-mono text-slate-500 tracking-widest">{item.label}</div>
                                        <div className="text-white font-medium group-hover:text-accent-blue transition-colors">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-panel p-1 rounded-[2.5rem]">
                            <div className="bg-primary p-8 md:p-12 rounded-[2rem] border border-white/5">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-accent-blue transition-colors placeholder:text-slate-800"
                                            placeholder="YOUR FULL NAME"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-accent-purple transition-colors placeholder:text-slate-800"
                                            placeholder="EMAIL@EXAMPLE.COM"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-accent-cyan transition-colors placeholder:text-slate-800 resize-none"
                                            placeholder="WHAT'S ON YOUR MIND?"
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-6 rounded-2xl font-bold flex items-center justify-center gap-4 transition-all ${status === 'SENT' ? 'bg-green-500' : 'bg-white text-black hover:bg-accent-blue hover:text-white'}`}
                                    >
                                        {status === 'SENDING' ? 'TRANSMITTING...' : status === 'SENT' ? 'MESSAGE SECURED' : (
                                            <>
                                                SEND TRANSMISSION <FiSend className="text-xl" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </div>

                        {/* Absolutes */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-blue/20 blur-[60px] rounded-full" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-purple/20 blur-[80px] rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
