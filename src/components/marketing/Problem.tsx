'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations'
import NeuralBackground from '@/components/ui/NeuralBackground'

const problems = [
  {
    icon: '🔀',
    title: 'Atendimento espalhado',
    description:
      'Clientes em WhatsApp, Instagram, e-mail e telefone: sem centralização, sem histórico, sem contexto.',
  },
  {
    icon: '🚫',
    title: 'Falta de fluxos definidos',
    description:
      'Cada atendente age de forma diferente. Sem processos claros, a experiência varia e a qualidade cai.',
  },
  {
    icon: '📉',
    title: 'Conversão perdida',
    description:
      'Leads esfriando por demora no primeiro contato. Oportunidades de venda perdidas por falta de follow-up automático.',
  },
  {
    icon: '⏱️',
    title: 'Time sobrecarregado',
    description:
      'Humanos resolvendo perguntas repetitivas que poderiam ser automatizadas, desperdiçando tempo e talento.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 bg-[#161618] relative overflow-hidden">
      <NeuralBackground opacity={0.08} />
      {/* Section blending */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-400 text-sm font-medium">O problema real</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold mb-4">
            Sua operação está perdendo dinheiro{' '}
            <span className="text-red-400">agora</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Negócios em crescimento enfrentam os mesmos gargalos: atendimento descentralizado,
            processos manuais e experiência inconsistente para o cliente.
          </motion.p>
        </motion.div>

        {/* Grid — stagger cascata */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((item) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group bg-white/[0.05] backdrop-blur-sm border border-white/10 hover:border-red-500/30 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-base">
            Se você se identificou com algum desses cenários,{' '}
            <span className="text-domani-orange font-semibold">
              a Domani foi feita para você.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
