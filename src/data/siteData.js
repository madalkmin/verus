import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Factory,
  Forklift,
  Handshake,
  Headset,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  PackageCheck,
  Phone,
  Quote,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TimerReset,
  Truck,
  Users,
  Warehouse,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  // { label: 'Estrutura', href: '#estrutura' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export const contact = {
  phones: ['(19) 3442.6116', '(19) 3442.6123', '(19) 3442.6303'],
  email: 'contato@verustransportes.com.br',
  address:
    'Estrada Dr. Cassio de Freitas Levy, 2090, Jd. São Francisco, Limeira-SP - CEP: 13.484-720',
  hours: 'Segunda a sexta, 08h às 18h',
  whatsappUrl: 'https://wa.me/551934426303',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Estrada%20Dr.%20Cassio%20de%20Freitas%20Levy%202090%20Limeira%20SP',
  emailUrl: 'mailto:contato@verustransportes.com.br',
  phoneUrl: 'tel:+551934426116',
}

export const heroMetrics = [
  { value: '15+', label: 'anos de experiência', icon: BadgeCheck },
  { value: 'Limeira-SP', label: 'operação estratégica', icon: MapPin },
  { value: 'Dedicada', label: 'cargas fechadas e expressas', icon: Truck },
  { value: 'Integrada', label: 'armazenagem e movimentação', icon: Warehouse },
]

export const stats = [
  { value: '15', label: 'anos de estrada', icon: Route },
  { value: 'B2B', label: 'atendimento empresarial', icon: BriefcaseBusiness },
  { value: '100%', label: 'operações dedicadas', icon: Target },
  { value: '24h', label: 'visão de controle operacional', icon: Radar },
  { value: 'SP', label: 'base em Limeira', icon: Navigation },
  { value: '360°', label: 'transporte, armazenagem e logística', icon: Boxes },
]

export const aboutHighlights = [
  { title: 'Atendimento próximo', icon: Headset },
  { title: 'Operação responsável', icon: ShieldCheck },
  { title: 'Equipe treinada', icon: Users },
  { title: 'Estrutura completa', icon: Factory },
  { title: 'Prazo e segurança', icon: TimerReset },
]

export const mvvCards = [
  {
    title: 'Missão',
    text: 'Transportar, armazenar e distribuir produtos com qualidade, seriedade e pontualidade.',
    icon: Target,
  },
  {
    title: 'Visão',
    text: 'Ser reconhecida como uma empresa logística sólida, eficiente e comprometida com clientes, colaboradores, sociedade e meio ambiente.',
    icon: Sparkles,
  },
  {
    title: 'Valores',
    text: 'Determinação, comprometimento, respeito, organização, segurança, companheirismo, honestidade e humildade.',
    icon: HeartHandshake,
  },
]

export const services = [
  {
    title: 'Transporte de Cargas Fechadas',
    description:
      'Caminhão dedicado sob agendamento, ideal para operações que exigem exclusividade, segurança e previsibilidade.',
    tag: 'Operação dedicada',
    icon: Truck,
  },
  {
    title: 'Fretes Expressos Programados',
    description:
      'Agilidade para entregas planejadas com foco em prazo, controle e eficiência operacional.',
    tag: 'Agilidade',
    icon: Zap,
  },
  {
    title: 'Armazenagem de Cargas',
    description:
      'Espaço e estrutura para armazenar mercadorias com organização, segurança e controle.',
    tag: 'Segurança',
    icon: Warehouse,
  },
  {
    title: 'Movimentação e Mão de Obra',
    description:
      'Apoio operacional para carga, descarga, separação e movimentação de produtos.',
    tag: 'Apoio operacional',
    icon: Forklift,
  },
  {
    title: 'Logística Personalizada',
    description:
      'Soluções adaptadas à necessidade de cada cliente, do primeiro contato até a entrega final.',
    tag: 'Controle',
    icon: PackageCheck,
  },
]

export const differentials = [
  { title: 'Localização estratégica em Limeira-SP', icon: MapPin },
  { title: 'Equipe treinada e atualizada', icon: Users },
  { title: 'Atendimento próximo do cliente', icon: Handshake },
  { title: 'Operações com responsabilidade', icon: ShieldCheck },
  { title: 'Estrutura para transporte e armazenagem', icon: Warehouse },
  { title: 'Foco em segurança e pontualidade', icon: Clock3 },
  { title: 'Soluções para diferentes tipos de carga', icon: Boxes },
  { title: 'Comunicação clara do início ao fim', icon: MessageCircle },
]

export const gallery = [
  { title: 'Frota dedicada', text: 'Veículos prontos para operações programadas.', icon: Truck },
  { title: 'Armazém', text: 'Organização para armazenagem e controle de cargas.', icon: Warehouse },
  { title: 'Carga e descarga', text: 'Fluxo operacional para movimentação segura.', icon: Forklift },
  { title: 'Equipe operacional', text: 'Pessoas treinadas para cuidar de cada etapa.', icon: Users },
  { title: 'Segurança', text: 'Procedimentos com foco em integridade e rastreabilidade.', icon: ShieldCheck },
  { title: 'Atendimento', text: 'Comunicação próxima para decisões rápidas.', icon: Headset },
]

export const processSteps = [
  { title: 'Solicitação', icon: MessageCircle },
  { title: 'Análise da necessidade', icon: Radar },
  { title: 'Planejamento logístico', icon: Route },
  { title: 'Coleta ou recebimento', icon: PackageCheck },
  { title: 'Transporte / armazenagem', icon: Truck },
  { title: 'Entrega e acompanhamento', icon: BadgeCheck },
]

export const testimonials = [
  {
    name: 'Rodrigo Rochia',
    role: 'Coordenador de compras',
    company: 'PRO METAL',
    text: 'A Verus sempre demonstrou compromisso com nossas demandas, entregando segurança, agilidade e uma comunicação muito clara durante a operação.',
    icon: Quote,
    stars: Star,
  },
  {
    name: 'Tatiana Euleoterio',
    role: 'Faturamento',
    company: 'New.up! Eletrodomésticos',
    text: 'Encontramos na Verus um parceiro confiável para transporte e apoio logístico, com atendimento próximo e responsabilidade com prazos.',
    icon: Quote,
    stars: Star,
  },
]

export const quickLinks = [
  { label: 'Ligar', href: contact.phoneUrl, icon: Phone },
  { label: 'WhatsApp', href: contact.whatsappUrl, icon: MessageCircle },
  { label: 'Abrir rota', href: contact.mapsUrl, icon: Navigation },
  { label: 'Enviar e-mail', href: contact.emailUrl, icon: Mail },
]

export const footerServices = services.map((service) => service.title)

export const ArrowIcon = ArrowRight
export const BuildingIcon = Building2
