import { motion } from 'framer-motion'
import { processSteps } from '../data/siteData'
import SectionHeading from './SectionHeading'

function ProcessTimeline() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Como funciona nossa operação"
          description="Uma jornada simples para transformar a necessidade do cliente em execução logística organizada, acompanhada e pontual."
          align="center"
        />
        <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent xl:block" />
          {processSteps.map(({ title, icon: Icon }, index) => (
            <motion.div
              key={title}
              className="relative min-h-[190px] min-w-0 rounded-xl border border-[#dfe5dd] bg-[#fbfcfa] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-xl hover:shadow-slate-950/[0.08]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#18202c] text-orange-300">
                <Icon className="h-6 w-6" />
              </span>
              <span className="mt-6 block text-xs font-extrabold uppercase tracking-[0.16em] text-[#d85a1c]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-[1.05rem] font-extrabold leading-snug text-[#181f2a]">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
