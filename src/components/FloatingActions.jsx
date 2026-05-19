import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData'

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
        className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 !text-white shadow-2xl shadow-emerald-950/30 ring-2 ring-white/70 transition hover:scale-105 hover:bg-emerald-400"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7 !text-white" strokeWidth={2.6} />
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
