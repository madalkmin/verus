import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <motion.div
      className={`max-w-3xl ${alignment}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.18em] ${light ? 'text-orange-200' : 'text-[#d85a1c]'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-[#181f2a]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-8 md:text-lg ${light ? 'text-slate-300' : 'text-[#5b6472]'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
