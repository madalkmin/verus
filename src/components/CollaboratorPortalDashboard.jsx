import {
  BadgeCheck,
  Bell,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  LogOut,
  MapPin,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'
import logoBranco from '../../img/logotipo_verus_transportes_branco.png'

const portalCards = [
  { label: 'Pendências', value: '2 itens', detail: 'Aguardando sua revisão', icon: Bell },
  { label: 'Documentos', value: '4 ativos', detail: 'CNH, ASO, integração e contrato', icon: FileText },
  { label: 'Solicitações', value: '2 abertas', detail: 'Uniforme e atualização cadastral', icon: ClipboardList },
  { label: 'Comunicados', value: '3 novos', detail: 'Última atualização às 09:20', icon: Bell },
]

const activities = [
  'Confirmação de presença registrada para hoje',
  'Novo comunicado sobre checklist operacional',
  'Solicitação de uniforme enviada para análise',
  'Documento de integração marcado como válido',
]

const quickActions = [
  { label: 'Baixar holerite', icon: Download },
  { label: 'Abrir solicitação', icon: MessageSquareText },
  { label: 'Ver documentos', icon: FileText },
]

const collaboratorPhotoUrl = 'https://randomuser.me/api/portraits/men/32.jpg'

const notifications = [
  {
    title: 'Atualização cadastral pendente',
    text: 'Revise seus dados pessoais para manter o cadastro interno atualizado.',
    time: 'Agora',
    tone: 'urgent',
    unread: true,
  },
  {
    title: 'Novo comunicado operacional',
    text: 'Procedimento de conferência atualizado para coletas programadas.',
    time: '09:20',
    tone: 'info',
    unread: true,
  },
  {
    title: 'Documento aprovado',
    text: 'Seu comprovante enviado foi validado pela equipe administrativa.',
    time: 'Ontem',
    tone: 'success',
    unread: false,
  },
  {
    title: 'Solicitação em análise',
    text: 'O pedido de uniforme foi recebido e está aguardando separação.',
    time: 'Segunda',
    tone: 'info',
    unread: false,
  },
]

function CollaboratorPortalDashboard() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const homeUrl = import.meta.env.BASE_URL
  const loginUrl = `${import.meta.env.BASE_URL}#/portal-colaborador`
  const hasDemoAccess = window.localStorage.getItem('verusCollaboratorDemoAccess') === 'active'
  const unreadCount = notifications.filter((notification) => notification.unread).length

  const logout = () => {
    window.localStorage.removeItem('verusCollaboratorDemoAccess')
    window.location.href = loginUrl
  }

  if (!hasDemoAccess) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#101722] px-4 text-white">
        <section className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.08] p-7 text-center shadow-2xl shadow-slate-950/30 backdrop-blur">
          <ShieldCheck className="mx-auto h-10 w-10 text-orange-200" />
          <h1 className="mt-5 text-2xl font-extrabold">Acesso ao protótipo</h1>
          <p className="mt-3 leading-7 text-slate-300">
            Entre com o acesso teste para visualizar o dashboard do colaborador.
          </p>
          <a
            href={loginUrl}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#e85d1c] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#c84c13]"
          >
            Ir para o login
          </a>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f5f7f4] text-[#181f2a]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101722]/95 text-white shadow-xl shadow-slate-950/10 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href={homeUrl} className="flex w-[150px] items-center overflow-hidden" aria-label="Verus Transportes">
            <img src={logoBranco} alt="Verus Transportes" className="h-10 w-full object-contain object-left" />
          </a>
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              onClick={() => setNotificationsOpen((current) => !current)}
              className="relative grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/[0.06] text-slate-200 transition hover:border-orange-300/50 hover:bg-white/[0.1] hover:text-white"
              aria-label="Abrir notificações"
              aria-expanded={notificationsOpen}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#e85d1c] px-1 text-[0.68rem] font-extrabold text-white ring-2 ring-[#101722]">
                {unreadCount}
              </span>
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 top-[calc(100%+0.8rem)] z-50 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/10 bg-white text-[#181f2a] shadow-2xl shadow-slate-950/30">
                <div className="flex items-center justify-between gap-3 border-b border-[#edf0eb] p-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#d85a1c]">Notificações</p>
                    <h2 className="mt-1 text-lg font-extrabold">Central do colaborador</h2>
                  </div>
                  <span className="rounded-full bg-[#fff0e8] px-3 py-1 text-xs font-extrabold text-[#c84c13]">
                    {unreadCount} novas
                  </span>
                </div>
                <div className="grid max-h-[25rem] gap-2 overflow-y-auto p-3">
                  {notifications.map((notification) => (
                    <NotificationItem key={notification.title} notification={notification} compact />
                  ))}
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={logout}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-orange-300/25 bg-orange-400/10 px-4 text-sm font-extrabold text-orange-100 transition hover:bg-orange-400/15"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#101722] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="route-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-200">Dashboard do colaborador</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              Bom dia, Lucas.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Protótipo de área interna para acompanhar documentos, comunicados, solicitações e avisos importantes.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur">
            <div className="flex items-center gap-4">
              <span className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-orange-300/15 text-orange-200 shadow-xl shadow-slate-950/20">
                <img
                  src={collaboratorPhotoUrl}
                  alt="Lucas Almeida"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </span>
              <div>
                <strong className="block text-lg">Lucas Almeida</strong>
                <span className="text-sm font-semibold text-slate-300">Operação logística</span>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-orange-200" /> Cadastro ativo</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-200" /> Limeira-SP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {portalCards.map(({ label, value, detail, icon: Icon }) => (
              <article key={label} className="rounded-2xl border border-[#dfe5dd] bg-white p-5 shadow-xl shadow-slate-950/[0.06]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-[#c84c13]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#6a7484]">{label}</p>
                <strong className="mt-2 block text-2xl">{value}</strong>
                <span className="mt-1 block text-sm font-semibold leading-6 text-[#687385]">{detail}</span>
              </article>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <section className="rounded-2xl border border-[#dfe5dd] bg-white p-6 shadow-xl shadow-slate-950/[0.06]">
              <h2 className="text-xl font-extrabold">Ações rápidas</h2>
              <div className="mt-5 grid gap-3">
                {quickActions.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    className="flex min-h-12 items-center justify-between rounded-xl border border-[#dfe5dd] bg-[#fbfcfa] px-4 text-left font-extrabold transition hover:border-orange-300 hover:bg-white hover:text-[#c84c13]"
                  >
                    <span>{label}</span>
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#dfe5dd] bg-white p-6 shadow-xl shadow-slate-950/[0.06]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold">Avisos importantes</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#687385]">
                    Resumo das mensagens que pedem atenção.
                  </p>
                </div>
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-100 text-[#c84c13]">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#e85d1c] ring-2 ring-white" />
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {notifications.slice(0, 2).map((notification) => (
                  <NotificationItem key={notification.title} notification={notification} compact />
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className="grid gap-5">
          <section className="rounded-2xl border border-[#dfe5dd] bg-white p-6 shadow-xl shadow-slate-950/[0.06]">
            <h2 className="text-xl font-extrabold">Atividade recente</h2>
            <div className="mt-5 grid gap-4">
              {activities.map((activity) => (
                <div key={activity} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a36a]" />
                  <p className="text-sm font-semibold leading-6 text-[#526071]">{activity}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  )
}

function NotificationItem({ notification, compact = false }) {
  const toneClasses = {
    urgent: 'border-[#ffd2bd] bg-[#fff7f2] text-[#c84c13]',
    info: 'border-[#dfe5dd] bg-[#fbfcfa] text-[#435064]',
    success: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  }

  return (
    <div className={`rounded-xl border p-4 ${toneClasses[notification.tone]}`}>
      <div className="flex items-start gap-3">
        <span className="relative mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/80">
          <Bell className="h-4 w-4" />
          {notification.unread && <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#e85d1c]" />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <strong className="block text-sm">{notification.title}</strong>
            <span className="shrink-0 text-xs font-extrabold uppercase tracking-[0.08em] opacity-70">{notification.time}</span>
          </div>
          {!compact && <p className="mt-2 text-sm font-semibold leading-6 opacity-80">{notification.text}</p>}
        </div>
      </div>
    </div>
  )
}

export default CollaboratorPortalDashboard
