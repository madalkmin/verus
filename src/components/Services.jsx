import { motion } from 'framer-motion'
import armazemImg from '../../img/armazem.jpg'
import caminhaoImg from '../../img/caminhao.jpeg'
import caminhaoViraImg from '../../img/caminhaoVira.jpeg'
import SectionHeading from './SectionHeading'

function Services() {
  return (
    <section id="servicos" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Soluções Verus"
              title="Operações logísticas desenhadas para empresas que precisam de confiança."
              description="Da carga fechada à armazenagem, a Verus conecta planejamento, estrutura e execução para reduzir ruído na operação."
            />
            <p className="mt-7 max-w-2xl rounded-2xl border border-[#dfe5dd] bg-[#f5f7f4] p-5 text-base leading-7 text-[#5b6472] shadow-sm">
              Cada solução pode ser ajustada ao tipo de carga, prazo, frequência e nível de acompanhamento que sua empresa precisa.
            </p>
          </div>

          <motion.div
            className="grid min-h-[360px] gap-4 sm:grid-cols-[1.12fr_.88fr]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <ImagePanel
              src={armazemImg}
              title="Armazenagem organizada"
              text="Estrutura para receber, separar e movimentar cargas com mais controle."
              className="min-h-[360px]"
            />
            <div className="grid gap-4">
              <ImagePanel
                src={caminhaoImg}
                title="Frota dedicada"
                text="Veículos prontos para operações programadas."
                className="min-h-[170px]"
              />
              <ImagePanel
                src={caminhaoViraImg}
                title="Operação sob medida"
                text="Atendimento próximo do planejamento à entrega."
                className="min-h-[170px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ImagePanel({ src, title, text, className = '' }) {
  return (
    <article className={`relative overflow-hidden rounded-2xl border border-[#dfe5dd] bg-[#101722] shadow-xl shadow-slate-950/[0.08] ${className}`}>
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101722]/86 via-[#101722]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{text}</p>
      </div>
    </article>
  )
}

export default Services
