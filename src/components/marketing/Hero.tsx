'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ui/ContactForm'
import NeuralBackground from '@/components/ui/NeuralBackground'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const stats = [
  { value: '40+',  label: 'Cases validados',   highlight: false },
  { value: '10x',  label: 'Mais eficiência',   highlight: true  },
  { value: '24/7', label: 'Operação contínua', highlight: false },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-domani-dark pt-16">

      {/* Gradiente radial: #000 no centro → #1D1D1F nas bordas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000000 0%, #1D1D1F 100%)',
        }}
      />

      {/* Rede neural orgânica — mais densa nas bordas, some no centro */}
      <NeuralBackground opacity={0.14} />

      {/* Glow laranja central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.10] blur-3xl bg-domani-orange pointer-events-none" />

      {/* Section blending inferior — flui para o preto */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Copy ── */}
        <div>
          {/* Badge ERA DA IA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-domani-orange/10 border border-domani-orange/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-domani-orange animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              Bem-vindo à{' '}
              <span className="text-domani-orange font-bold tracking-wide">ERA DA IA</span>
            </span>
          </motion.div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8">
            IA aplicada à experiência
            <br />
            e crescimento{' '}
            <span className="text-domani-orange">comercial</span>
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Orquestramos atendimento e vendas em operações de alta demanda com IA, bots e automação.
            Do diagnóstico à implementação: tecnologia de ponta com squad dedicado.
          </motion.p>

          {/* Divisor */}
          <div className="w-12 h-px bg-domani-orange/40 mb-8" />

          {/* Stats — glow difuso no stat destacado */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-10"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="relative">
                {stat.highlight && (
                  /* Glow laranja muito difuso atrás do número */
                  <div
                    className="absolute -inset-3 rounded-xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(229,109,35,0.22) 0%, transparent 100%)',
                      filter: 'blur(8px)',
                    }}
                  />
                )}
                <div
                  className={`relative text-3xl font-extrabold ${
                    stat.highlight ? 'text-domani-orange' : 'text-white'
                  }`}
                  style={
                    stat.highlight
                      ? { textShadow: '0 0 18px rgba(229,109,35,0.45)' }
                      : undefined
                  }
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Form card ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-domani-orange via-orange-400 to-transparent" />
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-1">Fale com a Domani</h2>
            <p className="text-white/50 text-sm mb-7">
              Conte como podemos transformar sua operação. Retornamos em até 24h.
            </p>
            <ContactForm />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
      >
        <span className="text-white/35 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-6 bg-gradient-to-b from-domani-orange/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
