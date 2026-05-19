import { motion } from 'framer-motion'
import { MapPin, ShieldCheck, Truck } from 'lucide-react'
import { aboutHighlights } from '../data/siteData'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="quem-somos" className="soft-grid bg-[#f5f7f4] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <motion.div
          className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[#101722] p-6 text-white shadow-2xl shadow-slate-950/20"
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(232,93,28,.28),transparent_18rem),radial-gradient(circle_at_86%_80%,rgba(20,184,166,.14),transparent_16rem),linear-gradient(145deg,rgba(24,34,48,.98),rgba(10,15,24,.94))]" />
          <div className="route-grid absolute inset-0 opacity-30" />
          <div className="relative flex h-full min-h-[470px] flex-col justify-between">
            <div className="max-w-sm rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur">
              <MapPin className="mb-5 h-8 w-8 text-orange-300" />
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-100">
                Limeira-SP
              </p>
              <h3 className="mt-3 text-3xl font-extrabold leading-tight">Base preparada para o eixo empresarial paulista</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/25 p-5">
                <Truck className="mb-4 h-7 w-7 text-orange-300" />
                <p className="text-2xl font-extrabold">Transporte</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Cargas fechadas, expressas e operações dedicadas.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-5">
                <ShieldCheck className="mb-4 h-7 w-7 text-orange-300" />
                <p className="text-2xl font-extrabold">Controle</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Processos para segurança, prazo e acompanhamento.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma transportadora com presença próxima, estrutura forte e visão operacional."
            description="A Verus Transportes atua no transporte rodoviário de cargas e em soluções logísticas completas, atendendo empresas que precisam de agilidade, responsabilidade e segurança em cada etapa da operação."
          />
          <p className="mt-7 text-lg leading-8 text-[#5b6472]">
            Localizada em Limeira-SP, a empresa combina atendimento consultivo, planejamento logístico e estrutura para apoiar operações que precisam de previsibilidade, organização e resposta rápida.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-3 rounded-lg border border-[#dfe5dd] bg-white p-4 shadow-sm transition hover:border-orange-300 hover:shadow-lg hover:shadow-slate-950/5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-orange-100 text-[#c84c13]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-extrabold text-[#181f2a]">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
