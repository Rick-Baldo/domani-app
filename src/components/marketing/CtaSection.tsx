'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'
import { WA_URL } from '@/lib/constants'
import NeuralBackground from '@/components/ui/NeuralBackground'

export default function CtaSection() {
  return (
    <section className="py-24 bg-domani-orange relative overflow-hidden">
      {/* Neural background no laranja — baixíssima opacidade */}
      <NeuralBackground opacity={0.08} />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] blur-3xl opacity-25 bg-white rounded-full pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
          Sua operação pode produzir mais
          <br />
          com menos caos. Vamos conversar?
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Nosso time mapeia sua operação e mostra onde a inteligência artificial
          resolve o que o volume humano não consegue.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-white text-domani-orange font-extrabold px-10 py-5 rounded-full text-lg shadow-2xl shadow-black/20 hover:bg-orange-50 transition-colors duration-200"
          >
            Falar com especialista →
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
