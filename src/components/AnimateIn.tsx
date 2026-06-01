import { motion, type Variants } from 'framer-motion'
import type { ReactNode, CSSProperties } from 'react'

export const ease = [0.25, 0.46, 0.45, 0.94] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

export const scaleBlurIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const staggerChildScale: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
}

interface AnimateInProps {
  children: ReactNode
  variants?: Variants
  delay?: number
  className?: string
  style?: CSSProperties
  amount?: number
}

export function AnimateIn({ children, variants = fadeUp, delay = 0, className, style, amount = 0.15 }: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  style,
  amount = 0.1,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  amount?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  style,
  scale = false,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  scale?: boolean
}) {
  return (
    <motion.div variants={scale ? staggerChildScale : staggerChild} className={className} style={style}>
      {children}
    </motion.div>
  )
}
