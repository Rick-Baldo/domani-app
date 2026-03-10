'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WA_URL } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 inset-x-0 z-40 transition-all duration-300
        ${scrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo horizontal "domani.AI" */}
        <a href="/" className="flex items-baseline gap-0.5 select-none group">
          <span className="text-domani-orange font-extrabold text-xl tracking-tight leading-none">
            domani
          </span>
          <span className="text-white/50 font-bold text-xl leading-none">.</span>
          <span className="text-white font-extrabold text-xl leading-none tracking-tighter">
            AI
          </span>
        </a>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 text-sm font-semibold
            bg-domani-orange/10 hover:bg-domani-orange text-domani-orange hover:text-white
            border border-domani-orange/40 hover:border-domani-orange
            px-4 py-2 rounded-full transition-all duration-200
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-domani-orange animate-pulse" />
          Falar com especialista
        </a>
      </div>
    </motion.header>
  )
}
