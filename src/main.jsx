import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import Lenis from '@studio-freight/lenis'

const Root = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.5,
            smoothTouch: false,
            touchMultiplier: 1.5,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
