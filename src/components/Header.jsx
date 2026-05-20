import { useEffect, useState } from 'react'
import { LockKeyhole, Menu, Phone, X } from 'lucide-react'
import { contact, navLinks, socialLinks } from '../data/siteData'
import { socialBrandClasses } from '../data/socialBrandClasses'
import BrandIcon, { WhatsAppIcon } from './BrandIcon'
import Logo from './Logo'
import SocialCubeButton from './SocialCubeButton'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)
  const employeePortalUrl = `${import.meta.env.BASE_URL}#/portal-colaborador`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-[#101722]/96 shadow-xl shadow-slate-950/20 backdrop-blur-xl'
          : 'border-white/10 bg-[#101722]/88 backdrop-blur-xl'
      } text-white`}
    >
      <div className="mx-auto flex h-[82px] max-w-[92rem] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <Logo light />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 min-[1500px]:flex"
          aria-label="Menu principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.84rem] font-bold !text-slate-100 transition hover:bg-white/10 hover:!text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={employeePortalUrl}
            className="hidden min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-orange-300/25 bg-white/[0.07] px-3.5 text-xs font-extrabold uppercase tracking-[0.1em] !text-orange-100 transition hover:-translate-y-0.5 hover:border-orange-300/60 hover:bg-orange-400/10 hover:!text-white hover:shadow-lg hover:shadow-orange-950/20 xl:inline-flex"
          >
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            Portal do colaborador
          </a>
          <a
            href={contact.phoneUrl}
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-bold !text-slate-100 transition hover:!text-orange-200 min-[1850px]:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contact.phones[0]}
          </a>
          <SocialCubeButton />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/18 text-white transition hover:bg-white/10 min-[1500px]:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-t border-white/10 bg-[#101722] shadow-2xl shadow-slate-950/30 transition-all duration-300 min-[1500px]:hidden ${
          isOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto grid w-full max-w-7xl gap-1 px-4 py-5 sm:px-6" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-lg font-extrabold !text-slate-100 transition hover:bg-white/10 hover:!text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <a
              href={employeePortalUrl}
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-orange-300/25 bg-orange-400/10 px-5 text-sm font-extrabold uppercase tracking-[0.1em] !text-orange-100 transition hover:border-orange-300/70 hover:bg-orange-400/15 hover:!text-white"
            >
              Portal do colaborador
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={contact.whatsappUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#25d366]/25 bg-[#25d366]/10 px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[#25d366] transition hover:border-[#25d366]/70 hover:bg-[#25d366]/20"
            >
              WhatsApp
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <div className="flex justify-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`grid h-11 w-11 place-items-center rounded-lg border transition ${socialBrandClasses[social.icon]}`}
                  aria-label={social.label}
                  onClick={closeMenu}
                >
                  <BrandIcon name={social.icon} colored className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-400">
            {contact.email} · {contact.phones[0]}
          </p>
        </nav>
      </div>
    </header>
  )
}

export default Header
