import { motion } from 'framer-motion'
import { testimonials } from '../data/siteData'
import SectionHeading from './SectionHeading'

function Testimonials() {
  return (
    <section id="depoimentos" className="soft-grid bg-[#f5f7f4] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Relacionamentos construídos com compromisso operacional."
          description="Clientes B2B precisam de confiança no dia a dia. A proposta Verus é entregar proximidade, clareza e responsabilidade em cada operação."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {testimonials.map(({ name, role, company, text, icon: QuoteIcon, stars: StarIcon }, index) => (
            <motion.article
              key={name}
              className="rounded-2xl border border-[#dfe5dd] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-slate-950/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.48, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-5">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-orange-100 text-[#c84c13]">
                  <QuoteIcon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-[#18202c] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                  Cliente Verus
                </span>
              </div>
              <div className="mt-6 flex gap-1 text-orange-500" aria-label="Avaliação 5 estrelas">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-[#435064]">"{text}"</p>
              <div className="mt-8 border-t border-[#dfe5dd] pt-5">
                <p className="text-xl font-extrabold text-[#181f2a]">{name}</p>
                <p className="mt-1 font-semibold text-[#5b6472]">
                  {role} - {company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
