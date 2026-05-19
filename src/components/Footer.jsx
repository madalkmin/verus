import { Mail, MessageCircle, Phone, Share2 } from 'lucide-react'
import { contact, footerServices, navLinks } from '../data/siteData'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="bg-[#0d131c] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.9fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm leading-7 text-slate-400">
            Transporte rodoviário de cargas, armazenagem e soluções logísticas para empresas que precisam de performance e segurança.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-orange-300 hover:text-orange-200" href={contact.whatsappUrl} aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-orange-300 hover:text-orange-200" href={contact.emailUrl} aria-label="E-mail">
              <Mail className="h-5 w-5" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-orange-300 hover:text-orange-200" href="#" aria-label="LinkedIn">
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        <FooterColumn title="Menu rápido" items={navLinks.map((link) => link.label)} links={navLinks.map((link) => link.href)} />
        <FooterColumn title="Serviços" items={footerServices} />

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-300">Contatos</h3>
          <div className="mt-5 grid gap-3 text-slate-400">
            <a href={contact.phoneUrl} className="flex gap-2 transition hover:text-orange-200">
              <Phone className="mt-1 h-4 w-4 shrink-0" />
              {contact.phones[0]}
            </a>
            <a href={contact.emailUrl} className="flex gap-2 transition hover:text-orange-200">
              <Mail className="mt-1 h-4 w-4 shrink-0" />
              {contact.email}
            </a>
            <p className="leading-7">{contact.address}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 pt-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Verus Transportes. Todos os direitos reservados.</p>
        <p>Protótipo institucional 2.0 para proposta comercial.</p>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items, links = [] }) {
  return (
    <div>
      <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-300">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <a key={item} href={links[index] || '#servicos'} className="text-slate-400 transition hover:text-orange-200">
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
