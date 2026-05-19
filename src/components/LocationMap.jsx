import { Clock3, MapPin, Navigation, Phone } from 'lucide-react'
import { contact } from '../data/siteData'

const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapQuery = encodeURIComponent(contact.address)
const apiMapEmbedUrl = mapsApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${mapQuery}&zoom=15`
  : ''
const publicMapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed&z=15`
const mapEmbedUrl = apiMapEmbedUrl || publicMapEmbedUrl

function LocationMap() {
  return (
    <section id="localizacao" className="bg-[#f5f7f4] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-[#dfe5dd] bg-white shadow-2xl shadow-slate-950/[0.08] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative bg-[#101722] p-7 text-white sm:p-9 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(37,211,102,.16),transparent_18rem),radial-gradient(circle_at_8%_88%,rgba(232,93,28,.16),transparent_17rem)]" />
            <div className="relative">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-200">
                Localização
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
                Base da Verus em Limeira-SP
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                Atendimento logístico com acesso estratégico para operações em Limeira, região e rotas empresariais.
              </p>

              <div className="mt-8 grid gap-4">
                <Info icon={MapPin} label="Endereço" value={contact.address} />
                <Info icon={Clock3} label="Horário" value={contact.hours} />
                <Info icon={Phone} label="Telefone" value={contact.phones[2]} />
              </div>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#e85d1c] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-orange-950/20 transition hover:bg-[#c84c13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e85d1c]"
              >
                Abrir rota
                <Navigation className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="min-h-[420px] bg-[#dfe5dd] lg:min-h-[520px]">
            <iframe
              title="Mapa da localização da Verus Transportes"
              src={mapEmbedUrl}
              className="h-full min-h-[420px] w-full border-0 lg:min-h-[520px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/[0.08] text-orange-200">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">{label}</span>
        <span className="mt-1 block leading-7 text-slate-100">{value}</span>
      </span>
    </div>
  )
}

export default LocationMap
