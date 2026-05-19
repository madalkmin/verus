import { ArrowRight } from 'lucide-react'

function ButtonLink({ href, children, variant = 'primary', icon: Icon = ArrowRight, className = '', ...props }) {
  const styles = {
    primary:
      'bg-[#e85d1c] text-white shadow-xl shadow-orange-950/20 hover:bg-[#c84c13] focus-visible:outline-[#e85d1c]',
    secondary:
      'border border-white/20 bg-white/10 text-white backdrop-blur hover:border-orange-300/80 hover:bg-white/15 focus-visible:outline-orange-300',
    whatsapp:
      'border border-[#25d366]/30 bg-[#25d366]/10 text-[#25d366] backdrop-blur hover:border-[#25d366]/70 hover:bg-[#25d366]/20 focus-visible:outline-[#25d366]',
    dark:
      'bg-[#18202c] text-white shadow-xl shadow-slate-950/20 hover:bg-[#243044] focus-visible:outline-[#18202c]',
    light:
      'border border-[#dfe5dd] bg-white text-[#181f2a] shadow-sm hover:border-orange-300 hover:text-[#c84c13] focus-visible:outline-[#e85d1c]',
  }

  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-extrabold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
    </a>
  )
}

export default ButtonLink
