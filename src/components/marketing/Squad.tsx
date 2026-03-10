'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations'

const members = [
  { name: 'Rick',    role: 'Estratégia', initial: 'R',  delay: 0    },
  { name: 'Raisa',   role: 'CSM',        initial: 'Ra', delay: 0.4  },
  { name: 'Aline',   role: 'Projetos',   initial: 'A',  delay: 0.8  },
  { name: 'Lucas',   role: 'IA',         initial: 'L',  delay: 1.2  },
  { name: 'Américo', role: 'Automação',  initial: 'Am', delay: 1.6  },
  { name: 'Vini',    role: 'Dados',      initial: 'V',  delay: 2.0  },
  { name: 'Duda',    role: 'Design',     initial: 'D',  delay: 2.4  },
  { name: 'Vic',     role: 'Visual',     initial: 'Vi', delay: 2.8  },
  { name: 'Rubens',  role: 'Dev',        initial: 'Ru', delay: 3.2  },
  { name: 'Alanis',  role: 'Conteúdo',  initial: 'Al', delay: 3.6  },
]

export default function Squad() {
  return (
    <section className="py-24 bg-[#161618] relative overflow-hidden">
      {/* Section blending — emerge do preto acima e abaixo */}
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
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-domani-orange/10 border border-domani-orange/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-domani-orange text-sm font-medium">Quem faz acontecer</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold mb-4">
            Time de especialistas,{' '}
            <span className="text-domani-orange">não de generalistas</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
            Quando você contrata a Domani, você não contrata uma ferramenta.
            Você contrata um squad dedicado que pensa, cria e executa ao seu lado.
          </motion.p>
        </motion.div>

        {/* Team grid — Intelligence Chips */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* ── Intelligence Chip ── */}
              <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4"
                style={{
                  background: '#1D1D1F',
                  // Borda laranja 1px + glow interno sutil
                  boxShadow:
                    'inset 0 0 18px rgba(229,109,35,0.07), 0 0 0 1px rgba(229,109,35,0.45)',
                }}
              >
                {/* Shine sweep diagonal — percorre a cada 5s */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden rounded-2xl pointer-events-none"
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '45%',
                      height: '200%',
                      background:
                        'linear-gradient(105deg, transparent 20%, rgba(229,109,35,0.13) 50%, transparent 80%)',
                      animation: 'chip-shine 5s ease-in-out infinite',
                      animationDelay: `${member.delay}s`,
                    }}
                  />
                </div>

                {/* Cantos da placa de circuito — decoração chip */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  {/* Canto sup-esq */}
                  <path d="M4 16 L4 4 L16 4" stroke="#E56D23" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                  {/* Canto sup-dir */}
                  <path d="M84 4 L96 4 L96 16" stroke="#E56D23" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                  {/* Canto inf-esq */}
                  <path d="M4 84 L4 96 L16 96" stroke="#E56D23" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                  {/* Canto inf-dir */}
                  <path d="M84 96 L96 96 L96 84" stroke="#E56D23" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
                  {/* Pino central (scan line) */}
                  <line x1="50" y1="8" x2="50" y2="14" stroke="#E56D23" strokeWidth="1" strokeOpacity="0.25" />
                  <line x1="50" y1="86" x2="50" y2="92" stroke="#E56D23" strokeWidth="1" strokeOpacity="0.25" />
                </svg>

                {/* Inicial — fonte de identidade */}
                <div className="relative z-30 w-full h-full flex flex-col items-center justify-center gap-1">
                  <span
                    className="font-extrabold text-4xl select-none"
                    style={{ color: '#E56D23', textShadow: '0 0 20px rgba(229,109,35,0.4)' }}
                  >
                    {member.initial}
                  </span>
                  {/* Linha scan decorativa */}
                  <div className="w-8 h-px bg-domani-orange/30" />
                </div>

                {/* Hover: intensifica borda e mostra "domani.AI" */}
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none z-40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1"
                  style={{
                    background: 'rgba(0,0,0,0.45)',
                    boxShadow: 'inset 0 0 0 1.5px #E56D23, inset 0 0 24px rgba(229,109,35,0.18)',
                  }}
                >
                  <span className="text-domani-orange text-[10px] font-bold uppercase tracking-[0.18em]">
                    domani.AI
                  </span>
                  <span className="text-white/60 text-[10px] font-medium">ver perfil →</span>
                </div>
              </div>

              {/* Nome */}
              <div className="font-semibold text-sm text-white group-hover:text-domani-orange transition-colors duration-200">
                {member.name}
              </div>

              {/* Role — contraste WCAG-safe */}
              <div className="text-white/55 text-xs mt-1 font-medium tracking-wide">
                {member.role}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-domani-orange/60 via-domani-orange/30 to-transparent" />
          <p className="text-lg font-semibold mb-2">
            Produto <span className="text-domani-orange font-extrabold">+</span> Squad
          </p>
          <p className="text-white/70 max-w-xl mx-auto">
            Tecnologia de ponta com estratégia humana. Implementamos, acompanhamos e evoluímos
            a solução junto com a sua empresa.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
