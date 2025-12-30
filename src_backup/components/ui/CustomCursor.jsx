import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    const springConfig = { damping: 30, stiffness: 300, mass: 0.5 }
    const cursorX = useSpring(0, springConfig)
    const cursorY = useSpring(0, springConfig)

    useEffect(() => {
        const moveMouse = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleHover = () => setIsHovering(true)
        const handleUnhover = () => setIsHovering(false)

        window.addEventListener('mousemove', moveMouse)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        const updateInteractive = () => {
            const elements = document.querySelectorAll('a, button, .interactive, input, textarea')
            elements.forEach((el) => {
                el.addEventListener('mouseenter', handleHover)
                el.addEventListener('mouseleave', handleUnhover)
            })
        }

        updateInteractive()

        // Occasional refresh for dynamic elements
        const interval = setInterval(updateInteractive, 2000)

        return () => {
            window.removeEventListener('mousemove', moveMouse)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            clearInterval(interval)
        }
    }, [cursorX, cursorY])

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/20 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    borderColor: isHovering ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                    borderWidth: isHovering ? '2px' : '1px'
                }}
            />

            {/* Inner Dot with Glow */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent-blue rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicking ? 1.5 : 1,
                    boxShadow: isHovering
                        ? '0 0 20px rgba(56, 189, 248, 0.8)'
                        : '0 0 0px rgba(56, 189, 248, 0)'
                }}
            />

            {/* Trailing Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 w-[100px] h-[100px] bg-accent-blue/10 rounded-full blur-[40px] pointer-events-none z-[9998] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    )
}

export default CustomCursor
