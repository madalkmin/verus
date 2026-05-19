import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { gallery } from '../data/siteData'
import SectionHeading from './SectionHeading'

function StructureGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="estrutura" className="relative overflow-hidden bg-[#101722] py-24 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(20,184,166,.13),transparent_24rem),radial-gradient(circle_at_18%_82%,rgba(232,93,28,.18),transparent_22rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Estrutura"
          title="Estrutura preparada para o seu negócio"
          description="Operação, armazenagem e transporte integrados para entregar mais controle, segurança e eficiência."
          align="center"
          light
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map(({ title, text, icon: Icon }, index) => (
            <motion.button
              key={title}
              type="button"
              onClick={() => setSelected({ title, text, Icon })}
              className="group relative min-h-[290px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-left shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-300/60 hover:bg-white/[0.09]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,93,28,.22),transparent_15rem),linear-gradient(145deg,rgba(58,70,87,.58),rgba(16,23,34,.08))]" />
              <div className="absolute inset-x-8 bottom-0 h-24 rounded-t-[32px] bg-black/25 blur-2xl" />
              <div className="relative flex h-full min-h-[240px] flex-col justify-between">
                <Icon className="h-12 w-12 text-orange-200" />
                <span>
                  <span className="mb-3 block text-xs font-extrabold uppercase tracking-[0.16em] text-orange-100">
                    Ver detalhe
                  </span>
                  <h3 className="text-3xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/12 bg-[#101722] p-8 text-white shadow-2xl"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                onClick={() => setSelected(null)}
                aria-label="Fechar galeria"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_24%_20%,rgba(232,93,28,.3),transparent_18rem),linear-gradient(145deg,#243044,#101722)] p-10">
                <selected.Icon className="h-16 w-16 text-orange-200" />
                <h3 className="mt-10 text-4xl font-extrabold">{selected.title}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{selected.text}</p>
                <p className="mt-8 rounded-xl border border-orange-300/30 bg-orange-500/10 p-4 text-sm font-semibold leading-6 text-orange-50">
                  Área demonstrativa do protótipo. As imagens reais da frota, armazém e equipe podem substituir este painel mantendo o mesmo layout premium.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default StructureGallery
