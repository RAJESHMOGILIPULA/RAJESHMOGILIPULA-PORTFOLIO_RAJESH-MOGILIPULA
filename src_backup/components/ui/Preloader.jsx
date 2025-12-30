import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prev + 1
            })
        }, 20)
        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div
            exit={{ y: '-100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[1000] bg-primary flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="overflow-hidden mb-4"
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gradient">
                        CREATING <br /> <span className="text-white">IMPACT</span>
                    </h1>
                </motion.div>

                <div className="flex items-center gap-4">
                    <span className="text-9xl font-black tracking-tighter opacity-10 select-none">{counter}</span>
                    <div className="w-[1px] h-24 bg-white/10" />
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono text-slate-500 tracking-[0.5em] uppercase">Status</span>
                        <span className="text-xs font-mono text-accent-blue tracking-widest uppercase">Initializing Core...</span>
                    </div>
                </div>

                <div className="absolute bottom-[-200%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px]" />
            </div>

            <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase italic">0x{counter.toString(16).toUpperCase()}</span>
                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase opacity-20">ESTABLISHING CONNECTION</span>
            </div>
        </motion.div>
    )
}

export default Preloader
