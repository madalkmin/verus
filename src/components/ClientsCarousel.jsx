import { motion } from 'framer-motion'
import agropalmaLogo from '../../img/agropalma-cliente.svg'
import dohlerLogo from '../../img/dohler-cliente.png'
import limerstampLogo from '../../img/limerstamp-cliente.png'
import papirusLogo from '../../img/papirus-cliente.png'
import prometalLogo from '../../img/prometal-cliente.jfif'
import ramenzoniLogo from '../../img/ramenzoni-cliente.avif'
import SectionHeading from './SectionHeading'

const clients = [
  {
    name: 'Agropalma',
    logo: agropalmaLogo,
    cardClass: 'clients-marquee__card--dark',
    logoClass: 'max-h-12 max-w-[178px]',
  },
  {
    name: 'Dohler',
    logo: dohlerLogo,
    logoClass: 'max-h-16 max-w-[190px]',
  },
  {
    name: 'Limerstamp',
    logo: limerstampLogo,
    logoClass: 'max-h-14 max-w-[190px]',
  },
  {
    name: 'Papirus',
    logo: papirusLogo,
    logoClass: 'max-h-[4.5rem] max-w-[190px]',
  },
  {
    name: 'Prometal',
    logo: prometalLogo,
    logoClass: 'max-h-[4.25rem] max-w-[190px]',
  },
  {
    name: 'Ramenzoni',
    logo: ramenzoniLogo,
    logoClass: 'max-h-[5.25rem] max-w-[200px]',
  },
]

const carouselRows = [
  { items: clients, reverse: false },
  { items: [...clients].reverse(), reverse: true },
]

function ClientsCarousel() {
  return (
    <section id="clientes" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(232,93,28,.09),transparent_18rem),radial-gradient(circle_at_86%_72%,rgba(20,184,166,.08),transparent_20rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Clientes"
            title="Empresas que confiam na Verus."
            description="Marcas e operações que contam com uma estrutura logística preparada para transportar, armazenar e acompanhar cada etapa com responsabilidade."
          />
          <motion.div
            className="rounded-2xl border border-[#dfe5dd] bg-[#fbfcfa] p-5 shadow-xl shadow-slate-950/[0.06]"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.58, ease: 'easeOut' }}
          >
            <p className="text-sm font-bold leading-6 text-[#5b6472]">
              Um ecossistema de parceiros atendidos com foco em prazo, cuidado e consistência operacional.
            </p>
          </motion.div>
        </div>

        <div className="clients-marquee mt-12 space-y-4">
          {carouselRows.map((row, index) => (
            <div key={index} className="clients-marquee__viewport">
              <div className={`clients-marquee__track ${row.reverse ? 'clients-marquee__track--reverse' : ''}`}>
                {[...row.items, ...row.items, ...row.items].map((client, itemIndex) => (
                  <LogoCard key={`${client.name}-${itemIndex}`} client={client} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoCard({ client }) {
  return (
    <article className={`clients-marquee__card ${client.cardClass || ''}`}>
      <img
        src={client.logo}
        alt={client.name}
        className={`clients-marquee__logo ${client.logoClass}`}
        loading="lazy"
        decoding="async"
      />
    </article>
  )
}

export default ClientsCarousel
