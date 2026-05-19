import { motion } from 'framer-motion'
import { mvvCards } from '../data/siteData'
import SectionHeading from './SectionHeading'

function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-[#101722] py-24 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(232,93,28,.22),transparent_24rem),radial-gradient(circle_at_12%_70%,rgba(20,184,166,.13),transparent_22rem),linear-gradient(180deg,#101722,#151f2d)]" />
      <div className="route-grid absolute inset-0 opacity-28" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Essência Verus"
          title="Seriedade no que transporta, clareza no que promete."
          description="Missão, visão e valores traduzidos em uma operação com disciplina, respeito e compromisso com cada cliente."
          align="center"
          light
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {mvvCards.map(({ title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-300/60 hover:bg-white/[0.09]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-orange-500/15 text-orange-200 ring-1 ring-orange-300/30 transition group-hover:bg-[#e85d1c] group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-8 text-2xl font-extrabold">{title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValues
