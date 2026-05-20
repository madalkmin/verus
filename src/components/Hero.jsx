import { motion } from 'framer-motion'
import { MapPinned, Truck } from 'lucide-react'
import { heroMetrics } from '../data/siteData'
import ButtonLink from './ButtonLink'

function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-[#101722] pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(232,93,28,.34),transparent_27rem),radial-gradient(circle_at_12%_72%,rgba(20,184,166,.16),transparent_24rem),linear-gradient(120deg,rgba(16,23,34,.98),rgba(24,34,48,.84)_48%,rgba(8,13,21,.98))]" />
      <div className="route-grid absolute inset-0 opacity-75" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f5f7f4] to-transparent" />

      <div className="float-slow absolute right-[-10%] top-28 hidden h-[560px] w-[720px] rotate-[-7deg] rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.035))] shadow-2xl shadow-black/40 backdrop-blur md:block">
        <div className="absolute inset-10 rounded-[28px] border border-orange-300/20 bg-[linear-gradient(135deg,rgba(42,52,66,.86),rgba(16,23,34,.34))]" />
        <div className="absolute bottom-20 left-12 right-16 h-28 rounded-t-3xl bg-[#2a3442] shadow-2xl">
          <div className="absolute -top-16 right-14 h-28 w-64 rounded-t-3xl rounded-br-xl bg-[#3a4657]" />
          <div className="absolute bottom-[-28px] left-16 h-16 w-16 rounded-full border-[12px] border-[#101722] bg-[#e85d1c]" />
          <div className="absolute bottom-[-28px] right-24 h-16 w-16 rounded-full border-[12px] border-[#101722] bg-[#e85d1c]" />
          <div className="absolute left-8 top-6 h-3 w-56 rounded-full bg-orange-300/85" />
          <div className="absolute right-28 top-7 h-16 w-20 rounded-lg bg-white/12" />
        </div>
        <div className="absolute left-20 top-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur">
          <MapPinned className="h-5 w-5 text-orange-300" />
          <span className="text-sm font-bold text-slate-100">Base estratégica Limeira-SP</span>
        </div>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 overflow-hidden px-4 pb-24 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:overflow-visible lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="min-w-0 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-300/30 bg-white/[0.08] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.16em] text-orange-100 shadow-lg shadow-black/10 backdrop-blur">
            <Truck className="h-4 w-4" />
            15 anos de estrada
          </div>
          <h1 className="max-w-[21rem] text-[2.05rem] font-extrabold leading-[1.04] sm:max-w-5xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Logística inteligente para cargas que não podem parar
          </h1>
          <p className="mt-7 max-w-[21rem] text-base font-medium leading-8 text-slate-200 sm:max-w-2xl sm:text-lg md:text-xl">
            Transporte rodoviário, armazenagem e soluções logísticas com segurança, pontualidade e estrutura preparada para empresas que exigem performance.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portal-cliente" className="w-full sm:w-auto">Solicitar cotação</ButtonLink>
            {/* <ButtonLink href="#estrutura" variant="secondary" icon={ArrowDown} className="w-full sm:w-auto">
              Conhecer estrutura
            </ButtonLink> */}
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 grid min-w-0 gap-4 self-end lg:pb-10"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="w-full rounded-2xl border border-white/12 bg-[#172231]/78 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-200">Painel operacional</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {heroMetrics.map(({ value, label, icon: Icon }) => (
                <div key={label} className="min-w-0 rounded-xl border border-white/10 bg-black/25 p-4">
                  <Icon className="mb-4 h-5 w-5 text-orange-300" />
                  <p className="break-words text-2xl font-extrabold text-white">{value}</p>
                  <p className="mt-1 text-sm font-medium leading-5 text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
