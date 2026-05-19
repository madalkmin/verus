import { motion } from 'framer-motion'
import { stats } from '../data/siteData'

function Stats() {
  return (
    <section className="relative z-10 bg-[#f5f7f4] pt-14 pb-4">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <motion.div
            key={label}
            className="soft-panel rounded-xl border border-[#dfe5dd] bg-white/95 p-5 shadow-xl shadow-slate-950/[0.07] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-orange-950/10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="relative">
              <Icon className="mb-4 h-6 w-6 text-[#d85a1c]" />
              <p className="text-3xl font-extrabold text-[#181f2a]">{value}</p>
              <p className="mt-2 text-sm font-semibold leading-5 text-[#5b6472]">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
