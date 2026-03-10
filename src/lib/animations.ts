import type { Variants } from 'framer-motion'

/** Fade + slide up suave — usado em headers e itens isolados */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Container com stagger para grids (cascata entre filhos) */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

/** Scale + fade — ideal para cards e avatares */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Opções padrão de viewport — anima só uma vez, inicia 80px antes */
export const viewportOnce = { once: true, margin: '-80px 0px' } as const
