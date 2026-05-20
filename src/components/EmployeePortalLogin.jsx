import { ArrowLeft, ArrowRight, BadgeCheck, Eye, EyeOff, IdCard, LockKeyhole, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import logoBranco from '../../img/logotipo_verus_transportes_branco.png'

const demoAccess = {
  login: 'colaborador@verus.com.br',
  password: 'verus2026',
}

function EmployeePortalLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [credentials, setCredentials] = useState({ login: '', password: '' })
  const homeUrl = import.meta.env.BASE_URL
  const dashboardUrl = `${import.meta.env.BASE_URL}portal-colaborador/dashboard`

  const updateCredential = (event) => {
    const { name, value } = event.target
    setCredentials((current) => ({ ...current, [name]: value }))
    setMessage('')
  }

  const useDemoAccess = () => {
    setCredentials(demoAccess)
    setMessage('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const validLogin = credentials.login.trim().toLowerCase() === demoAccess.login
    const validPassword = credentials.password === demoAccess.password

    if (!validLogin || !validPassword) {
      setMessage('Use o acesso teste informado abaixo para entrar no protótipo do dashboard.')
      return
    }

    window.localStorage.setItem('verusCollaboratorDemoAccess', 'active')
    window.location.href = dashboardUrl
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#101722] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(232,93,28,.22),transparent_25rem),radial-gradient(circle_at_86%_72%,rgba(20,184,166,.14),transparent_28rem),linear-gradient(180deg,#101722_0%,#111a27_48%,#0d131c_100%)]" />
      <div className="route-grid pointer-events-none fixed inset-0 opacity-70" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <a href={homeUrl} className="flex w-[156px] items-center overflow-hidden sm:w-[178px]" aria-label="Verus Transportes">
            <img src={logoBranco} alt="Verus Transportes" className="h-11 w-full object-contain object-left" />
          </a>
          <a
            href={homeUrl}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.06] px-4 text-sm font-extrabold text-slate-200 backdrop-blur transition hover:border-orange-300/50 hover:bg-white/[0.1] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar
          </a>
        </header>

        <div className="grid flex-1 items-center gap-5 py-8 lg:grid-cols-[minmax(0,.92fr)_minmax(390px,.64fr)] lg:gap-8 lg:py-12">
          <section className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl sm:p-8 lg:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-200">Portal do Colaborador</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Acesso interno Verus.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Entre com suas credenciais para acessar sua área de colaborador da Verus Transportes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <PortalSignal icon={ShieldCheck} title="Seguro" text="Acesso controlado" />
              <PortalSignal icon={BadgeCheck} title="Organizado" text="Rotinas internas" />
              <PortalSignal icon={LockKeyhole} title="Privado" text="Uso do colaborador" />
            </div>
          </section>

          <section className="rounded-2xl border border-[#dfe5dd] bg-white p-6 text-[#181f2a] shadow-2xl shadow-slate-950/25 sm:p-8">
            <div className="mb-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#d85a1c]">Entrar</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em]">Portal do Colaborador</h2>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              {message && (
                <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-bold leading-6 text-[#8a3a0d]">
                  {message}
                </div>
              )}

              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-[#293342]">Identificação</span>
                <span className="group flex min-h-14 items-center rounded-xl border border-[#dfe5dd] bg-[#fbfcfa] px-4 text-[#778294] transition focus-within:-translate-y-0.5 focus-within:border-[#e85d1c] focus-within:bg-white focus-within:text-[#d85a1c] focus-within:shadow-lg focus-within:shadow-orange-950/[0.08]">
                  <IdCard className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <input
                    className="min-h-14 w-full min-w-0 bg-transparent px-3 text-base font-bold text-[#181f2a] outline-none placeholder:text-[#9aa4b2]"
                    type="text"
                    name="login"
                    value={credentials.login}
                    onChange={updateCredential}
                    placeholder="E-mail ou CPF"
                    autoComplete="username"
                    required
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-[#293342]">Senha</span>
                <span className="group flex min-h-14 items-center rounded-xl border border-[#dfe5dd] bg-[#fbfcfa] px-4 text-[#778294] transition focus-within:-translate-y-0.5 focus-within:border-[#e85d1c] focus-within:bg-white focus-within:text-[#d85a1c] focus-within:shadow-lg focus-within:shadow-orange-950/[0.08]">
                  <LockKeyhole className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <input
                    className="min-h-14 w-full min-w-0 bg-transparent px-3 text-base font-bold text-[#181f2a] outline-none placeholder:text-[#9aa4b2]"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={credentials.password}
                    onChange={updateCredential}
                    placeholder="Digite sua senha"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-[#778294] transition hover:bg-[#eef2ed] hover:text-[#d85a1c]"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </span>
              </label>

              <div className="rounded-xl border border-[#dfe5dd] bg-[#fbfcfa] p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#d85a1c]">Acesso teste</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#435064]">
                      Login: {demoAccess.login}<br />
                      Senha: {demoAccess.password}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#dfe5dd] bg-white px-4 text-xs font-extrabold uppercase tracking-[0.1em] text-[#181f2a] transition hover:border-orange-300 hover:text-[#c84c13]"
                    onClick={useDemoAccess}
                  >
                    Preencher
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#e85d1c] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-[#c84c13] hover:shadow-2xl hover:shadow-orange-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d1c]"
              >
                Entrar no portal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  )
}

function PortalSignal({ icon: Icon, title, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.07] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.1]">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-orange-300/12 text-orange-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <strong className="mt-4 block text-base text-white">{title}</strong>
      <span className="mt-1 block text-sm font-semibold text-slate-400">{text}</span>
    </div>
  )
}

export default EmployeePortalLogin
