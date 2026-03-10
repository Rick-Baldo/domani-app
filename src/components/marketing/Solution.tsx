'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from '@/lib/animations'

const pillars = [
  {
    number: '01',
    title: 'Mapeamento de Contexto',
    description:
      'Nossa IA mapeia o contexto completo de cada cliente: histórico, intenção e momento da jornada. Responde com precisão e personalização real, sem achismos.',
    highlights: ['Processamento de linguagem natural', 'Análise de contexto e histórico', 'Identificação de intenção de compra'],
  },
  {
    number: '02',
    title: 'Execução Autônoma',
    description:
      'Atua com autonomia nos fluxos definidos: agenda, consulta, qualifica e escalona para humanos apenas quando o momento exige julgamento real.',
    highlights: ['Automação de fluxos de atendimento', 'Integração com CRM e sistemas', 'Escalada inteligente para humanos'],
  },
  {
    number: '03',
    title: 'Evolução Contínua',
    description:
      'Cada interação alimenta o sistema. A operação melhora sozinha, identificando padrões, otimizando respostas e gerando inteligência estratégica para sua equipe.',
    highlights: ['Melhoria contínua por interação', 'Dashboards de performance', 'Inteligência estratégica de comportamento'],
  },
]

export default function Solution() {
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
            <span className="text-domani-orange text-sm font-medium">Nossa solução</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold mb-4">
            Um ciclo que se auto-aperfeiçoa
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            A Domani não entrega uma ferramenta. Entrega um sistema que opera, aprende
            e se adapta à realidade da sua operação.
          </motion.p>
        </motion.div>

        {/* Pillars — stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="relative bg-white/[0.05] backdrop-blur-sm border border-white/10 hover:border-domani-orange/40 rounded-2xl p-8 group overflow-hidden transition-colors duration-300"
            >
              {/* Top highlight line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Ghost number */}
              <div className="text-7xl font-extrabold text-white/[0.04] absolute top-4 right-6 select-none group-hover:text-domani-orange/10 transition-colors duration-300">
                {pillar.number}
              </div>

              {/* Orange accent line */}
              <motion.div
                className="w-12 h-1 bg-domani-orange rounded-full mb-6"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />

              <h3 className="text-2xl font-extrabold mb-4 group-hover:text-domani-orange transition-colors duration-200">
                {pillar.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">{pillar.description}</p>

              <ul className="space-y-2">
                {pillar.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="text-domani-orange mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
