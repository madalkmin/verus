import { motion } from 'framer-motion'
import { differentials } from '../data/siteData'
import SectionHeading from './SectionHeading'

function Differentials() {
  return (
    <section id="diferenciais" className="soft-grid bg-[#f5f7f4] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.86fr_1.14fr]">
          <SectionHeading
            eyebrow="Diferenciais"
            title="Por que escolher a Verus para a sua operação?"
            description="Uma empresa logística precisa entregar mais do que deslocamento: precisa de comunicação, estrutura, cuidado e previsibilidade."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map(({ title, icon: Icon }, index) => (
              <motion.div
                key={title}
                className="group flex items-center gap-4 rounded-xl border border-[#dfe5dd] bg-white/[0.92] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-xl hover:shadow-slate-950/[0.08]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#f2f5f0] text-[#c84c13] shadow-sm transition group-hover:bg-[#e85d1c] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-extrabold leading-snug text-[#181f2a]">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Differentials
