import { ExternalLink, LockKeyhole, MousePointerClick } from 'lucide-react'
import { clientPortalFeatures, contact } from '../data/siteData'

function ClientPortal() {
  return (
    <section id="portal-cliente" className="bg-[#f5f7f4] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#dfe5dd] bg-white shadow-2xl shadow-slate-950/[0.08] lg:grid-cols-[1fr_.82fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(232,93,28,.12),transparent_20rem),radial-gradient(circle_at_90%_82%,rgba(20,184,166,.12),transparent_18rem)]" />
        <div className="relative p-7 sm:p-9 lg:p-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d85a1c]">
            Portal do Cliente
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-[#181f2a] md:text-5xl">
            Solicite sua cotação pelo portal VLPRICE.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b6472] md:text-lg">
            Clientes podem acessar uma área dedicada para enviar solicitações de cotação com mais organização, sem depender do atendimento via WhatsApp.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {clientPortalFeatures.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-[#dfe5dd] bg-[#fbfcfa] p-4 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-orange-100 text-[#c84c13]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-extrabold leading-5 text-[#181f2a]">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center bg-[#101722] p-7 text-white sm:p-9 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(232,93,28,.25),transparent_17rem),linear-gradient(145deg,rgba(24,34,48,.96),rgba(10,15,24,.98))]" />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-orange-200">
              <LockKeyhole className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-2xl font-extrabold leading-tight">
              Entrar no Portal do Cliente
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Acesse o ambiente do <a href="https://vlprice.com" target="_blank" rel="noreferrer">VLPRICE</a> para abrir uma nova solicitação de cotação.
            </p>
            <a
              href={contact.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#e85d1c] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-950/20 transition hover:bg-[#c84c13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d1c]"
            >
              Acessar portal
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-slate-300">
              <MousePointerClick className="h-5 w-5 shrink-0 text-orange-200" />
              Caso não tenha uma conta, basta criar uma.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientPortal
