import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { contact } from '../data/siteData'
import { WhatsAppIcon } from './BrandIcon'

function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={contact.whatsappUrl}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#075e54]/30 ring-2 ring-white/70 transition hover:scale-105 hover:bg-[#20bd5a]"
        aria-label="Chamar no WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href="#inicio"
        className={`grid h-12 w-12 place-items-center rounded-full bg-[#18202c] !text-white shadow-xl shadow-slate-950/25 ring-2 ring-white/75 transition hover:bg-[#243044] ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5 !text-white" strokeWidth={2.8} />
      </a>
    </div>
  )
}

export default FloatingActions
