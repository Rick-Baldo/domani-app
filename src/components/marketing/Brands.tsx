'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations'
import { WA_URL } from '@/lib/constants'

const cases = [
  {
    name: 'Brewteco',
    segment: 'Food & Beverage',
    result: 'Atendimento automatizado via WhatsApp com reservas e pedidos',
    icon: '🍺',
  },
  {
    name: 'Porto Di Vino',
    segment: 'Gastronomia Premium',
    result: 'IA para qualificação de clientes e gestão de reservas',
    icon: '🍷',
  },
  {
    name: 'Todeschini',
    segment: 'Móveis Planejados',
    result: 'Jornada de venda automatizada do lead ao projeto',
    icon: '🪵',
  },
  {
    name: 'Italínea',
    segment: 'Móveis & Design',
    result: 'Chatbot especializado para qualificação e direcionamento de projetos',
    icon: '🏠',
  },
]

export default function Brands() {
  return (
    <section className="py-24 bg-domani-dark relative overflow-hidden">
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
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-domani-orange/10 border border-domani-orange/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-domani-orange text-sm font-medium">Cases de sucesso</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold mb-4">
            Operações que já evoluíram
            <br />
            <span className="text-domani-orange">com a Domani na linha de frente</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            Resultados reais em setores exigentes. Veja quem já opera com mais inteligência
            e menos ruído no atendimento e nas vendas.
          </motion.p>
        </motion.div>

        {/* Cases grid — glassmorphism + stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {cases.map((brand) => (
            <motion.div
              key={brand.name}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="
                relative overflow-hidden
                bg-white/[0.05] backdrop-blur-md
                border border-white/10 hover:border-domani-orange/50
                rounded-2xl p-6 group
                shadow-lg shadow-black/20 hover:shadow-domani-orange/10
                transition-colors duration-300
              "
            >
              {/* Glass shine — top-left highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="text-4xl mb-4">{brand.icon}</div>

              <div className="text-xs text-domani-orange font-semibold uppercase tracking-wider mb-1">
                {brand.segment}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-domani-orange transition-colors duration-200">
                {brand.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{brand.result}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-domani-orange/0 group-hover:bg-domani-orange/[0.04] transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="text-white/40 mb-6 text-base">
            Sua operação pode ser a próxima a ganhar escala com inteligência.
          </p>
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-domani-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-domani-orange/30"
          >
            <span>Quero operar com mais inteligência</span>
            <span>→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
