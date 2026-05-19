import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BriefcaseBusiness, CheckCircle2, Upload, X } from 'lucide-react'
import { contact } from '../data/siteData'

const initialCareerForm = {
  name: '',
  phone: '',
  email: '',
  role: '',
}

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

function Careers() {
  const [isOpen, setIsOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState(initialCareerForm)
  const [fileName, setFileName] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: name === 'phone' ? formatPhoneNumber(value) : value }))
  }

  const submitCareer = (event) => {
    event.preventDefault()

    const whatsappUrl = createWhatsAppUrl([
      'Olá, equipe Verus.',
      '',
      'Gostaria de me candidatar para uma oportunidade na empresa.',
      '',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Cargo de interesse: ${form.role}`,
      `Arquivo selecionado: ${fileName || 'Não informado'}`,
      '',
      'Observação: vou anexar o currículo nesta conversa.',
    ])

    setSent(true)
    openExternalUrl(whatsappUrl)
  }

  const openModal = () => {
    setSent(false)
    setIsOpen(true)
  }

  return (
    <section className="bg-[#f5f7f4] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="soft-panel grid gap-8 rounded-2xl border border-[#dfe5dd] bg-white p-8 shadow-sm md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d85a1c]">Trabalhe conosco</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#181f2a] md:text-4xl">Faça parte do time Verus</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5b6472]">
              Estamos sempre em busca de pessoas comprometidas com segurança, responsabilidade e excelência operacional.
            </p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="relative inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#18202c] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#243044]"
          >
            Enviar currículo
            <BriefcaseBusiness className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.form
              onSubmit={submitCareer}
              className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl md:p-8"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-[#f1f4ef] text-[#181f2a] transition hover:bg-[#e6ebe4]"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar trabalhe conosco"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="pr-12 text-3xl font-extrabold text-[#181f2a]">Envie seu currículo</h3>
              <p className="mt-3 leading-7 text-[#5b6472]">
                Preencha os dados e envie pelo WhatsApp da Verus.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <Input label="Nome" name="name" value={form.name} onChange={updateField} placeholder="Ex.: Ana Souza" required />
                <Input label="Telefone" name="phone" value={form.phone} onChange={updateField} placeholder="Ex.: (19) 99999-9999" required />
                <Input label="E-mail" name="email" type="email" value={form.email} onChange={updateField} placeholder="Ex.: ana@email.com" required />
                <Input label="Cargo de interesse" name="role" value={form.role} onChange={updateField} placeholder="Ex.: Motorista, auxiliar operacional" required />
                <label className="md:col-span-2">
                  <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#435064]">Currículo</span>
                  <span className="mt-2 flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#cfd8cf] bg-[#fbfcfa] px-4 text-center text-sm font-bold text-[#5b6472] transition hover:border-orange-300 hover:bg-white">
                    <Upload className="h-5 w-5 text-[#d85a1c]" />
                    <span>{fileName || 'Selecionar arquivo PDF ou DOC'}</span>
                    <span className="text-xs font-semibold text-[#7a8493]">O arquivo deve ser anexado no WhatsApp antes do envio.</span>
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(event) => setFileName(event.target.files?.[0]?.name || '')}
                  />
                </label>
              </div>
              {sent && (
                <p className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                  O WhatsApp foi aberto com seus dados. Anexe o currículo antes de enviar.
                </p>
              )}
              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#e85d1c] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-950/15 transition hover:bg-[#c84c13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d1c]"
              >
                Enviar currículo
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Input({ label, name, value, onChange, type = 'text', placeholder = '', required = false }) {
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

export default Careers
