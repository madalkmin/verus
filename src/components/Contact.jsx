import { useEffect, useRef, useState } from 'react'
import { Check, CheckCircle2, ChevronDown, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { contact, quickLinks, socialLinks } from '../data/siteData'
import BrandIcon from './BrandIcon'
import SectionHeading from './SectionHeading'

const initialForm = {
  intent: 'quote',
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
}

const contactTypeOptions = [
  { value: 'quote', label: 'Cotação de frete' },
  { value: 'contact', label: 'Comunicação com a Verus' },
]

const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) {
    return digits ? `(${digits}` : ''
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const openExternalUrl = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const createWhatsAppUrl = (lines) => {
  const text = lines.filter(Boolean).join('\n')

  return `${contact.whatsappUrl}?text=${encodeURIComponent(text)}`
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: name === 'phone' ? formatPhoneNumber(value) : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const required = ['name', 'phone', 'email']
    const missing = required.some((field) => !form[field].trim())

    if (missing) {
      setError(
        'Preencha nome, telefone/WhatsApp e e-mail para enviar sua mensagem.',
      )
      setSubmitted(false)
      return
    }

    const isQuote = form.intent === 'quote'
    const whatsappUrl = createWhatsAppUrl(
      isQuote
        ? [
            'Olá, equipe Verus.',
            '',
            'Gostaria de solicitar uma cotação de frete com os dados abaixo:',
            '',
            `Nome: ${form.name}`,
            `Empresa: ${form.company || 'Não informado'}`,
            `Telefone/WhatsApp: ${form.phone}`,
            `E-mail: ${form.email}`,
            '',
            'Detalhes da operação:',
            form.message || 'Não informado',
          ]
        : [
            'Olá, equipe Verus.',
            '',
            'Gostaria de falar com a equipe.',
            '',
            `Nome: ${form.name}`,
            `Empresa: ${form.company || 'Não informado'}`,
            `Telefone/WhatsApp: ${form.phone}`,
            `E-mail: ${form.email}`,
            '',
            'Mensagem:',
            form.message || 'Não informado',
          ],
    )

    setError('')
    setSubmitted(true)
    setForm(initialForm)
    openExternalUrl(whatsappUrl)
  }

  return (
    <section id="contato" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Solicite uma cotação ou fale com a equipe Verus."
          description="Envie os dados da sua operação e receba um retorno para transporte, armazenagem ou logística personalizada."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-[#101722] p-7 text-white shadow-2xl shadow-slate-950/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(232,93,28,.2),transparent_18rem),radial-gradient(circle_at_0%_100%,rgba(20,184,166,.14),transparent_16rem)]" />
            <div className="relative">
              <h3 className="text-2xl font-extrabold">Canais de atendimento</h3>
              <div className="mt-8 grid gap-5">
                <Info icon={Phone} title="Telefones" text={contact.phones.join(' | ')} />
                <Info icon={Mail} title="E-mail" text={contact.email} />
                <Info icon={MapPin} title="Endereço" text={contact.address} />
                <Info icon={Clock3} title="Horário" text={contact.hours} />
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {quickLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.08] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:border-orange-300 hover:bg-white/[0.12]"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-white/[0.12] bg-white/[0.06] p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-200">
                  Redes sociais oficiais
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-[#0d131c]/70 px-3 text-sm font-extrabold text-white transition hover:border-orange-300 hover:bg-white/[0.1] hover:text-orange-100"
                    >
                      <BrandIcon name={social.icon} className="h-4 w-4" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-[#dfe5dd] bg-[#fbfcfa] p-6 shadow-xl shadow-slate-950/[0.07] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <ContactTypeSelect
                value={form.intent}
                onChange={(value) => {
                  setForm((current) => ({ ...current, intent: value }))
                  setSubmitted(false)
                  setError('')
                }}
              />
              <Field label="Nome" name="name" value={form.name} onChange={updateField} placeholder="Ex.: João Pereira" required />
              <Field label="Empresa" name="company" value={form.company} onChange={updateField} placeholder="Ex.: Verus Transportes" />
              <Field label="Telefone/WhatsApp" name="phone" value={form.phone} onChange={updateField} placeholder="Ex.: (19) 3442-6303" required />
              <Field label="E-mail" name="email" type="email" value={form.email} onChange={updateField} placeholder="Ex.: contato@empresa.com.br" required />
              <label className="md:col-span-2">
                <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#435064]">
                  {form.intent === 'quote' ? 'Detalhes da operação' : 'Mensagem'}
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  className="mt-2 w-full rounded-lg border border-[#dfe5dd] bg-white px-4 py-3 text-[#181f2a] outline-none transition placeholder:text-[#8a94a3] focus:border-[#e85d1c] focus:bg-white focus:ring-4 focus:ring-orange-100"
                  placeholder={
                    form.intent === 'quote'
                      ? 'Ex.: coleta em Limeira-SP, entrega em Campinas-SP, carga paletizada, prazo desejado...'
                      : 'Ex.: gostaria de falar com a equipe comercial sobre uma operação recorrente...'
                  }
                />
              </label>
            </div>
            {error && <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
            {submitted && (
              <p className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
                O WhatsApp foi aberto com a mensagem preenchida para envio à Verus.
              </p>
            )}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#e85d1c] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-950/15 transition hover:bg-[#c84c13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d1c]"
            >
              {form.intent === 'quote' ? 'Enviar solicitação de cotação' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-orange-500/15 text-orange-200">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-slate-400">{title}</span>
        <span className="mt-1 block leading-7 text-slate-100">{text}</span>
      </span>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', placeholder = '', required = false }) {
  return (
    <label>
      <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#435064]">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 h-12 w-full rounded-lg border border-[#dfe5dd] bg-white px-4 text-[#181f2a] outline-none transition placeholder:text-[#8a94a3] focus:border-[#e85d1c] focus:bg-white focus:ring-4 focus:ring-orange-100"
      />
    </label>
  )
}

function ContactTypeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const closeOnOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeOnOutside)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeOnOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const selectValue = (option) => {
    onChange(option.value)
    setOpen(false)
  }

  const selectedLabel = contactTypeOptions.find((option) => option.value === value)?.label

  return (
    <div ref={wrapperRef} className="relative md:col-span-2">
      <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#435064]">
        Tipo de serviço desejado
      </span>
      <button
        type="button"
        className={`mt-2 flex h-12 w-full items-center justify-between gap-3 rounded-lg border bg-white px-4 text-left text-[#181f2a] shadow-sm outline-none transition ${
          open
            ? 'border-[#e85d1c] ring-4 ring-orange-100'
            : 'border-[#dfe5dd] hover:border-orange-300'
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? 'font-semibold text-[#181f2a]' : 'text-[#7a8493]'}>
          {selectedLabel || 'Selecione'}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#d85a1c] transition ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-xl border border-[#dfe5dd] bg-white shadow-2xl shadow-slate-950/[0.14]">
          <div className="max-h-72 p-2" role="listbox" aria-label="Tipo de serviço desejado">
            {contactTypeOptions.map((option) => {
              const selected = option.value === value

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
                    selected
                      ? 'bg-[#fff0e8] text-[#a64013]'
                      : 'text-[#435064] hover:bg-[#f5f7f4] hover:text-[#181f2a]'
                  }`}
                  onClick={() => selectValue(option)}
                >
                  <span>{option.label}</span>
                  {selected && <Check className="h-4 w-4 text-[#d85a1c]" aria-hidden="true" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
