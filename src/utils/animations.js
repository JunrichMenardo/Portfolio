// Reusable motion variants for consistent page/section animations
export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

export const sectionVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const floatVariant = {
  initial: { y: 0 },
  animate: { y: [0, -6, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }
}
