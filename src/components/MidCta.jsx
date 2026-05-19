import { contact } from '../data/siteData'
import { WhatsAppIcon } from './BrandIcon'
import ButtonLink from './ButtonLink'

function MidCta() {
  return (
    <section className="bg-[#f5f7f4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#101722] p-8 text-white shadow-2xl shadow-slate-950/20 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(232,93,28,.26),transparent_20rem),radial-gradient(circle_at_16%_100%,rgba(20,184,166,.14),transparent_18rem)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-200">Cotação e atendimento</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Sua carga precisa de um parceiro confiável?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Fale com a Verus e encontre a melhor solução para transporte, armazenagem ou logística da sua operação.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="#portal-cliente">Solicitar cotação</ButtonLink>
            <ButtonLink
              href={contact.whatsappUrl}
              variant="whatsapp"
              icon={WhatsAppIcon}
            >
              Chamar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidCta
